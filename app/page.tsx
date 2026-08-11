import Image from "next/image";
import Link from "next/link";

const screenshots = [
  ["01-jedna-osoba-nie-zna-hasla.png", "Jedna osoba nie zna hasła"],
  ["02-kazdy-zna-haslo.png", "Każdy zna hasło — prawie każdy"],
  ["03-jedno-skojarzenie.png", "Jedno skojarzenie może Cię zdradzić"],
  ["04-glosujcie-3-2-1.png", "Głosowanie na impostora"],
  ["05-450-hasel-3-poziomy.png", "450 biblijnych haseł"],
  ["06-pelna-wersja.png", "Pełna wersja bez abonamentu"],
] as const;

function StoreButton({ store }: { store: "App Store" | "Google Play" }) {
  return (
    <span className="store-button" aria-label={`${store} — aplikacja wkrótce`}>
      <span className="store-icon" aria-hidden="true">{store === "App Store" ? "●" : "▶"}</span>
      <span><small>WKRÓTCE W</small>{store}</span>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link href="#start" className="brand-link" aria-label="ATONI — początek strony">
          <Image src="/brand/atoni-logo.png" alt="ATONI" width={720} height={270} priority />
        </Link>
        <nav aria-label="Główna nawigacja">
          <a href="#jak-grac">Jak grać</a>
          <a href="#zrzuty">Zrzuty</a>
          <a href="#premium">Premium</a>
        </nav>
        <a className="header-cta" href="#pobierz">Pobierz grę</a>
      </header>

      <section className="hero" id="start">
        <div className="hero-copy">
          <p className="eyebrow">BIBLIJNY IMPOSTOR • GRA TOWARZYSKA 13+</p>
          <h1>Kto zna hasło, a kto tylko dobrze udaje?</h1>
          <p className="hero-lead">
            Jedno biblijne hasło. Jedna osoba bez odpowiedzi. Podawajcie skojarzenia,
            obserwujcie reakcje i odkryjcie impostora — zanim on odkryje hasło.
          </p>
          <div className="store-row" id="pobierz">
            <StoreButton store="App Store" />
            <StoreButton store="Google Play" />
          </div>
          <p className="release-note">Premiera w przygotowaniu. Zostaw tę stronę w zakładkach.</p>
        </div>

        <div className="hero-art" aria-label="Podgląd gry ATONI">
          <div className="paper paper-blue" />
          <div className="paper paper-cream" />
          <Image
            className="hero-phone"
            src="/screenshots/01-jedna-osoba-nie-zna-hasla.png"
            alt="Ekran gry ATONI na telefonie"
            width={1206}
            height={2622}
            priority
          />
          <Image
            className="hero-donkey"
            src="/brand/donkey-mascot.png"
            alt="Oślica — maskotka ATONI"
            width={1254}
            height={1254}
            priority
          />
          <p className="hero-sticker">3–12 OSÓB<br />JEDEN TELEFON</p>
        </div>
      </section>

      <section className="section light" id="jak-grac">
        <div className="section-heading">
          <p className="eyebrow dark">ZASADY W 60 SEKUND</p>
          <h2>Prosta do wyjaśnienia.<br />Trudna do rozgryzienia.</h2>
        </div>
        <div className="steps">
          <article><span>1</span><h3>Poznaj swoją rolę</h3><p>Każdy widzi hasło. Jedna osoba dostaje tylko podpowiedź i musi się nie zdradzić.</p></article>
          <article><span>2</span><h3>Podaj skojarzenie</h3><p>Mów wystarczająco konkretnie, by przekonać innych — ale nie pomagaj impostorowi.</p></article>
          <article><span>3</span><h3>Zagłosujcie</h3><p>Wskażcie podejrzaną osobę. Jeśli traficie, impostor ma jeszcze szansę odgadnąć hasło.</p></article>
        </div>
      </section>

      <section className="section screenshots-section" id="zrzuty">
        <div className="section-heading row-heading">
          <div>
            <p className="eyebrow">ZOBACZ GRĘ</p>
            <h2>Telefon krąży.<br />Podejrzenia rosną.</h2>
          </div>
          <p className="section-note">Przesuń, aby zobaczyć kolejne ekrany →</p>
        </div>
        <div className="screenshots" aria-label="Zrzuty ekranu aplikacji ATONI">
          {screenshots.map(([file, alt]) => (
            <figure key={file}>
              <Image src={`/screenshots/${file}`} alt={alt} width={1206} height={2622} />
            </figure>
          ))}
        </div>
      </section>

      <section className="section features">
        <div className="feature-main">
          <p className="eyebrow dark">GRA DLA KAŻDEJ EKIPY</p>
          <h2>450 biblijnych haseł.<br /><em>Zero nudnych rund.</em></h2>
          <p>Postacie, miejsca, wydarzenia i symbole — od tych dobrze znanych po takie, które wyciągają na światło prawdziwych znawców.</p>
        </div>
        <div className="feature-grid">
          <article><strong>3</strong><span>poziomy trudności</span></article>
          <article><strong>3–12</strong><span>osób przy jednym telefonie</span></article>
          <article><strong>PL</strong><span>na start, kolejne języki w planie</span></article>
          <article><strong>13+</strong><span>dla młodzieży i dorosłych</span></article>
        </div>
      </section>

      <section className="section premium" id="premium">
        <div className="premium-card">
          <div>
            <p className="eyebrow">PEŁNA WERSJA ATONI</p>
            <h2>Jedna płatność.<br /><span>Graj bez limitu.</span></h2>
            <ul>
              <li>pełna baza 450 haseł</li>
              <li>wszystkie poziomy trudności</li>
              <li>bez abonamentu</li>
            </ul>
          </div>
          <div className="charity-note">
            <strong>5%</strong>
            <p>zysku ze sprzedaży ATONI Premium przeznaczamy na cele charytatywne.</p>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <Image src="/brand/donkey-mascot.png" alt="" width={1254} height={1254} />
        <div>
          <p className="eyebrow dark">GOTOWI NA PIERWSZĄ RUNDĘ?</p>
          <h2>Jedna osoba nie zna hasła.</h2>
          <p>A reszta nie może dać po sobie poznać, że je zna.</p>
          <div className="store-row"><StoreButton store="App Store" /><StoreButton store="Google Play" /></div>
        </div>
      </section>

      <footer>
        <Image src="/brand/atoni-logo.png" alt="ATONI" width={720} height={270} />
        <p>Biblijna gra towarzyska na iOS i Androida.</p>
        <div className="footer-links">
          <Link href="/privacy">Polityka prywatności</Link>
          <Link href="/terms">Regulamin</Link>
          <a href="mailto:contact@atoni.app">contact@atoni.app</a>
        </div>
        <small>© 2026 ATONI. Wszystkie prawa zastrzeżone.</small>
      </footer>
    </main>
  );
}
