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
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/518kecSPu6L._AC_SL1500_.jpg",
    url: "https://link.amazon/B0fDRchqf",
  },
  {
    title: "Meu Ipad",
    category: "Tech",
    icon: "Tablet",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/41WI+i+m6wL._AC_.jpg",
    url: "https://link.amazon/B0fJN24jC",
  },
    {
    title: "Apple pencil",
    category: "Pen",
    icon: "Tablet",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/51IYujKRfHL._AC_SX679_.jpg",
    url: "https://link.amazon/B0dkY6kQe",
  },
  {
    title: "Meu café preferido!",
    category: "Café",
    icon: "Coffee",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/61wqAmC27gL._AC_SL1254_.jpg",
    url: "https://link.amazon/B0jfohwMq",
  },
  {
    title: "Teclado Bluethooth Logitech",
    category: "Mesa",
    icon: "Keyboard",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/61y-lcvG7VL._AC_SL1500_.jpg",
    url: "https://link.amazon/B03C1A0hB",
  },
  {
    title: "Cadeira de escritório ergonomica",
    category: "Cadeira",
    icon: "Armchair",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/61UshmzC5mL._AC_SL1000_.jpg",
    url: "https://link.amazon/B05tuPAEO",
  },
  {
    title: "Garmin Venu 4",
    category: "SmartWatch",
    icon: "Watch",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/61qLetCsMkL._AC_SL1500_.jpg",
    url: "https://link.amazon/B0ak1ETvP",
  },
  {
    title: "⚡ Ofertas de Tech do Dia na Amazon",
    category: "Promo",
    icon: "badge-percent",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/G/32/br-events/2026/BlackFriday/LUWU/Headers/VD102_BF26WU_HeaderComecou_Desk.jpg",
    url: "https://link.amazon/B0cdMUTEv",
  },
];

export const footer = {
  text: "Feito com ☕ e React",
  note: "Alguns links podem ser de afiliados.",
};
