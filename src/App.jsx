import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { profile, tabs, setup, devFree, devProducts, generalLinks, footer } from "./data.js";
import { getIcon } from "./icons.js";

const ext = { target: "_blank", rel: "noopener noreferrer" };

function Header() {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-line bg-white p-1 shadow-sm">
        {profile.avatar ? (
          <img src={profile.avatar} alt={profile.name} className="h-full w-full rounded-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-caramel/20 text-3xl font-semibold text-caramel">
            {profile.name.charAt(0)}
          </div>
        )}
      </div>
      <h1 className="mt-4 text-xl font-semibold tracking-tight">{profile.username}</h1>
      <p className="mt-1 max-w-sm text-sm text-espresso/70">{profile.bio}</p>
      <nav className="mt-5 flex gap-3" aria-label="Redes sociais">
        {profile.socials.map((s) => {
          const Icon = getIcon(s.icon);
          return (
            <a
              key={s.label}
              href={s.url}
              aria-label={s.label}
              title={s.label}
              {...ext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-espresso shadow-sm transition hover:scale-110 hover:border-caramel hover:text-caramel hover:shadow-md"
            >
              <Icon size={18} strokeWidth={1.8} />
            </a>
          );
        })}
      </nav>
    </header>
  );
}

function Tabs({ active, onChange }) {
  return (
    <div role="tablist" className="mt-8 grid grid-cols-2 gap-1 rounded-2xl border border-line bg-white p-1 shadow-sm">
      {tabs.map((t) => {
        const Icon = getIcon(t.icon);
        const on = active === t.id;
        return (
          <button
            key={t.id}
            role="tab"
            aria-selected={on}
            onClick={() => onChange(t.id)}
            className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl px-2 py-2.5 text-sm font-medium transition-all duration-200 ${
              on ? "bg-espresso text-cream shadow" : "text-espresso/70 hover:bg-cream"
            }`}
          >
            <Icon size={16} className={on ? "text-caramel" : ""} />
            <span className="hidden sm:inline">{t.label}</span>
            <span className="sm:hidden">{t.short}</span>
          </button>
        );
      })}
    </div>
  );
}

// Recurso gratuito: ícone + badge + botão "Acessar recurso", sem foto
function FreeResourceCard({ item }) {
  const Icon = getIcon(item.icon);
  return (
    <a
      href={item.url}
      {...ext}
      className="group flex flex-col gap-3 rounded-2xl border border-line bg-white p-4 shadow-sm transition duration-200 hover:scale-[1.02] hover:shadow-md"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-caramel/15 text-caramel">
          <Icon size={22} strokeWidth={1.8} />
        </div>
        <div className="min-w-0 flex-1">
          <span className="inline-block rounded-full bg-caramel px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
            {item.badge}
          </span>
          <h3 className="mt-1 text-sm font-semibold leading-snug">{item.title}</h3>
          <p className="mt-0.5 text-xs leading-relaxed text-espresso/60">{item.description}</p>
        </div>
      </div>
      <span className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-espresso px-3 py-2 text-xs font-medium text-cream transition group-hover:bg-caramel">
        Acessar recurso ↗
      </span>
    </a>
  );
}

function SetupCard({ item }) {
  const Icon = getIcon(item.icon);
  return (
    <a
      href={item.url}
      {...ext}
      className="group flex flex-col rounded-2xl border border-line bg-white p-3 shadow-sm transition duration-200 hover:scale-[1.02] hover:shadow-md"
    >
      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-cream text-caramel">
        {item.image ? (
          <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
        ) : (
          <Icon size={36} strokeWidth={1.5} />
        )}
      </div>
      <span className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-caramel">{item.category}</span>
      <h3 className="mt-0.5 flex-1 text-sm font-semibold leading-snug">{item.title}</h3>
      <span className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-lg bg-espresso px-3 py-2 text-xs font-medium text-cream transition group-hover:bg-caramel">
        Ver produto <ExternalLink size={12} />
      </span>
    </a>
  );
}

// Produto/livro de afiliada: foto (ou ícone como placeholder) + botão "Ver produto"
function ProductCard({ item }) {
  const Icon = getIcon(item.icon);
  return (
    <a
      href={item.url}
      {...ext}
      className="group relative flex flex-col rounded-2xl border border-line bg-white p-3 shadow-sm transition duration-200 hover:scale-[1.02] hover:shadow-md"
    >
      {item.badge && (
        <span className="absolute right-5 top-5 z-10 rounded-full bg-caramel px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white shadow-sm">
          {item.badge}
        </span>
      )}
      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-cream text-caramel">
        {item.image ? (
          <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
        ) : (
          <Icon size={36} strokeWidth={1.5} />
        )}
      </div>
      <h3 className="mt-3 text-sm font-semibold leading-snug">{item.title}</h3>
      <p className="mt-1 flex-1 text-xs leading-relaxed text-espresso/60">{item.description}</p>
      <span className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-lg bg-espresso px-3 py-2 text-xs font-medium text-cream transition group-hover:bg-caramel">
        Ver produto ↗
      </span>
    </a>
  );
}

function SectionTitle({ children }) {
  return <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-espresso/50">{children}</h2>;
}

// Vitrines gerais (Hero): cards compactos escuros, sem foto
function GeneralLinkCard({ item }) {
  const Icon = getIcon(item.icon);
  return (
    <a
      href={item.url}
      title={item.title}
      {...ext}
      className="group flex items-center gap-2.5 rounded-xl bg-espresso px-3 py-2.5 text-cream shadow-sm transition duration-200 hover:scale-[1.02] hover:shadow-md"
    >
      <Icon size={18} strokeWidth={1.8} className="shrink-0 text-caramel" />
      <span className="min-w-0 flex-1 truncate text-sm font-semibold">{item.shortTitle}</span>
      <ExternalLink size={14} className="shrink-0 text-cream/40 transition group-hover:text-caramel" />
    </a>
  );
}

export default function App() {
  const [active, setActive] = useState(tabs[0].id);
  return (
    <div className="min-h-screen px-4 py-10 sm:py-16">
      <main className="mx-auto w-full max-w-xl">
        <Header />
        <div className="mt-6 grid grid-cols-2 gap-2">
          {generalLinks.map((i) => <GeneralLinkCard key={i.title} item={i} />)}
        </div>
        <Tabs active={active} onChange={setActive} />
        <section role="tabpanel" key={active} className="mt-5">
          {active === "dev" ? (
            <div className="flex flex-col gap-8">
              <div>
                <SectionTitle>🎁 Kit Estudante & Recursos Gratuitos</SectionTitle>
                <div className="flex flex-col gap-3">
                  {devFree.map((i) => <FreeResourceCard key={i.title} item={i} />)}
                </div>
              </div>
              <div>
                <SectionTitle>📚 Livros & Setup para Codar</SectionTitle>
                <div className="grid grid-cols-2 gap-3">
                  {devProducts.map((i) => <ProductCard key={i.title} item={i} />)}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {setup.map((i) => <SetupCard key={i.title} item={i} />)}
            </div>
          )}
        </section>
        <footer className="mt-12 text-center text-xs text-espresso/50">
          <p>{footer.text}</p>
          <p className="mt-1">{footer.note}</p>
        </footer>
      </main>
    </div>
  );
}
