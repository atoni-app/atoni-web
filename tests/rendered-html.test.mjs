import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { after, before, test } from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const port = 3100;
let server;

before(async () => {
  server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "-p", String(port)], {
    cwd: projectRoot,
    env: { ...process.env, NODE_ENV: "production" },
    stdio: ["ignore", "pipe", "pipe"],
  });

  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) throw new Error(`Next.js server exited with code ${server.exitCode}`);
    try {
      const response = await fetch(`http://localhost:${port}/`);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  throw new Error("Next.js test server did not start within 30 seconds");
});

after(() => {
  server?.kill("SIGTERM");
});

async function render(path = "/") {
  return fetch(`http://localhost:${port}${path}`, { headers: { accept: "text/html" } });
}

test("renders the ATONI landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>ATONI \| biblijny impostor<\/title>/i);
  assert.match(html, /Kto zna hasło/);
  assert.match(html, /450 biblijnych haseł/i);
  assert.match(html, /Polityka prywatności/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("renders public legal pages", async () => {
  const privacy = await render("/privacy");
  const terms = await render("/terms");
  assert.equal(privacy.status, 200);
  assert.equal(terms.status, 200);
  assert.match(await privacy.text(), /Marek Oczkowski/);
  assert.match(await terms.text(), /ATONI Premium/);
});

test("renders localized legal pages", async () => {
  const englishPrivacy = await render("/en/privacy");
  const englishTerms = await render("/en/terms");
  const spanishPrivacy = await render("/es/privacy");
  const spanishTerms = await render("/es/terms");
  assert.equal(englishPrivacy.status, 200);
  assert.equal(englishTerms.status, 200);
  assert.equal(spanishPrivacy.status, 200);
  assert.equal(spanishTerms.status, 200);
  assert.match(await englishPrivacy.text(), /Data controller/);
  assert.match(await englishTerms.text(), /Apple’s Standard Licensed Application/);
  assert.match(await spanishPrivacy.text(), /Responsable del tratamiento/);
  assert.match(await spanishTerms.text(), /contrato estándar de licencia/);
});

test("renders English and Spanish landing pages", async () => {
  const english = await render("/en");
  const spanish = await render("/es");
  assert.equal(english.status, 200);
  assert.equal(spanish.status, 200);
  const englishHtml = await english.text();
  const spanishHtml = await spanish.text();
  assert.match(englishHtml, /Who knows the word/);
  assert.match(englishHtml, /screenshots\/en\/01-one-player-does-not-know\.png/);
  assert.match(spanishHtml, /Quién conoce la palabra/);
  assert.match(spanishHtml, /screenshots\/es\/01-una-persona-no-sabe\.png/);
});
