// ============================================================
//  EDITE AQUI: todo o conteúdo da página fica neste arquivo.
//  `icon` = nome de um ícone do Lucide (https://lucide.dev/icons)
//  Para novos ícones, importe-os também em src/icons.js
// ============================================================

export const profile = {
  name: "Gabi",
  username: "Oi, eu sou a Gabi. Sejam bem-vindos!",
  bio: "Tech, rotina de estudos, bons cafés & achadinhos ☕💻",
  avatar: "/gabi.jpeg",
  socials: [
    { label: "Instagram", icon: "Instagram", url: "https://www.instagram.com/gottardogabi/" },
    { label: "TikTok", icon: "Music2", url: "https://www.tiktok.com/@gabiamarantee?lang=pt-BR" },
    { label: "GitHub", icon: "Github", url: "https://github.com/amarantegabriela" },
    { label: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com/in/seu_usuario" },
    { label: "E-mail", icon: "Mail", url: "mailto:contato@seudominio.com" },
  ],
};

export const tabs = [
  { id: "kit", label: "Kit Estudante & Tech", short: "0800", icon: "GraduationCap" },
  { id: "setup", label: "Meu Setup & Favoritos", short: "Setup", icon: "Coffee" },
];

// Seção 1 — ferramentas grátis / com desconto
export const studentKit = [
  {
    title: "JetBrains Student Pack",
    description: "IDEs profissionais grátis para estudantes.",
    tag: "100% Grátis",
    icon: "Code2",
    url: "https://www.jetbrains.com/pt-br/academy/student-pack/",
  },
    {
    title: "Gemini AI PRO",
    description: "Descontos para universitários.",
    tag: "Agentes acessíveis",
    icon: "Code2",
    url: "https://one.google.com/ai-student?plans=1%2C2&utm_source=gemini&utm_medium=google_paid&utm_campaign=slap_dg_student-br&gad_source=2&gad_campaignid=24210642672&gclid=CjwKCAjwqonVBhA4EiwA9wYJ3YANrgrLgQTRcNfFGAn_ow1GKQ-MkQ9suF3yRhWu7uOkORE9iMeKoBoCCDUQAvD_BwE&g1_landing_page=75",
  },
  {
    title: "GitHub Student Developer Pack",
    description: "Ferramentas dev sem custo.",
    tag: "100% Grátis",
    icon: "Github",
    url: "https://education.github.com/pack/join",
  },
  {
    title: "Notion Plus para Estudantes",
    description: "Plano Plus gratuito com e-mail acadêmico.",
    tag: "100% Grátis",
    icon: "NotebookPen",
    url: "https://www.notion.com/product/notion-for-education",
  },
];

// Seção 2 — produtos que uso
// `image` opcional (URL); se vazio, usa o ícone
export const setup = [
  {
    title: "Fone Bluetooth JBL",
    category: "Tech",
    icon: "Headphones",
    image: "",
    url: "https://example.com/fone-jbl",
  },
  {
    title: "iPad + Apple Pencil",
    category: "Tech",
    icon: "Tablet",
    image: "",
    url: "https://example.com/ipad",
  },
  {
    title: "Meu café preferido!",
    category: "Café",
    icon: "Coffee",
    image: "/cafe.JPG",
    url: "https://example.com/cafe",
  },
  {
    title: "Moedor de Café",
    category: "Café",
    icon: "Cog",
    image: "",
    url: "https://example.com/moedor",
  },
  {
    title: "Teclado Mecânico",
    category: "Mesa",
    icon: "Keyboard",
    image: "",
    url: "https://example.com/teclado",
  },
  {
    title: "Luminária & Deskmat",
    category: "Mesa",
    icon: "Lamp",
    image: "",
    url: "https://example.com/mesa",
  },
];

export const footer = {
  text: "Feito com ☕ e React",
  note: "Alguns links podem ser de afiliados.",
};
