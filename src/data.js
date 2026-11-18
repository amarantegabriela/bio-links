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
  { id: "dev", label: "Dev & Estudos", short: "Dev & Estudos", icon: "Terminal" },
  { id: "setup", label: "Meu Setup & Favoritos", short: "Setup", icon: "Coffee" },
];

// ---- Aba "Dev & Estudos" ----
// 🎁 Kit Estudante & Recursos Gratuitos: sem foto, usa `icon` + `badge`
export const devFree = [
  {
    title: "GitHub Student Developer Pack",
    description: "Dezenas de ferramentas, domínios, cursos e Copilot gratuitos com e-mail de estudante.",
    badge: "Grátis p/ Estudantes",
    icon: "Github",
    url: "https://education.github.com/pack",
    cta: "Acessar recurso",
  },
  {
    title: "JetBrains Educational License",
    description: "Acesso 100% gratuito ao PyCharm Professional, IntelliJ IDEA Ultimate e todas as IDEs da JetBrains.",
    badge: "Grátis p/ Estudantes",
    icon: "Code2",
    url: "https://www.jetbrains.com/community/education/#students",
    cta: "Acessar recurso",
  },
  {
    title: "Gemini AI PRO",
    description: "Descontos para universitários.",
    badge: "Desconto p/ Estudantes",
    icon: "Sparkles",
    url: "https://one.google.com/ai-student?plans=1%2C2&utm_source=gemini&utm_medium=google_paid&utm_campaign=slap_dg_student-br&gad_source=2&gad_campaignid=24210642672&gclid=CjwKCAjwqonVBhA4EiwA9wYJ3YANrgrLgQTRcNfFGAn_ow1GKQ-MkQ9suF3yRhWu7uOkORE9iMeKoBoCCDUQAvD_BwE&g1_landing_page=75",
  },
  {
    title: "Notion Plus para Estudantes",
    description: "Plano Plus gratuito com e-mail acadêmico.",
    badge: "Grátis p/ Estudantes",
    icon: "NotebookPen",
    url: "https://www.notion.com/product/notion-for-education",
  },
];

// 📚 Livros & Setup para Codar: produtos de afiliada (foto opcional em `image`)
export const devProducts = [
  {
    title: "O Programador Pragmático",
    description: "Leitura obrigatória: dicas práticas para escrever código melhor e crescer na carreira. Recomendo muito!",
    badge: "Dica Dev",
    icon: "BookOpen",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/91sTrQDm3PL._SL1500_.jpg",
    url: "https://www.amazon.com.br/dp/8582606877?bestFormat=true&k=o+programador+pragm%C3%A1tico+2+edi%C3%A7%C3%A3o&crid=2FO3J0Y58L1RT&sprefix=o+programa&linkCode=ll2&tag=gabiamarante-20&linkId=0df3964b6f07f57461b2d7a0e91856fe&ref_=as_li_ss_tl",
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
    url: "https://www.amazon.com.br/dp/B0C6SPNVF5?th=1&ascsubtag=srctok-7cf8f29ef61f139e&btn_type=ss&btn_ref=srctok-7cf8f29ef61f139e&linkCode=ll2&tag=gabiamarante-20&linkId=0e8c046fe28e75691f851bf0f75169c7&ref_=as_li_ss_tl",
  },
  {
    title: "Meu Ipad",
    category: "Tech",
    icon: "Tablet",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/41WI+i+m6wL._AC_.jpg",
    url: "https://www.amazon.com.br/Tablet-Gera%C3%A7%C3%A3o-64GB-2022-A2696/dp/B0HM9H8CQJ?crid=WZNKD8IF1TJR&dib=eyJ2IjoiMSJ9.9Nv7Do2jU2ssQGZmUw69aQE7Nq1RiSbiEOMOZISDPYyGGJ8xU9YbodJq9YxL098tIy0XJEqJv-Z3zykWBqFq7D74OubjQr2MpSQ3M5mLZ86NIdWxVMYx7H0KLjQbXKMaLY9SfDYM_14XKglRqmdnUED5KBOF4txzad4vKT2dRgUFvoIDWTip0-T5AH8MlwjM1xglNEMbpCKmQJs_xf4X_5MG_nmGf904ULjGeWLb3V5JG6bL2GViL2ok_-u3WnMuc-KOZXz2p3XDjgtTrZ6ZvaElj0uUFgg1pYvRzL98SC0.-UHeDtfOIkvraW335ofGCZ1ZFtIdT0fmkPexd6vwlE8&dib_tag=se&keywords=ipad+10&qid=1794683452&sprefix=ipad%2Caps%2C211&sr=8-6&ufe=app_do%3Aamzn1.fos.95de73c3-5dda-43a7-bd1f-63af03b14751&ascsubtag=srctok-3c6bf424d543755e&btn_type=ss&btn_ref=srctok-3c6bf424d543755e&linkCode=ll2&tag=gabiamarante-20&linkId=d8fc527f4ff0de4ab18e46f81b353c6a&ref_=as_li_ss_tl",
  },
    {
    title: "Apple pencil",
    category: "Pen",
    icon: "Tablet",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/51IYujKRfHL._AC_SX679_.jpg",
    url: "https://www.amazon.com.br/Apple-MUWA3AM-A-Pencil-USB-C/dp/B0CL7J12YK?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=OGJRO2841W39&dib=eyJ2IjoiMSJ9.0AoyMDLxSG32F6KjL1WccjsTjg9OTiCJgKa451czHwQu67HeEuMSC3aPRYMrlehzICuuvXz6ZBc1_MMJu7EEbltRo4aYn1tPWjoktpJitVRLnkuOGTkvMbNyd9m-_0comoZzNDXb9Wuu-0bfbifbMQ1WQQRDUVRaJT-PNNP3aFCvBXkC5TinH9Cp1k1JuHN8l_N_SMN4pnDYkPpoe0eaqSfL4s3yC3FfebLNRiyC8Y4yetoygOxE1774A00LeCP8eQUe7H6_X4vp1Ftq3sua1ZHIvCGjw7gDTiPAWvls3oY.2mhpH0jgsZTYW7fHvbe6uCNWJx68dNJqROWu0wjEDic&dib_tag=se&keywords=apple%2Bpencil%2Busb-c&qid=1794683667&sprefix=apple%2Bpencil%2Busb-c%2Cspecialty-aps%2C186&sr=8-1&ufe=app_do%3Aamzn1.fos.38059ce3-943c-48af-9fc9-22d85542b02c&th=1&ascsubtag=srctok-21522f2748619dc8&btn_type=ss&btn_ref=srctok-21522f2748619dc8&linkCode=ll2&tag=gabiamarante-20&linkId=4bfbb3e3c9ee8617d643f80e7f4635c3&ref_=as_li_ss_tl",
  },
  {
    title: "Meu café preferido!",
    category: "Café",
    icon: "Coffee",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/61wqAmC27gL._AC_SL1254_.jpg",
    url: "https://www.amazon.com.br/Salom%C3%A3o-Bourbon-Amarelo-Caramelo-Processo/dp/B0HLY643L8?dib=eyJ2IjoiMSJ9.vrfg-UCftoJk6opZYal27IP5uepMgFq4sQIWVtbea53qexyYAnIPHWTmNnf3RqY37z7rpRs4pjsb--EeAs_rsD3d6ViOLRDZ3MCLxOn4SShCeW2qlA-Ay7qDQnID0av42mv58RV6305K7K_kIskrJH31qFXvWFeTroKgc2sakdRqQBt4L8p1gvroTGG_PZ3o099zp-3jq2CFClOLqKThHwpbjXKBtk0pkWJMxKdWV9GNva882aCb7zZV8Ub8sL9pzoqpzs07XiFruSfBqnHu4Xn4S4tVa87jlZW8Dd1BRTs.PhnVVO1Xt0MLDbU7xbHF676du5nKiG5HwhH_hyGsIK0&dib_tag=se&keywords=cafe+salomao&qid=1794683273&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&ascsubtag=srctok-2551cfc59ef9536e&btn_type=ss&btn_ref=srctok-2551cfc59ef9536e&linkCode=ll2&tag=gabiamarante-20&linkId=3494b94d3770906f9e3070290f5de864&ref_=as_li_ss_tl",
  },
  {
    title: "Teclado Bluethooth Logitech",
    category: "Mesa",
    icon: "Keyboard",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/61y-lcvG7VL._AC_SL1500_.jpg",
    url: "https://www.amazon.com.br/dp/B0CJ3J2WCR?th=1&ascsubtag=srctok-48af2f6bf7c4413b&btn_type=ss&btn_ref=srctok-48af2f6bf7c4413b&linkCode=ll2&tag=gabiamarante-20&linkId=9c9606fa8ca94f371246a6cf3cfc8bbf&ref_=as_li_ss_tl",
  },
  {
    title: "Cadeira de escritório ergonomica",
    category: "Cadeira",
    icon: "Armchair",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/61UshmzC5mL._AC_SL1000_.jpg",
    url: "https://www.mercadolivre.com.br/social/amga9201738?matt_word=amga9201738&matt_tool=47498506&forceInApp=true&ref=BMkcVpmTbUYVuAgrn8vpGUBfAXgoFFS3WKMo5TKRdZRtL%2BedOV1MYk4Px0DVnO1NGyBwQebk0%2FC4R2YLnUOgun%2FPyQnVA7Iw5H76C80gi4acp8LcD4A4tsjMdcAHBL9K79p1aO1LUwmSFsfBtofYXIQXCfNv%2F39FYpZyOimtQFANHIhGjw4DayLBjoHGuzGH%2ByvQCIxV%2FVmCDAcy35Aq38hDirpqNV8kshwjapxkr8EefHcKemaEhyXKZR6v6qyRH90eyw%3D%3D",
  },
  {
    title: "Suporte articulado para monitor",
    category: "TV",
    icon: "TV",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/51QIvg3FDEL._AC_SL1500_.jpg",
    url: "https://www.amazon.com.br/dp/B09WJD17ZS?th=1&linkCode=ll2&tag=gabiamarante-20&linkId=df0e7b24d8cce30bf8d55f8b53a7d128&ref_=as_li_ss_tl",
  },
  {
    title: "Monitor LG ultrawide 29",
    category: "",
    icon: "badge-percent",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_724842-MLA99581911526_122025-F.webp",
    url: "https://www.amazon.com.br/blackfriday?pd_rd_w=MtiXL&content-id=amzn1.sym.e5e829a9-f269-4a06-a2be-b44ea88f7b97&pf_rd_p=e5e829a9-f269-4a06-a2be-b44ea88f7b97&pf_rd_r=D79P754SBD06H61REENM&pd_rd_wg=oMer7&pd_rd_r=4cb28bcc-d91c-4056-acfc-ed16fc12e4aa&ascsubtag=srctok-140c1081e07d0151&btn_type=ss&btn_ref=srctok-140c1081e07d0151&bubble-id=deals-todasofertas&linkCode=ll2&tag=gabiamarante-20&linkId=6b9ca52857b7e5500fef26b669947dec&ref_=as_li_ss_tl",
  },
];

// Seção 3 — vitrines gerais (sem foto de produto), exibidas no topo da página
export const generalLinks = [
  {
    title: "Vai comprar algo na Amazon hoje?",
    shortTitle: "Ofertas na Amazon",
    description: "Use meu link de apoio (sem custo extra) ou veja as ofertas do dia",
    icon: "ShoppingBag",
    url: "https://www.amazon.com.br/blackfriday?pd_rd_w=MtiXL&content-id=amzn1.sym.e5e829a9-f269-4a06-a2be-b44ea88f7b97&pf_rd_p=e5e829a9-f269-4a06-a2be-b44ea88f7b97&pf_rd_r=D79P754SBD06H61REENM&pd_rd_wg=oMer7&pd_rd_r=4cb28bcc-d91c-4056-acfc-ed16fc12e4aa&ascsubtag=srctok-140c1081e07d0151&btn_type=ss&btn_ref=srctok-140c1081e07d0151&bubble-id=deals-todasofertas&linkCode=ll2&tag=gabiamarante-20&linkId=e0e1d4bb985fa83e6c7a2eb7c8e6fe03&ref_=as_li_ss_tl",
  },
  {
    title: "Minha Lista & Achados no Mercado Livre",
    shortTitle: "Minha Lista no Mercado Livre",
    description: "Todos os meus produtos recomendados em um só lugar",
    icon: "Sparkles",
    url: "https://meli.la/14zoWjF",
  },
];

export const footer = {
  text: "Feito com ☕ e React",
  note: "Alguns links podem ser de afiliados.",
};
