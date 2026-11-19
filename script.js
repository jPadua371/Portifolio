/* =========================================================
   1. DADOS DAS SUAS VIVÊNCIAS, MENTORIAS E CERTIFICADOS
========================================================= */
const experiencesData = [
  {
    id: "devcoffee-sobre",
    filter: "devcoffee",
    title: "Sobre a DevCoffee & Fundadores",
    category: "DevCoffee • Empresa Parceira",
    year: "Desde 2006",
    cover: "https://picsum.photos/seed/devcoffee-hq/1000/620",
    description:
      "Sediada em Leme (SP), às margens da Rodovia Anhanguera, a DevCoffee atua desde 2006 no desenvolvimento de sistemas voltados à gestão empresarial, com destaque para a plataforma integrada online BrERP. Fundada por Bruno Luis Ferreira e Murilo Habermann Torquato, a empresa firmou parceria com o Centro Paula Souza (CPS) e a Fatec para aproximar os estudantes da prática profissional.",
    highlights: [
      "Fundadores: Bruno Luis Ferreira e Murilo Habermann Torquato",
      "Principal produto: BrERP (Gestão Empresarial Integrada)",
      "Parceria educacional com Centro Paula Souza / Fatec"
    ]
  },
  {
    id: "devcoffee-2024-01",
    filter: "devcoffee",
    title: "1ª Mentoria DevCoffee — Apresentação & Contexto",
    category: "DevCoffee • Mentoria 01",
    year: "25/04/2024",
    cover: "https://picsum.photos/seed/mentoria1/1000/620",
    description:
      "Encontro inicial com Matheus Montoan e Matheus Marcelino, representantes da DevCoffee. Conhecemos a trajetória da empresa, seus principais serviços, objetivos estratégicos e o contexto em que o projeto académico seria desenvolvido.",
    highlights: [
      "Mentores: Matheus Montoan e Matheus Marcelino",
      "Visão geral da atuação no mercado de tecnologia",
      "Alinhamento inicial da parceria com a turma"
    ]
  },
  {
    id: "devcoffee-2024-02",
    filter: "devcoffee",
    title: "2ª Mentoria DevCoffee — Cargos de uma Software House",
    category: "DevCoffee • Mentoria 02",
    year: "06/09/2024",
    cover: "https://picsum.photos/seed/mentoria2/1000/620",
    description:
      "Nesta mentoria com Matheus Marcelino e José Leite, exploramos as diferentes funções e responsabilidades dentro de uma software house, entendendo a importância de cada papel na construção de produtos digitais.",
    highlights: [
      "Mentores: Matheus Marcelino e José Leite",
      "Estrutura de equipas de desenvolvimento de software",
      "Sessão de perguntas sobre carreira em TI"
    ]
  },
  {
    id: "iochpe-2024",
    filter: "ibm",
    title: "Encontro Fundação Iochpe — Programa AMS",
    category: "Fundação Iochpe • Visita",
    year: "06/09/2024",
    cover: "https://picsum.photos/seed/iochpe/1000/620",
    description:
      "Bate-papo com a Fundação Iochpe sobre os motivos que levaram cada aluno a escolher o curso AMS e nossas expectativas de formação. Também recebemos a notícia da doação que viabilizou a viagem técnica da turma.",
    highlights: [
      "Incentivo à educação técnica e formação profissional",
      "Compartilhamento de metas dos alunos AMS",
      "Anúncio do apoio para a viagem técnica"
    ]
  },
  {
    id: "devcoffee-2024-03",
    filter: "devcoffee",
    title: "3ª Mentoria DevCoffee — Formação das Equipas",
    category: "DevCoffee • Mentoria 03",
    year: "11/09/2024",
    cover: "https://picsum.photos/seed/mentoria3/1000/620",
    description:
      "Organização dos grupos de 4 integrantes, unindo 2 alunos de Administração e 2 de Análise e Desenvolvimento de Sistemas (ADS), para iniciar o brainstorming e o planeamento colaborativo do projeto.",
    highlights: [
      "Equipas híbridas: 2 alunos ADM + 2 alunos ADS",
      "Ideação e definição de propostas de projeto",
      "Início do planeamento ao longo do ensino técnico e superior"
    ]
  },
  {
    id: "devcoffee-2024-04",
    filter: "devcoffee",
    title: "4ª Mentoria DevCoffee — Dinâmica Cliente & Fornecedor",
    category: "DevCoffee • Mentoria 04",
    year: "24/09/2024",
    cover: "https://picsum.photos/seed/mentoria4/1000/620",
    description:
      "Retomada dos grupos para troca de ideias com as equipas parceiras. Cada grupo assumiu o papel de cliente do outro, apresentando necessidades e expectativas reais para orientar o desenvolvimento.",
    highlights: [
      "Simulação prática de relacionamento cliente-equipa",
      "Mapeamento inicial de expectativas do produto",
      "Estruturação das primeiras propostas"
    ]
  },
  {
    id: "devcoffee-2024-05",
    filter: "devcoffee",
    title: "5ª Mentoria DevCoffee — Especificação de Requisitos",
    category: "DevCoffee • Mentoria 05",
    year: "07/10/2024",
    cover: "https://picsum.photos/seed/mentoria5/1000/620",
    description:
      "Com orientação do desenvolvedor José, elaboramos perguntas estratégicas sobre especificação de requisitos e realizamos entrevistas cruzadas entre os grupos parceiros para alinhar o escopo.",
    highlights: [
      "Orientação técnica com o desenvolvedor José",
      "Elaboração de questionário de levantamento de requisitos",
      "Alinhamento de escopo entre equipas"
    ]
  },
  {
    id: "devcoffee-2024-06",
    filter: "devcoffee",
    title: "6ª Mentoria DevCoffee — Acompanhamento & Evolução",
    category: "DevCoffee • Mentoria 06",
    year: "22/10/2024",
    cover: "https://picsum.photos/seed/mentoria6/1000/620",
    description:
      "Reunião de acompanhamento com a DevCoffee para dar sequência às tarefas pendentes, aplicar as orientações recebidas anteriormente e organizar as próximas entregas do projeto.",
    highlights: [
      "Revisão de tarefas e progresso em grupo",
      "Aplicação prática das diretrizes de engenharia",
      "Organização do cronograma de desenvolvimento"
    ]
  },
  {
    id: "devcoffee-2024-07",
    filter: "devcoffee",
    title: "7ª Mentoria DevCoffee — Documento de Requisitos",
    category: "DevCoffee • Mentoria 07",
    year: "07/11/2024",
    cover: "https://picsum.photos/seed/mentoria7/1000/620",
    description:
      "Aprofundamento nas necessidades do cliente e início da redação formal do Documento de Requisitos, registando funcionalidades, regras e características essenciais do sistema.",
    highlights: [
      "Início da formalização do Documento de Requisitos",
      "Definição de funcionalidades prioritárias",
      "Validação junto ao grupo cliente"
    ]
  },
  {
    id: "ibm-visita-2024",
    filter: "ibm",
    title: "Visita Técnica à IBM — Cultura, IA & Carreiras",
    category: "IBM Brasil • Imersão Corporativa",
    year: "22/11/2024",
    cover: "https://picsum.photos/seed/ibm-visit/1000/620",
    description:
      "Visita técnica à IBM (Hortolândia) acompanhados por Bruna, conhecendo a estrutura e cultura de bem-estar da empresa. Participamos de palestra com Igor sobre benefícios e ética na Inteligência Artificial, além de bate-papo sobre oportunidades profissionais e benefícios.",
    highlights: [
      "Tour guiado com Bruna pela estrutura da IBM",
      "Palestra com Igor sobre impactos e responsabilidades da IA",
      "Painel de carreiras, benefícios e encerramento em Hortolândia"
    ]
  },
  {
    id: "devcoffee-2024-08",
    filter: "devcoffee",
    title: "8ª Mentoria DevCoffee — Reformulação de Requisitos",
    category: "DevCoffee • Mentoria 08",
    year: "25/11/2024",
    cover: "https://picsum.photos/seed/mentoria8/1000/620",
    description:
      "Discussão das observações apontadas pelo cliente e reformulação do documento de requisitos, garantindo que todas as especificações estivessem claras e alinhadas ao definido em reunião.",
    highlights: [
      "Revisão crítica e ajustes no Documento de Requisitos",
      "Validação de clareza técnica e funcional",
      "Encerramento do ciclo de requisitos de 2024"
    ]
  },
  {
    id: "devcoffee-2025-01",
    filter: "devcoffee",
    title: "1ª Mentoria DevCoffee 2025 — Modelo Software House",
    category: "DevCoffee • Mentoria 2025",
    year: "20/05/2025",
    cover: "https://picsum.photos/seed/mentoria2025-1/1000/620",
    description:
      "Retomada das mentorias em 2025 com novidades institucionais da empresa e aprofundamento sobre o funcionamento de uma software house e as etapas envolvidas na entrega de soluções para clientes.",
    highlights: [
      "Ciclo completo de desenvolvimento sob encomenda",
      "Contextualização profissional do projeto da turma",
      "Atualização institucional da empresa parceira"
    ]
  },
  {
    id: "devcoffee-2025-02",
    filter: "devcoffee",
    title: "2ª Mentoria DevCoffee 2025 — Prototipação no Figma",
    category: "DevCoffee • UI Design & Figma",
    year: "25/06/2025",
    cover: "https://picsum.photos/seed/mentoria2025-2/1000/620",
    description:
      "Apresentação prática da ferramenta Figma para criação de protótipos e desenvolvimento visual de sistemas e aplicativos. Colocamos o conteúdo em prática criando o protótipo inicial do nosso projeto.",
    highlights: [
      "Aprendizado prático da interface e recursos do Figma",
      "Construção do protótipo visual do projeto",
      "Foco na organização de telas e experiência do usuário"
    ]
  },
  {
    id: "tebe-2025-01",
    filter: "tebe",
    title: "1ª Mentoria Tebe — Alinhamento & Liderança",
    category: "Tebe • Mentoria 01",
    year: "04/09/2025",
    cover: "https://picsum.photos/seed/tebe1/1000/620",
    description:
      "Visita da empresa Tebe com apresentação dos objetivos, serviços e expectativas em relação ao novo projeto. Conhecemos os profissionais que acompanhariam a turma: Matheus Nard, Marco (CEO) e Marcos.",
    highlights: [
      "Participação de Marco (CEO), Matheus Nard e Marcos",
      "Definição do escopo e expectativas do produto",
      "Conhecimento dos serviços e atuação da Tebe"
    ]
  },
  {
    id: "tebe-2025-02",
    filter: "tebe",
    title: "2ª Mentoria Tebe — Sensores IoT & GitHub",
    category: "Tebe • Mentoria 02",
    year: "18/09/2025",
    cover: "https://picsum.photos/seed/tebe2/1000/620",
    description:
      "Encontro com instalação prática de sensores para prevenção de falhas em equipamentos (como ar-condicionado) e apresentação sobre GitHub, culminando na criação de repositórios em duplas.",
    highlights: [
      "Demonstração de sensores preventivos para equipamentos",
      "Workshop introdutório de GitHub",
      "Atividade prática em duplas com envio de repositório"
    ]
  },
  {
    id: "tebe-2025-03-04",
    filter: "tebe",
    title: "3ª e 4ª Mentorias Tebe — Repositório Local & Entrega Final",
    category: "Tebe • Entrega de Projeto",
    year: "Outubro 2025",
    cover: "https://picsum.photos/seed/tebe3/1000/620",
    description:
      "No dia 02/10, integramos o repositório GitHub ao computador com suporte de Matheus Nard e Marcos. No dia 28/10, realizamos a entrega oficial do projeto desenvolvido pela equipe, recebendo feedback técnico e orientações de melhoria.",
    highlights: [
      "Integração de repositório GitHub no ambiente local (02/10)",
      "Entrega oficial e avaliação do projeto pela Tebe (28/10)",
      "Identificação de melhorias e resolução de problemas técnicos"
    ]
  }
];

const certificatesData = [
  {
    program: "TIC EM TRILHAS • PROGRAMA MCTI FUTURO",
    title: "Introdução a React.js",
    org: "Instituição Executora: Venturus • Coordenação: Softex",
    desc: "Certificamos que João Pedro De Padua concluiu sua participação na trilha Introdução a React.js com carga horária de 30 horas oferecida pela instituição executora Venturus, iniciativa apoiada pelo Ministério da Ciência, Tecnologia e Inovação.",
    meta: "Carga Horária: 30 horas • Campinas, 27 de março de 2025",
    image: ""
  }
];

/* =========================================================
   2. HERO: CONTROLE DA SUA FOTO (P&B / COR E TROCA)
========================================================= */
const heroPortraitImg = document.getElementById("heroPortraitImg");
const toggleBwBtn = document.getElementById("toggleBwBtn");
const uploadHeroPhoto = document.getElementById("uploadHeroPhoto");

toggleBwBtn.addEventListener("click", () => {
  heroPortraitImg.classList.toggle("is-grayscale");
});

uploadHeroPhoto.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    heroPortraitImg.src = ev.target.result;
  };
  reader.readAsDataURL(file);
});

/* =========================================================
   3. HEADER FIXO COM BACKDROP-FILTER
========================================================= */
const siteHeader = document.getElementById("siteHeader");

function handleHeaderScroll() {
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 36);
}

window.addEventListener("scroll", handleHeaderScroll, { passive: true });
handleHeaderScroll();

/* =========================================================
   4. HERO INTERATIVO (CANVAS FLUIDO)
========================================================= */
(function initHeroCanvas() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let width = 0;
  let height = 0;
  let time = 0;
  const mouse = { x: 0.65, y: 0.45, targetX: 0.65, targetY: 0.45 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  window.addEventListener(
    "mousemove",
    (e) => {
      mouse.targetX = e.clientX / Math.max(width, 1);
      mouse.targetY = e.clientY / Math.max(height, 1);
    },
    { passive: true }
  );

  function draw() {
    time += 0.008;
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    ctx.clearRect(0, 0, width, height);

    const cx1 = width * mouse.x + Math.sin(time) * 40;
    const cy1 = height * mouse.y + Math.cos(time * 0.8) * 30;
    const radius1 = Math.max(width, height) * 0.42;

    const grad1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, radius1);
    grad1.addColorStop(0, "rgba(255, 90, 31, 0.22)");
    grad1.addColorStop(0.5, "rgba(255, 90, 31, 0.06)");
    grad1.addColorStop(1, "rgba(10, 10, 10, 0)");

    ctx.fillStyle = grad1;
    ctx.fillRect(0, 0, width, height);

    if (!prefersReducedMotion) {
      requestAnimationFrame(draw);
    }
  }

  draw();
})();

/* =========================================================
   5. CURSOR CUSTOMIZADO & PREVIEW FLUTUANTE
========================================================= */
const customCursor = document.getElementById("customCursor");
const projectPreview = document.getElementById("projectPreview");
const projectPreviewImg = document.getElementById("projectPreviewImg");

let cursorX = 0;
let cursorY = 0;
let previewX = 0;
let previewY = 0;

document.addEventListener(
  "mousemove",
  (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
    customCursor.classList.add("is-visible");
    customCursor.style.left = `${cursorX}px`;
    customCursor.style.top = `${cursorY}px`;
  },
  { passive: true }
);

document.addEventListener("mouseleave", () => {
  customCursor.classList.remove("is-visible");
});

function animateFloatingPreview() {
  previewX += (cursorX + 170 - previewX) * 0.14;
  previewY += (cursorY - 20 - previewY) * 0.14;
  projectPreview.style.left = `${previewX}px`;
  projectPreview.style.top = `${previewY}px`;
  requestAnimationFrame(animateFloatingPreview);
}
animateFloatingPreview();

function bindCursorHoverTargets() {
  document.querySelectorAll('[data-cursor="hover"], a, button').forEach((el) => {
    el.addEventListener("mouseenter", () => customCursor.classList.add("is-hovering"));
    el.addEventListener("mouseleave", () => customCursor.classList.remove("is-hovering"));
  });
}

/* =========================================================
   6. LISTA DE MENTORIAS & MODAL COM UPLOAD DE FOTO
========================================================= */
const projectsList = document.getElementById("projectsList");
const projectModal = document.getElementById("projectModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalPhotoInput = document.getElementById("modalPhotoInput");
let activeProject = null;
let lastFocusedElement = null;

function renderExperiences(filter = "todos") {
  projectsList.innerHTML = "";

  const filtered =
    filter === "todos"
      ? experiencesData
      : experiencesData.filter((item) => item.filter === filter);

  filtered.forEach((item) => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "project-row reveal is-visible";
    row.setAttribute("role", "listitem");
    row.setAttribute("data-cursor", "hover");
    row.innerHTML = `
      <span class="project-row-title">${item.title}</span>
      <span class="mono-label project-row-cat">${item.category}</span>
      <span class="mono-label project-row-year">${item.year}</span>
    `;

    row.addEventListener("mouseenter", () => {
      projectPreviewImg.src = item.cover;
      projectPreview.classList.add("is-active");
    });

    row.addEventListener("mouseleave", () => {
      projectPreview.classList.remove("is-active");
    });

    row.addEventListener("click", () => openProjectModal(item));
    projectsList.appendChild(row);
  });

  bindCursorHoverTargets();
}

document.getElementById("filterPills").addEventListener("click", (e) => {
  if (!e.target.classList.contains("filter-btn")) return;
  document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  e.target.classList.add("active");
  renderExperiences(e.target.dataset.filter);
});

function openProjectModal(item) {
  activeProject = item;
  lastFocusedElement = document.activeElement;
  projectPreview.classList.remove("is-active");

  document.getElementById("modalCategory").textContent = item.category;
  document.getElementById("modalYear").textContent = item.year;
  document.getElementById("modalTitle").textContent = item.title;

  const coverImg = document.getElementById("modalCoverImg");
  coverImg.src = item.cover;
  coverImg.alt = item.title;

  document.getElementById("modalDescription").textContent = item.description;

  const deliverablesList = document.getElementById("modalDeliverables");
  deliverablesList.innerHTML = item.highlights.map((h) => `<li>${h}</li>`).join("");

  projectModal.hidden = false;
  document.body.classList.add("modal-open");
  closeModalBtn.focus();
}

modalPhotoInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file || !activeProject) return;

  const reader = new FileReader();
  reader.onload = (ev) => {
    activeProject.cover = ev.target.result;
    document.getElementById("modalCoverImg").src = ev.target.result;
  };
  reader.readAsDataURL(file);
});

function closeProjectModal() {
  projectModal.hidden = true;
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) lastFocusedElement.focus();
}

closeModalBtn.addEventListener("click", closeProjectModal);
projectModal.addEventListener("click", (e) => {
  if (e.target === projectModal) closeProjectModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !projectModal.hidden) closeProjectModal();
});

/* =========================================================
   7. CERTIFICADOS (CARROSSEL, UPLOAD DE IMAGEM & CADASTRO)
========================================================= */
let currentCertIndex = 0;
const certCard = document.getElementById("certCard");
const certPreviewImg = document.getElementById("certPreviewImg");
const certImageInput = document.getElementById("certImageInput");

function updateCertificateDisplay(index) {
  certCard.classList.add("is-fading");

  setTimeout(() => {
    const cert = certificatesData[index];
    document.getElementById("certProgram").textContent = cert.program;
    document.getElementById("certTitle").textContent = cert.title;
    document.getElementById("certOrg").textContent = cert.org;
    document.getElementById("certDesc").textContent = cert.desc;
    document.getElementById("certMeta").textContent = cert.meta;

    if (cert.image) {
      certPreviewImg.src = cert.image;
      certPreviewImg.hidden = false;
    } else {
      certPreviewImg.hidden = true;
    }

    document.getElementById("certCounter").textContent = `${String(index + 1).padStart(
      2,
      "0"
    )} / ${String(certificatesData.length).padStart(2, "0")}`;

    certCard.classList.remove("is-fading");
  }, 180);
}

certImageInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (ev) => {
    certificatesData[currentCertIndex].image = ev.target.result;
    certPreviewImg.src = ev.target.result;
    certPreviewImg.hidden = false;
  };
  reader.readAsDataURL(file);
});

document.getElementById("prevCert").addEventListener("click", () => {
  currentCertIndex =
    (currentCertIndex - 1 + certificatesData.length) % certificatesData.length;
  updateCertificateDisplay(currentCertIndex);
});

document.getElementById("nextCert").addEventListener("click", () => {
  currentCertIndex = (currentCertIndex + 1) % certificatesData.length;
  updateCertificateDisplay(currentCertIndex);
});

const addCertForm = document.getElementById("addCertForm");
document.getElementById("openAddCertBtn").addEventListener("click", () => {
  addCertForm.hidden = false;
});
document.getElementById("cancelAddCertBtn").addEventListener("click", () => {
  addCertForm.hidden = true;
});

addCertForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("newCertTitle").value.trim();
  const org = document.getElementById("newCertOrg").value.trim();
  const hours = document.getElementById("newCertHours").value.trim();
  const date = document.getElementById("newCertDate").value.trim();
  const desc = document.getElementById("newCertDesc").value.trim();

  certificatesData.unshift({
    program: "CERTIFICAÇÃO COMPLEMENTAR",
    title,
    org,
    desc: desc || `Certificado de conclusão emitido para João Pedro De Padua.`,
    meta: `Carga Horária: ${hours} • ${date}`,
    image: ""
  });

  currentCertIndex = 0;
  updateCertificateDisplay(0);
  addCertForm.reset();
  addCertForm.hidden = true;
});

/* =========================================================
   8. FORMULÁRIO DE CONTATO & COPIAR E-MAIL
========================================================= */
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");

  const erroNome = document.getElementById("erroNome");
  const erroEmail = document.getElementById("erroEmail");
  const erroMensagem = document.getElementById("erroMensagem");
  const formFeedback = document.getElementById("formFeedback");

  let isValid = true;
  erroNome.textContent = "";
  erroEmail.textContent = "";
  erroMensagem.textContent = "";
  formFeedback.textContent = "";

  if (nome.value.trim().length < 2) {
    erroNome.textContent = "Por favor, informe seu nome.";
    isValid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    erroEmail.textContent = "Digite um e-mail válido.";
    isValid = false;
  }

  if (mensagem.value.trim().length < 10) {
    erroMensagem.textContent = "Escreva uma mensagem com pelo menos 10 caracteres.";
    isValid = false;
  }

  if (isValid) {
    formFeedback.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
    e.target.reset();
  }
});

document.getElementById("copyEmailBtn").addEventListener("click", async () => {
  const emailText = document.getElementById("myEmail").textContent.trim();
  const copyBtnText = document.getElementById("copyEmailText");

  try {
    await navigator.clipboard.writeText(emailText);
    copyBtnText.textContent = "Copiado!";
    setTimeout(() => {
      copyBtnText.textContent = "Copiar";
    }, 2200);
  } catch {
    copyBtnText.textContent = "Erro";
  }
});

/* =========================================================
   9. SCROLL REVEAL (INTERSECTION OBSERVER)
========================================================= */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

renderExperiences();
updateCertificateDisplay(0);
initScrollReveal();