/* =========================================================
   DICA DE PERFORMANCE — CONVERSÃO DAS IMAGENS PARA WEBP:
   As imagens atuais (~15 MB no total) podem ser convertidas para WebP
   reduzindo em até 75% o peso sem perda visível de qualidade:
   - Linux / macOS (Bash):
     for f in *.png; do cwebp -q 82 "$f" -o "${f%.png}.webp"; done
   - Windows (PowerShell com libwebp instalado):
     Get-ChildItem *.png | ForEach-Object { cwebp -q 82 $_.Name -o ($_.BaseName + ".webp") }
   Após gerar foto-perfil.webp, descomente a tag <source> no index.html.
========================================================= */

/* =========================================================
   1. DADOS DAS 20 VIVÊNCIAS & MENTORIAS
========================================================= */
const experiencesData = [
  {
    filter: "devcoffee",
    companyLabel: "DevCoffee",
    yearGroup: "2024",
    title: "Sobre a DevCoffee & Fundadores",
    category: "DevCoffee • Empresa Parceira",
    year: "Desde 2006",
    cover: "visita.png",
    coverAlt: "Apresentação institucional da DevCoffee e seus fundadores",
    description:
      "Sediada em Leme (SP), às margens da Rodovia Anhanguera, a DevCoffee atua desde 2006 no desenvolvimento de sistemas de gestão empresarial, destacando-se pela plataforma online BrERP. Fundada por Bruno Luis Ferreira e Murilo Habermann Torquato, firmou parceria com o Centro Paula Souza (CPS) e a Fatec para aproximar os estudantes do mercado de tecnologia.",
    bullets: [
      "Fundadores: Bruno Luis Ferreira e Murilo Habermann Torquato",
      "Produto principal: BrERP (Gestão Empresarial Integrada)",
      "Parceria educacional com o Centro Paula Souza (CPS)"
    ]
  },
  {
    filter: "devcoffee",
    companyLabel: "DevCoffee",
    yearGroup: "2024",
    title: "1ª Mentoria DevCoffee — Apresentação & Contexto",
    category: "DevCoffee • Mentoria 01",
    year: "25/04/2024",
    cover: "visita2.png",
    coverAlt: "Turma reunida na sala de aula durante a primeira mentoria da DevCoffee",
    description:
      "Encontro inicial com Matheus Montoan e Matheus Marcelino, representantes da DevCoffee. Conhecemos a história da empresa, seus principais serviços, planos futuros e o contexto profissional em que o nosso projeto seria desenvolvido.",
    bullets: [
      "Mentores: Matheus Montoan e Matheus Marcelino",
      "Apresentação da trajetória e atuação da DevCoffee",
      "Contextualização do projeto da turma"
    ]
  },
  {
    filter: "devcoffee",
    companyLabel: "DevCoffee",
    yearGroup: "2024",
    title: "2ª Mentoria DevCoffee — Cargos de uma Software House",
    category: "DevCoffee • Mentoria 02",
    year: "06/09/2024",
    cover: "visita3.png",
    coverAlt: "Mentores da DevCoffee explicando os cargos de uma software house aos alunos",
    description:
      "Com a presença de Matheus Marcelino e José Leite, conhecemos os diferentes cargos e funções de uma software house, compreendendo as responsabilidades de cada profissional e sua importância na equipe.",
    bullets: [
      "Mentores: Matheus Marcelino e José Leite",
      "Papéis e funções dentro de uma software house",
      "Sessão de perguntas sobre carreira em TI"
    ]
  },
  {
    filter: "iochpe",
    companyLabel: "Fundação Iochpe",
    yearGroup: "2024",
    title: "1ª Mentoria Fundação Iochpe — Escolha do Curso AMS & Apoio",
    category: "Fundação Iochpe • Mentoria 01",
    year: "06/09/2024",
    cover: "visita4.png",
    coverAlt: "Roda de conversa da turma AMS com representantes da Fundação Iochpe",
    description:
      "Bate-papo com os alunos sobre os motivos que levaram cada um a escolher o curso AMS e suas expectativas em relação à formação. Também conhecemos a história e ações da Fundação Iochpe e recebemos a notícia da doação que proporcionou a viagem técnica da turma.",
    bullets: [
      "Roda de conversa sobre expectativas no curso AMS",
      "História e objetivos da Fundação Iochpe",
      "Doação que viabilizou a viagem técnica da turma"
    ]
  },
  {
    filter: "devcoffee",
    companyLabel: "DevCoffee",
    yearGroup: "2024",
    title: "3ª Mentoria DevCoffee — Formação das Equipes",
    category: "DevCoffee • Mentoria 03",
    year: "11/09/2024",
    cover: "visita5.png",
    coverAlt: "Estudantes organizados em equipes multidisciplinares na mentoria da DevCoffee",
    description:
      "Organização dos grupos de quatro integrantes, unindo dois alunos de Administração e dois de Desenvolvimento de Sistemas, para iniciar o brainstorming e o planejamento colaborativo do projeto ao longo do curso.",
    bullets: [
      "Equipes multidisciplinares: 2 alunos ADM + 2 alunos ADS",
      "Compartilhamento de ideias e propostas iniciais",
      "Foco em criatividade e colaboração em grupo"
    ]
  },
  {
    filter: "devcoffee",
    companyLabel: "DevCoffee",
    yearGroup: "2024",
    title: "4ª Mentoria DevCoffee — Dinâmica Cliente & Fornecedor",
    category: "DevCoffee • Mentoria 04",
    year: "24/09/2024",
    cover: "visita6.png",
    coverAlt: "Equipes realizando dinâmica prática de cliente e fornecedor em sala",
    description:
      "Retomada dos grupos formados na mentoria anterior para troca de ideias com as equipes parceiras. Cada grupo atuou como cliente do outro, apresentando necessidades e expectativas para orientar o planejamento.",
    bullets: [
      "Simulação prática cliente-fornecedor entre equipes",
      "Levantamento inicial de expectativas do cliente",
      "Estruturação das propostas de projeto"
    ]
  },
  {
    filter: "devcoffee",
    companyLabel: "DevCoffee",
    yearGroup: "2024",
    title: "5ª Mentoria DevCoffee — Especificação de Requisitos",
    category: "DevCoffee • Mentoria 05",
    year: "07/10/2024",
    cover: "visita7.png",
    coverAlt: "Desenvolvedor orientando alunos na especificação de requisitos de software",
    description:
      "Sob orientação do desenvolvedor José, elaboramos perguntas sobre especificação de requisitos e as encaminhamos ao grupo parceiro, além de recebermos perguntas da outra equipe para responder na aula seguinte.",
    bullets: [
      "Orientação técnica do desenvolvedor José",
      "Elaboração de perguntas de especificação de requisitos",
      "Alinhamento mútuo entre equipes parceiras"
    ]
  },
  {
    filter: "devcoffee",
    companyLabel: "DevCoffee",
    yearGroup: "2024",
    title: "6ª Mentoria DevCoffee — Acompanhamento & Evolução",
    category: "DevCoffee • Mentoria 06",
    year: "22/10/2024",
    cover: "visita8.png",
    coverAlt: "Acompanhamento do progresso dos grupos durante mentoria da DevCoffee",
    description:
      "Reunião com a DevCoffee para dar sequência ao trabalho em grupo, retomar atividades pendentes e organizar as próximas etapas colocando em prática as orientações já recebidas.",
    bullets: [
      "Continuidade e revisão de pendências do projeto",
      "Planejamento das etapas seguintes de execução",
      "Acompanhamento direto com a empresa parceira"
    ]
  },
  {
    filter: "devcoffee",
    companyLabel: "DevCoffee",
    yearGroup: "2024",
    title: "7ª Mentoria DevCoffee — Documento de Requisitos",
    category: "DevCoffee • Mentoria 07",
    year: "07/11/2024",
    cover: "visita9.png",
    coverAlt: "Alunos redigindo o Documento de Requisitos com apoio dos mentores",
    description:
      "Aprofundamento nas necessidades e expectativas do cliente e início da elaboração formal do Documento de Requisitos, registrando funcionalidades e características essenciais do produto.",
    bullets: [
      "Início da redação do Documento de Requisitos",
      "Registro de funcionalidades e características do sistema",
      "Alinhamento com as demandas do cliente"
    ]
  },
  {
    filter: "ibm",
    companyLabel: "IBM",
    yearGroup: "2024",
    title: "Visita Técnica IBM (Parte 1) — Cultura & Bem-Estar",
    category: "IBM Brasil • Visita Técnica",
    year: "22/11/2024",
    cover: "visita10.png",
    coverAlt: "Turma visitando as áreas de convivência e bem-estar na unidade da IBM",
    description:
      "Acompanhados por Bruna, conhecemos os ambientes da IBM e sua cultura organizacional voltada ao bem-estar dos colaboradores, incluindo áreas de massagem, refeitórios, pebolim e o boneco de boxe Boby.",
    bullets: [
      "Recepção e tour guiado por Bruna",
      "Cultura de valorização e bem-estar no trabalho",
      "Infraestrutura de uma empresa global de tecnologia"
    ]
  },
  {
    filter: "ibm",
    companyLabel: "IBM",
    yearGroup: "2024",
    title: "Visita Técnica IBM (Parte 2) — Palestra sobre Inteligência Artificial",
    category: "IBM Brasil • Palestra IA",
    year: "22/11/2024",
    cover: "visita11.png",
    coverAlt: "Palestra técnica sobre Inteligência Artificial no auditório da IBM",
    description:
      "Segunda palestra conduzida por Igor, discutindo os benefícios, aplicações práticas e riscos do uso da Inteligência Artificial, gerando reflexão sobre responsabilidade e ética na tecnologia.",
    bullets: [
      "Apresentação conduzida por Igor",
      "Benefícios e riscos do uso da Inteligência Artificial",
      "Reflexão sobre ética e impacto social da IA"
    ]
  },
  {
    filter: "ibm",
    companyLabel: "IBM",
    yearGroup: "2024",
    title: "Visita Técnica IBM (Parte 3) — Carreiras & Encerramento",
    category: "IBM Brasil • Carreiras",
    year: "22/11/2024",
    cover: "visita12.png",
    coverAlt: "Foto oficial da turma no encerramento da visita técnica à IBM",
    description:
      "Bate-papo final sobre oportunidades profissionais, programas de entrada e benefícios corporativos oferecidos pela IBM, encerrando a viagem técnica com parada em Hortolândia.",
    bullets: [
      "Oportunidades de carreira e benefícios na IBM",
      "Foto oficial da turma e encerramento da visita",
      "Imersão completa no mercado de tecnologia"
    ]
  },
  {
    filter: "devcoffee",
    companyLabel: "DevCoffee",
    yearGroup: "2024",
    title: "8ª Mentoria DevCoffee — Reformulação de Requisitos",
    category: "DevCoffee • Mentoria 08",
    year: "25/11/2024",
    cover: "visita13.png",
    coverAlt: "Revisão e reformulação do Documento de Requisitos em sala de aula",
    description:
      "Discussão das observações feitas pelo cliente e reformulação do Documento de Requisitos, aplicando ajustes e revisando informações para garantir total clareza e precisão técnica.",
    bullets: [
      "Reformulação e ajustes no Documento de Requisitos",
      "Revisão de clareza conforme feedback do cliente",
      "Consolidação da etapa de análise"
    ]
  },
  {
    filter: "devcoffee",
    companyLabel: "DevCoffee",
    yearGroup: "2025",
    title: "1ª Mentoria DevCoffee 2025 — Modelo Software House",
    category: "DevCoffee • Mentoria 2025",
    year: "20/05/2025",
    cover: "visita14.png",
    coverAlt: "Encontro de retomada das mentorias DevCoffee em 2025",
    description:
      "Retomada das mentorias em 2025 com informações sobre a atualização de marca da empresa e aprofundamento sobre o funcionamento de uma software house e as etapas de entrega de software.",
    bullets: [
      "Funcionamento e etapas de uma software house",
      "Atualização institucional da empresa parceira",
      "Contextualização profissional do projeto"
    ]
  },
  {
    filter: "devcoffee",
    companyLabel: "DevCoffee",
    yearGroup: "2025",
    title: "2ª Mentoria DevCoffee 2025 — Prototipação no Figma",
    category: "DevCoffee • UI Design & Figma",
    year: "25/06/2025",
    cover: "visita15.png",
    coverAlt: "Oficina prática de prototipação de interfaces no Figma",
    description:
      "Oficina prática da ferramenta Figma para criação de protótipos e desenvolvimento visual de sistemas e aplicativos, onde começamos a construir o protótipo navegável do nosso projeto.",
    bullets: [
      "Aprendizado prático dos recursos do Figma",
      "Criação do protótipo visual do projeto",
      "Organização de telas e experiência do usuário"
    ]
  },
  {
    filter: "iochpe",
    companyLabel: "Fundação Iochpe",
    yearGroup: "2025",
    title: "2ª Mentoria Fundação Iochpe — Resolução de Conflitos & Soft Skills",
    category: "Fundação Iochpe • Mentoria 02",
    year: "04/09/2025",
    cover: "visita16.png",
    coverAlt: "Dinâmica em grupo sobre resolução de conflitos e habilidades emocionais",
    description:
      "Palestra dinâmica sobre resolução de conflitos e habilidades emocionais. Participamos de uma atividade prática dividida em três equipes (iniciar assuntos, manter harmonia e provocar discordâncias), seguida por trios que exercitaram empatia, diálogo e escuta ativa.",
    bullets: [
      "Palestra sobre resolução de conflitos e habilidades emocionais",
      "Dinâmica prática em 3 equipes e trios de comunicação",
      "Desenvolvimento de empatia, diálogo e gestão de opiniões"
    ]
  },
  {
    filter: "tebe",
    companyLabel: "Tebe",
    yearGroup: "2025",
    title: "1ª Mentoria Tebe — Alinhamento & Liderança",
    category: "Tebe • Mentoria 01",
    year: "04/09/2025",
    cover: "visita17.png",
    coverAlt: "Equipe da Tebe apresentando o desafio do projeto para a turma",
    description:
      "Visita da empresa Tebe apresentando seus objetivos, serviços e expectativas para o projeto da turma. Conhecemos os profissionais responsáveis pelo acompanhamento: Matheus Nard, Marco (CEO) e Marcos.",
    bullets: [
      "Participação de Marco (CEO), Matheus Nard e Marcos",
      "Apresentação dos objetivos e expectativas da Tebe",
      "Alinhamento inicial do produto a ser desenvolvido"
    ]
  },
  {
    filter: "tebe",
    companyLabel: "Tebe",
    yearGroup: "2025",
    title: "2ª Mentoria Tebe — Sensores IoT & Introdução ao GitHub",
    category: "Tebe • Mentoria 02",
    year: "18/09/2025",
    // TODO: Adicionar a foto exclusiva da 2ª mentoria da Tebe
    cover: "",
    coverAlt: "Registro da 2ª mentoria da Tebe sobre sensores IoT e GitHub",
    description:
      "Encontro com dois estagiários recém-contratados, instalação prática de sensores preventivos de falhas em equipamentos (ar-condicionado) e apresentação do GitHub com criação de repositórios em duplas.",
    bullets: [
      "Instalação prática de sensores de monitoramento preventivo",
      "Workshop introdutório de GitHub",
      "Criação e envio de repositórios em duplas"
    ]
  },
  {
    filter: "tebe",
    companyLabel: "Tebe",
    yearGroup: "2025",
    title: "3ª Mentoria Tebe — Versionamento Local com GitHub",
    category: "Tebe • Mentoria 03",
    year: "02/10/2025",
    // TODO: Adicionar a foto exclusiva da 3ª mentoria da Tebe
    cover: "",
    coverAlt: "Registro da 3ª mentoria da Tebe sobre versionamento local no GitHub",
    description:
      "Continuidade do aprendizado sobre GitHub, aprendendo a manusear o repositório criado anteriormente e integrá-lo diretamente ao computador com orientação passo a passo de Matheus Nard e Marcos.",
    bullets: [
      "Orientação prática de Matheus Nard e Marcos",
      "Integração do repositório GitHub ao computador local",
      "Organização de arquivos e fluxo de versionamento"
    ]
  },
  {
    filter: "tebe",
    companyLabel: "Tebe",
    yearGroup: "2025",
    title: "4ª Mentoria Tebe — Entrega Oficial & Avaliação do Projeto",
    category: "Tebe • Mentoria 04",
    year: "28/10/2025",
    // TODO: Adicionar a foto exclusiva da 4ª mentoria da Tebe
    cover: "",
    coverAlt: "Registro da 4ª mentoria da Tebe na entrega oficial do projeto",
    description:
      "Entrega oficial do projeto desenvolvido pela equipe, esclarecimento de dúvidas técnicas e recebimento de orientações práticas da Tebe para identificação de melhorias, correção de erros e refinamento final.",
    bullets: [
      "Entrega oficial do projeto desenvolvido pela equipe",
      "Feedback técnico e alinhamento com objetivos da Tebe",
      "Identificação de melhorias e correção de erros"
    ]
  }
];

/* =========================================================
   2. CERTIFICADOS OFICIAIS (REACT.JS + PYTHON 1 + PYTHON 2)
========================================================= */
const certificatesData = [
  {
    program: "TIC EM TRILHAS • PROGRAMA MCTI FUTURO",
    title: "Introdução a React.js",
    org: "Instituição Executora: Venturus • Coordenação: Softex",
    desc: "Certificação de conclusão na trilha Introdução a React.js, com foco em componentes, estado, propriedades e construção de interfaces web modernas, apoiada pelo Ministério da Ciência, Tecnologia e Inovação.",
    hours: "Carga Horária: 30 horas",
    date: "Campinas, 27 de março de 2025",
    image: "certificdo.png",
    fileUrl: "certificdo.png",
    fileLabel: "Ver certificado (Imagem)"
  },
  {
    program: "CISCO NETWORKING ACADEMY • PYTHON INSTITUTE",
    title: "Fundamentos do Python 1",
    org: "Cisco Networking Academy & Python Institute",
    desc: "Concluído com sucesso o curso Fundamentos do Python 1, abordando sintaxe básica, tipos de dados, estruturas de controle, funções e lógica de programação em Python.",
    hours: "Cert ID: 15961357-d9a8-4b4d-a669-09061d4b97ab",
    date: "Concluído em 18 de novembro de 2026",
    image: "",
    fileUrl: "Python_Essentials_1_certificate_joaopadua7-gmail-com_15961357-d9a8-4b4d-a669-09061d4b97ab.pdf",
    fileLabel: "Ver certificado (PDF)"
  },
  {
    program: "CISCO NETWORKING ACADEMY • PYTHON INSTITUTE",
    title: "Fundamentos de Python 2",
    org: "Cisco Networking Academy & Python Institute",
    desc: "Concluído com sucesso o curso Fundamentos de Python 2, aprofundando em módulos, pacotes, programação orientada a objetos (POO), exceções e manipulação de arquivos.",
    hours: "Cert ID: 185f4bef-78ae-488a-9bd3-3c5c5e831a43",
    date: "Concluído em 18 de novembro de 2026",
    image: "",
    fileUrl: "Python_Essentials_2_certificate_joaopadua7-gmail-com_185f4bef-78ae-488a-9bd3-3c5c5e831a43.pdf",
    fileLabel: "Ver certificado (PDF)"
  }
];

/* =========================================================
   3. CONTADORES DINÂMICOS (VIVÊNCIAS, EMPRESAS E CERTIFICADOS)
========================================================= */
function updateDynamicCounts() {
  const totalExp = experiencesData.length;
  const distinctCompanies = new Set(experiencesData.map((item) => item.filter)).size;
  const totalCerts = certificatesData.length;

  const padTwo = (num) => String(num).padStart(2, "0");

  const statExpEl = document.getElementById("statExperiencesCount");
  const statCompEl = document.getElementById("statCompaniesCount");
  const statCertEl = document.getElementById("statCertificatesCount");
  const filterAllLabel = document.getElementById("filterAllLabel");

  if (statExpEl) statExpEl.textContent = padTwo(totalExp);
  if (statCompEl) statCompEl.textContent = padTwo(distinctCompanies);
  if (statCertEl) statCertEl.textContent = padTwo(totalCerts);
  if (filterAllLabel) filterAllLabel.textContent = `Todas (${totalExp})`;
}

/* =========================================================
   4. CURSOR PERSONALIZADO, MAGNETISMO (--tx/--ty) & HERO PARALLAX
========================================================= */
(function initCursorAndHeroFX() {
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  const hero = document.getElementById("hero");
  const spotlight = document.getElementById("heroSpotlight");
  const stage = document.getElementById("portraitStage");
  const sheen = document.getElementById("portraitSheen");

  if (isFinePointer && !prefersReduced && dot && ring) {
    document.documentElement.classList.add("has-custom-cursor");

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let cursorVisible = false;
    let cursorRafId = null;

    function renderCursorFrame() {
      if (!cursorVisible || document.hidden) {
        cursorRafId = null;
        return;
      }

      const dx = mouseX - ringX;
      const dy = mouseY - ringY;
      ringX += dx * 0.18;
      ringY += dy * 0.18;

      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        cursorRafId = requestAnimationFrame(renderCursorFrame);
      } else {
        ring.style.left = `${mouseX}px`;
        ring.style.top = `${mouseY}px`;
        cursorRafId = null;
      }
    }

    document.addEventListener(
      "mousemove",
      (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!cursorVisible) {
          cursorVisible = true;
          ringX = mouseX;
          ringY = mouseY;
          document.documentElement.classList.add("cursor-ready");
        }

        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;

        if (!cursorRafId && !document.hidden) {
          cursorRafId = requestAnimationFrame(renderCursorFrame);
        }
      },
      { passive: true }
    );

    document.addEventListener("mouseleave", () => {
      cursorVisible = false;
      document.documentElement.classList.remove("cursor-ready");
    });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden && cursorRafId) {
        cancelAnimationFrame(cursorRafId);
        cursorRafId = null;
      }
    });

    document.addEventListener("mouseover", (e) => {
      if (e.target.closest("a, button, .portrait-stage, .cert-card, .tool-card, .tcc-card")) {
        document.body.classList.add("cursor-hover");
      }
    });

    document.addEventListener("mouseout", (e) => {
      if (e.target.closest("a, button, .portrait-stage, .cert-card, .tool-card, .tcc-card")) {
        document.body.classList.remove("cursor-hover");
      }
    });
  }

  // Efeito Magnético via --tx / --ty sem conflitar com o transform do :active
  if (!prefersReduced && isFinePointer) {
    document.querySelectorAll(".magnetic").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.2;
        const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.2;
        el.style.setProperty("--tx", `${dx.toFixed(1)}px`);
        el.style.setProperty("--ty", `${dy.toFixed(1)}px`);
      });
      el.addEventListener("mouseleave", () => {
        el.style.setProperty("--tx", "0px");
        el.style.setProperty("--ty", "0px");
      });
    });
  }

  // Spotlight do fundo do Hero
  if (hero && spotlight && !prefersReduced) {
    hero.addEventListener(
      "mousemove",
      (e) => {
        const rect = hero.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        spotlight.style.setProperty("--mx", `${x.toFixed(1)}%`);
        spotlight.style.setProperty("--my", `${y.toFixed(1)}%`);
      },
      { passive: true }
    );
  }

  // Pausa o marquee SCALLORA quando o Hero sair da tela
  if (hero && stage) {
    const heroVisObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          stage.classList.toggle("is-offscreen", !entry.isIntersecting);
        });
      },
      { threshold: 0.05 }
    );
    heroVisObserver.observe(hero);
  }

  // Tilt 3D na Foto + Parallax inverso nas faixas SCALLORA (desligado no mobile <= 640px)
  if (stage && !prefersReduced) {
    stage.addEventListener("mousemove", (e) => {
      if (window.innerWidth <= 640) return;

      const rect = stage.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width;
      const relY = (e.clientY - rect.top) / rect.height;

      const rotateY = (relX - 0.5) * 9;
      const rotateX = (0.5 - relY) * 8;

      stage.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;

      // Deslocamento no sentido oposto ao tilt (14px)
      const bgTx = (0.5 - relX) * 28;
      const bgTy = (0.5 - relY) * 24;
      stage.style.setProperty("--tx", `${bgTx.toFixed(1)}px`);
      stage.style.setProperty("--ty", `${bgTy.toFixed(1)}px`);

      if (sheen) {
        sheen.style.setProperty("--px", `${(relX * 100).toFixed(1)}%`);
        sheen.style.setProperty("--py", `${(relY * 100).toFixed(1)}%`);
      }
    });

    stage.addEventListener("mouseleave", () => {
      stage.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
      stage.style.setProperty("--tx", "0px");
      stage.style.setProperty("--ty", "0px");
    });
  }
})();

/* =========================================================
   5. MENU MOBILE ACESSÍVEL & DESTAQUE DE SEÇÃO ATIVA
========================================================= */
(function initNavigation() {
  const siteHeader = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const mobileDrawer = document.getElementById("mobileNavDrawer");
  const mainContent = document.getElementById("main-content");
  const siteFooter = document.getElementById("contato");

  window.addEventListener(
    "scroll",
    () => siteHeader.classList.toggle("is-scrolled", window.scrollY > 40),
    { passive: true }
  );

  function setMobileMenu(open) {
    if (!menuToggle || !mobileDrawer) return;
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Fechar menu de navegação" : "Abrir menu de navegação");
    mobileDrawer.hidden = !open;
    document.body.classList.toggle("modal-open", open);

    if (mainContent) mainContent.inert = open;
    if (siteFooter) siteFooter.inert = open;

    if (open) {
      const firstLink = mobileDrawer.querySelector("a");
      if (firstLink) firstLink.focus();
    } else {
      menuToggle.focus();
    }
  }

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      setMobileMenu(!isExpanded);
    });

    mobileDrawer.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", () => setMobileMenu(false));
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        setMobileMenu(false);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 640 && menuToggle.getAttribute("aria-expanded") === "true") {
        setMobileMenu(false);
      }
    });
  }

  // IntersectionObserver para destacar seção ativa no menu
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const observedSections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (observedSections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            navLinks.forEach((link) => {
              link.classList.toggle("is-active", link.getAttribute("href") === id);
            });
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    observedSections.forEach((sec) => sectionObserver.observe(sec));
  }
})();

/* =========================================================
   6. ABAS WAI-ARIA DO PROJETO TCC (SCALLORA)
========================================================= */
(function initTccTabs() {
  const tabList = document.querySelector(".tcc-tabs-bar");
  if (!tabList) return;

  const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'));
  const panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

  function activateTab(selectedTab, shouldFocus = false) {
    tabs.forEach((tab) => {
      const isSelected = tab === selectedTab;
      tab.classList.toggle("active", isSelected);
      tab.setAttribute("aria-selected", String(isSelected));
      tab.setAttribute("tabindex", isSelected ? "0" : "-1");
    });

    if (window.innerWidth <= 640) {
      selectedTab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }

    const targetPanelId = selectedTab.getAttribute("aria-controls");
    panels.forEach((panel) => {
      const match = panel.id === targetPanelId;
      panel.hidden = !match;
      panel.classList.toggle("is-active", match);
    });

    if (shouldFocus) selectedTab.focus();
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activateTab(tab, false));

    tab.addEventListener("keydown", (e) => {
      const idx = tabs.indexOf(tab);
      let nextIdx = null;

      if (e.key === "ArrowRight") nextIdx = (idx + 1) % tabs.length;
      else if (e.key === "ArrowLeft") nextIdx = (idx - 1 + tabs.length) % tabs.length;
      else if (e.key === "Home") nextIdx = 0;
      else if (e.key === "End") nextIdx = tabs.length - 1;

      if (nextIdx !== null) {
        e.preventDefault();
        activateTab(tabs[nextIdx], true);
      }
    });
  });
})();

/* =========================================================
   7. CERTIFICADOS (COM ALTURA UNIFORME + ABRIR PDF/IMAGEM)
========================================================= */
function renderCertificates() {
  const certificatesGrid = document.getElementById("certificatesGrid");
  if (!certificatesGrid) return;

  const frag = document.createDocumentFragment();

  certificatesData.forEach((cert) => {
    const card = document.createElement("article");
    card.className = "cert-card reveal";

    const previewContent = cert.image
      ? `<img src="${cert.image}" alt="Certificado ${cert.title}" width="400" height="250" loading="lazy" decoding="async" />`
      : `<div class="cert-doc-preview" aria-hidden="true">
           <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
             <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
             <polyline points="14 2 14 8 20 8" />
             <line x1="8" y1="13" x2="16" y2="13" />
             <line x1="8" y1="17" x2="13" y2="17" />
           </svg>
           <span class="mono-label">DOCUMENTO PDF</span>
         </div>`;

    card.innerHTML = `
      <div>
        <div class="cert-card-thumb">${previewContent}</div>
        <span class="mono-label accent">${cert.program}</span>
        <h3 class="cert-card-title">${cert.title}</h3>
        <p class="cert-card-org">${cert.org}</p>
        <p class="cert-card-desc">${cert.desc}</p>
      </div>
      <div class="cert-card-footer">
        <span class="mono-label">${cert.hours}</span>
        <span class="mono-label muted">${cert.date}</span>
        <a href="${cert.fileUrl}" target="_blank" rel="noopener noreferrer" class="btn-pill btn-pill-ghost cert-action-btn">
          <span class="btn-text">${cert.fileLabel} &nearr;</span>
        </a>
      </div>
    `;

    frag.appendChild(card);
  });

  certificatesGrid.appendChild(frag);
}

/* =========================================================
   8. VIVÊNCIAS AGRUPADAS, PREVIEW SOB DEMANDA & MODAL COM FOCUS TRAP
========================================================= */
(function initExperiencesAndModal() {
  const container = document.getElementById("experiencesContainer");
  const filterBar = document.getElementById("filterBar");
  const moreWrap = document.getElementById("experiencesMoreWrap");
  const toggleMoreBtn = document.getElementById("toggleAllExperiencesBtn");
  const toggleMoreLabel = document.getElementById("toggleAllExperiencesLabel");

  const projectPreview = document.getElementById("projectPreview");
  const projectPreviewImg = document.getElementById("projectPreviewImg");
  const projectPreviewFallback = document.getElementById("projectPreviewFallback");
  const projectPreviewFallbackTitle = document.getElementById("projectPreviewFallbackTitle");

  const expModal = document.getElementById("expModal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const siteHeader = document.getElementById("siteHeader");
  const mainContent = document.getElementById("main-content");
  const siteFooter = document.getElementById("contato");

  const INITIAL_VISIBLE_LIMIT = 8;
  let currentFilter = "todos";
  let showAllInTodos = false;
  let lastFocusedTrigger = null;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;

  let cursorX = 0;
  let cursorY = 0;
  let previewX = 0;
  let previewY = 0;
  let previewActive = false;
  let previewRafId = null;
  const preloadedUrls = new Set();

  function preloadImageOnce(url) {
    if (!url || preloadedUrls.has(url)) return;
    preloadedUrls.add(url);
    const img = new Image();
    img.src = url;
  }

  function animatePreview() {
    if (!previewActive || document.hidden) {
      previewRafId = null;
      return;
    }
    previewX += (cursorX + 165 - previewX) * 0.16;
    previewY += (cursorY - 20 - previewY) * 0.16;
    projectPreview.style.left = `${previewX}px`;
    projectPreview.style.top = `${previewY}px`;
    previewRafId = requestAnimationFrame(animatePreview);
  }

  document.addEventListener(
    "mousemove",
    (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
    },
    { passive: true }
  );

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && previewRafId) {
      cancelAnimationFrame(previewRafId);
      previewRafId = null;
    }
  });

  function showPreviewForIndex(idx) {
    if (!isFinePointer || prefersReduced) return;
    const item = experiencesData[idx];
    if (!item) return;

    if (item.cover) {
      projectPreviewImg.src = item.cover;
      projectPreviewImg.hidden = false;
      projectPreviewFallback.hidden = true;
    } else {
      projectPreviewImg.hidden = true;
      projectPreviewImg.removeAttribute("src");
      projectPreviewFallbackTitle.textContent = item.title;
      projectPreviewFallback.hidden = false;
    }

    for (let next = idx + 1; next < experiencesData.length; next++) {
      if (experiencesData[next].cover) {
        preloadImageOnce(experiencesData[next].cover);
        break;
      }
    }

    if (!previewActive) {
      previewActive = true;
      previewX = cursorX + 165;
      previewY = cursorY - 20;
      projectPreview.style.left = `${previewX}px`;
      projectPreview.style.top = `${previewY}px`;
      projectPreview.classList.add("is-active");
      if (!previewRafId && !document.hidden) {
        previewRafId = requestAnimationFrame(animatePreview);
      }
    }
  }

  function hidePreview() {
    previewActive = false;
    projectPreview.classList.remove("is-active");
    if (previewRafId) {
      cancelAnimationFrame(previewRafId);
      previewRafId = null;
    }
  }

  function renderExperiences() {
    const indexed = experiencesData.map((item, idx) => ({ item, idx }));
    const filtered =
      currentFilter === "todos"
        ? indexed
        : indexed.filter(({ item }) => item.filter === currentFilter);

    const shouldPaginate = currentFilter === "todos" && !showAllInTodos && filtered.length > INITIAL_VISIBLE_LIMIT;
    const visibleItems = shouldPaginate ? filtered.slice(0, INITIAL_VISIBLE_LIMIT) : filtered;

    const groups = [];
    visibleItems.forEach((entry) => {
      const groupKey = `${entry.item.yearGroup} · ${entry.item.companyLabel}`;
      const lastGroup = groups[groups.length - 1];
      if (lastGroup && lastGroup.key === groupKey) {
        lastGroup.entries.push(entry);
      } else {
        groups.push({ key: groupKey, entries: [entry] });
      }
    });

    const frag = document.createDocumentFragment();

    groups.forEach((group) => {
      const sectionEl = document.createElement("div");
      sectionEl.className = "exp-group";

      const headerEl = document.createElement("div");
      headerEl.className = "exp-group-header";
      headerEl.innerHTML = `<span class="mono-label accent">${group.key}</span>`;
      sectionEl.appendChild(headerEl);

      const ul = document.createElement("ul");
      ul.className = "projects-list";

      group.entries.forEach(({ item, idx }) => {
        const li = document.createElement("li");
        li.className = "project-list-item";

        const thumbHtml = item.cover
          ? `<img src="${item.cover}" alt="" width="48" height="48" loading="lazy" decoding="async" />`
          : `<span class="project-mobile-thumb-empty" aria-hidden="true">AMS</span>`;

        li.innerHTML = `
          <button type="button" class="project-row" data-exp-index="${idx}">
            <span class="project-row-main">
              <span class="project-mobile-thumb">${thumbHtml}</span>
              <span class="project-row-title">${item.title}</span>
            </span>
            <span class="mono-label muted project-row-category">${item.category}</span>
            <span class="mono-label accent">${item.year}</span>
          </button>
        `;

        ul.appendChild(li);
      });

      sectionEl.appendChild(ul);
      frag.appendChild(sectionEl);
    });

    container.replaceChildren(frag);

    if (currentFilter === "todos" && filtered.length > INITIAL_VISIBLE_LIMIT) {
      moreWrap.hidden = false;
      toggleMoreLabel.textContent = showAllInTodos
        ? "Mostrar menos"
        : `Ver todas (${filtered.length})`;
    } else {
      moreWrap.hidden = true;
    }
  }

  container.addEventListener("pointerover", (e) => {
    const row = e.target.closest(".project-row");
    if (!row || !container.contains(row)) return;
    showPreviewForIndex(Number(row.dataset.expIndex));
  });

  container.addEventListener("pointerout", (e) => {
    const row = e.target.closest(".project-row");
    if (!row) return;
    if (!e.relatedTarget || !row.contains(e.relatedTarget)) {
      hidePreview();
    }
  });

  container.addEventListener("focusin", (e) => {
    const row = e.target.closest(".project-row");
    if (row) showPreviewForIndex(Number(row.dataset.expIndex));
  });

  container.addEventListener("focusout", (e) => {
    const row = e.target.closest(".project-row");
    if (row) hidePreview();
  });

  container.addEventListener("click", (e) => {
    const row = e.target.closest(".project-row");
    if (!row) return;
    openModal(Number(row.dataset.expIndex), row);
  });

  // Filtros com aria-pressed
  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    filterBar.querySelectorAll(".filter-btn").forEach((b) => {
      const isActive = b === btn;
      b.classList.toggle("active", isActive);
      b.setAttribute("aria-pressed", String(isActive));
    });

    if (window.innerWidth <= 640) {
      btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }

    currentFilter = btn.dataset.filter;
    showAllInTodos = false;
    hidePreview();
    renderExperiences();
  });

  if (toggleMoreBtn) {
    toggleMoreBtn.addEventListener("click", () => {
      showAllInTodos = !showAllInTodos;
      renderExperiences();
    });
  }

  function setBackgroundInert(state) {
    if (siteHeader) siteHeader.inert = state;
    if (mainContent) mainContent.inert = state;
    if (siteFooter) siteFooter.inert = state;
  }

  function openModal(idx, triggerEl) {
    const item = experiencesData[idx];
    if (!item) return;

    hidePreview();
    lastFocusedTrigger = triggerEl || document.activeElement;

    document.getElementById("modalMeta").textContent = `${item.category} • ${item.year}`;
    document.getElementById("modalTitle").textContent = item.title;

    const modalCover = document.getElementById("modalCover");
    const modalPlaceholder = document.getElementById("modalCoverPlaceholder");

    if (item.cover) {
      modalCover.src = item.cover;
      modalCover.alt = item.coverAlt || `Registro fotográfico: ${item.title}`;
      modalCover.hidden = false;
      modalPlaceholder.hidden = true;
    } else {
      modalCover.hidden = true;
      modalCover.removeAttribute("src");
      modalCover.alt = "";
      modalPlaceholder.hidden = false;
    }

    document.getElementById("modalDesc").textContent = item.description;
    document.getElementById("modalBullets").innerHTML = item.bullets
      .map((b) => `<li>${b}</li>`)
      .join("");

    expModal.hidden = false;
    document.body.classList.add("modal-open");
    setBackgroundInert(true);
    closeModalBtn.focus();
  }

  function closeModal() {
    if (expModal.hidden) return;
    expModal.hidden = true;
    document.body.classList.remove("modal-open");
    setBackgroundInert(false);

    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === "function") {
      lastFocusedTrigger.focus();
    }
  }

  closeModalBtn.addEventListener("click", closeModal);

  expModal.addEventListener("click", (e) => {
    if (e.target === expModal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (expModal.hidden) return;

    if (e.key === "Escape") {
      closeModal();
      return;
    }

    if (e.key === "Tab") {
      const focusables = Array.from(
        expModal.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  renderExperiences();
})();

/* =========================================================
   9. COPIAR E-MAIL & SCROLL REVEAL
========================================================= */
const copyEmailBtn = document.getElementById("copyEmailBtn");
if (copyEmailBtn) {
  const labelSpan = copyEmailBtn.querySelector(".btn-text");
  copyEmailBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("joaopedro.padua@fatec.sp.gov.br");
    } catch {}
    if (labelSpan) labelSpan.textContent = "Copiado!";
    setTimeout(() => {
      if (labelSpan) labelSpan.textContent = "Copiar E-mail";
    }, 2200);
  });
}

updateDynamicCounts();
renderCertificates();

const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));