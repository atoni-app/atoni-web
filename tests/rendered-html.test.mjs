import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the ATONI landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>ATONI — biblijny impostor<\/title>/i);
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
