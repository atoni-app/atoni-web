import Image from "next/image";
import Link from "next/link";
import type { SiteCopy, SiteLocale } from "@/app/content/site-copy";

const screenshotFiles: Record<SiteLocale, readonly string[]> = {
  pl: [
    "01-jedna-osoba-nie-zna-hasla.png",
    "02-kazdy-zna-haslo.png",
    "03-jedno-skojarzenie.png",
    "04-glosujcie-3-2-1.png",
    "05-450-hasel-3-poziomy.png",
    "06-pelna-wersja.png",
  ],
  en: [
    "en/01-one-player-does-not-know.png",
    "en/02-almost-everyone-knows.png",
    "en/03-one-association.png",
    "en/04-vote-3-2-1.png",
    "en/05-450-words-3-levels.png",
    "en/06-full-version.png",
  ],
  es: [
    "es/01-una-persona-no-sabe.png",
    "es/02-casi-todos-la-conocen.png",
    "es/03-una-asociacion.png",
    "es/04-votad-3-2-1.png",
    "es/05-450-palabras-3-niveles.png",
    "es/06-version-completa.png",
  ],
};

const localePaths: Record<SiteLocale, string> = { pl: "/", en: "/en", es: "/es" };

function StoreButton({ store, comingSoon }: { store: "App Store" | "Google Play"; comingSoon: string }) {
  return (
    <span className="store-button" aria-label={`${store}, ${comingSoon.toLocaleLowerCase()}`}>
      <span className="store-icon" aria-hidden="true">{store === "App Store" ? "●" : "▶"}</span>
      <span><small>{comingSoon}</small>{store}</span>
    </span>
  );
}

function LanguageSwitcher({ active }: { active: SiteLocale }) {
  return (
    <div className="language-switcher" aria-label="Language">
      {(Object.keys(localePaths) as SiteLocale[]).map((locale) => (
        <Link key={locale} href={localePaths[locale]} className={locale === active ? "active" : undefined} hrefLang={locale}>
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

export function LandingPage({ copy }: { copy: SiteCopy }) {
  const legalPrefix = copy.locale === "pl" ? "" : `/${copy.locale}`;
  const localizedScreenshots = screenshotFiles[copy.locale];

  return (
    <main lang={copy.locale}>
      <header className="site-header">
        <Link href="#start" className="brand-link" aria-label="ATONI, home">
          <Image src="/brand/atoni-logo.png" alt="ATONI" width={720} height={270} />
        </Link>
        <nav aria-label="Main navigation">
          <a href="#jak-grac">{copy.nav[0]}</a>
          <a href="#zrzuty">{copy.nav[1]}</a>
          <a href="#premium">{copy.nav[2]}</a>
        </nav>
        <LanguageSwitcher active={copy.locale} />
        <a className="header-cta" href="#pobierz">{copy.headerCta}</a>
      </header>

      <section className="hero" id="start">
        <div className="hero-copy">
          <p className="eyebrow">{copy.heroTag}</p>
          <h1>{copy.heroTitle}</h1>
          <p className="hero-lead">{copy.heroLead}</p>
          <div className="store-row" id="pobierz">
            <StoreButton store="App Store" comingSoon={copy.comingSoon} />
            <StoreButton store="Google Play" comingSoon={copy.comingSoon} />
          </div>
          <p className="release-note">{copy.releaseNote}</p>
        </div>

        <div className="hero-art" aria-label="ATONI game preview">
          <div className="paper paper-blue" />
          <div className="paper paper-cream" />
          <Image className="hero-phone" src={`/screenshots/${localizedScreenshots[0]}`} alt={copy.screenshotAlts[0]} width={1206} height={2622} />
          <Image className="hero-donkey" src="/brand/donkey-mascot.png" alt="ATONI mascot" width={1254} height={1254} />
          <p className="hero-sticker">{copy.sticker[0]}<br />{copy.sticker[1]}</p>
        </div>
      </section>

      <section className="section light" id="jak-grac">
        <div className="section-heading">
          <p className="eyebrow dark">{copy.rulesTag}</p>
          <h2>{copy.rulesTitle[0]}<br />{copy.rulesTitle[1]}</h2>
        </div>
        <div className="steps">
          {copy.steps.map(([title, text], index) => (
            <article key={title}><span>{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="section screenshots-section" id="zrzuty">
        <div className="section-heading row-heading">
          <div><p className="eyebrow">{copy.screenshotsTag}</p><h2>{copy.screenshotsTitle[0]}<br />{copy.screenshotsTitle[1]}</h2></div>
          <p className="section-note">{copy.screenshotsNote}</p>
        </div>
        <div className="screenshots" aria-label={copy.screenshotsTag}>
          {localizedScreenshots.map((file, index) => (
            <figure key={file}><Image src={`/screenshots/${file}`} alt={copy.screenshotAlts[index]} width={1206} height={2622} /></figure>
          ))}
        </div>
      </section>

      <section className="section features">
        <div className="feature-main">
          <p className="eyebrow dark">{copy.featuresTag}</p>
          <h2>{copy.featuresTitle[0]}<br /><em>{copy.featuresTitle[1]}</em></h2>
          <p>{copy.featuresText}</p>
        </div>
        <div className="feature-grid">
          {copy.stats.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}
        </div>
      </section>

      <section className="section premium" id="premium">
        <div className="premium-card">
          <div>
            <p className="eyebrow">{copy.premiumTag}</p>
            <h2>{copy.premiumTitle[0]}<br /><span>{copy.premiumTitle[1]}</span></h2>
            <ul>{copy.premiumBenefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
          </div>
          <div className="charity-note"><strong>5%</strong><p>{copy.charity}</p></div>
        </div>
      </section>

      <section className="section final-cta">
        <Image src="/brand/donkey-mascot.png" alt="" width={1254} height={1254} />
        <div>
          <p className="eyebrow dark">{copy.finalTag}</p>
          <h2>{copy.finalTitle}</h2>
          <p>{copy.finalText}</p>
          <div className="store-row"><StoreButton store="App Store" comingSoon={copy.comingSoon} /><StoreButton store="Google Play" comingSoon={copy.comingSoon} /></div>
        </div>
      </section>

      <footer>
        <Image src="/brand/atoni-logo.png" alt="ATONI" width={720} height={270} />
        <p>{copy.footerText}</p>
        <div className="footer-links">
          <Link href={`${legalPrefix}/privacy`}>{copy.privacy}</Link>
          <Link href={`${legalPrefix}/terms`}>{copy.terms}</Link>
          <a href="mailto:contact@atoni.app">contact@atoni.app</a>
        </div>
        <small>© 2026 ATONI. {copy.rights}</small>
      </footer>
    </main>
  );
}
