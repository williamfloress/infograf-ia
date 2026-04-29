export const timelineData = {
  general: [
    {
      id: "gen-01", year: 1950,
      title: "Test de Turing",
      description: "Alan Turing publica 'Computing Machinery and Intelligence', proponiendo el criterio de inteligencia máquina conocido como Test de Turing. Este artículo sienta las bases filosóficas de la IA moderna.",
      importance: "high", tags: ["fundamentos", "teoría"],
      source: { apa: "Turing, A. M. (1950). Computing machinery and intelligence. Mind, 59(236), 433–460. https://doi.org/10.1093/mind/LIX.236.433" }
    },
    {
      id: "gen-02", year: 1956,
      title: "Conferencia de Dartmouth",
      description: "John McCarthy, Marvin Minsky, Claude Shannon y otros científicos acuñan oficialmente el término 'Inteligencia Artificial' en el Dartmouth Summer Research Project. Marca el nacimiento formal de la disciplina.",
      importance: "high", tags: ["fundamentos", "historia"],
      source: { apa: "McCarthy, J., Minsky, M. L., Rochester, N., & Shannon, C. E. (1955). A proposal for the Dartmouth summer research project on artificial intelligence. Dartmouth College." }
    },
    {
      id: "gen-03", year: 1966,
      title: "ELIZA — Primer chatbot",
      description: "Joseph Weizenbaum del MIT desarrolla ELIZA, el primer programa capaz de simular una conversación en lenguaje natural. Demuestra que las máquinas pueden parecer 'comprensivas' sin comprender realmente.",
      importance: "medium", tags: ["NLP", "hito"],
      source: { apa: "Weizenbaum, J. (1966). ELIZA—A computer program for the study of natural language communication between man and machine. Communications of the ACM, 9(1), 36–45." }
    },
    {
      id: "gen-04", year: 1974,
      title: "Primer Invierno de la IA",
      description: "Recortes de financiamiento en EE.UU. y Reino Unido tras el informe Lighthill marcan el primer período de estancamiento. Las promesas no cumplidas generaron escepticismo generalizado en la comunidad científica.",
      importance: "medium", tags: ["crisis", "financiamiento"],
      source: { apa: "Russell, S., & Norvig, P. (2021). Artificial intelligence: A modern approach (4th ed.). Pearson." }
    },
    {
      id: "gen-05", year: 1986,
      title: "Retropropagación en Redes Neuronales",
      description: "Rumelhart, Hinton y Williams popularizaron el algoritmo de backpropagation, permitiendo el entrenamiento eficiente de redes neuronales multicapa. Este avance relanzó el interés en el aprendizaje automático.",
      importance: "high", tags: ["machine learning", "redes neuronales"],
      source: { apa: "Rumelhart, D. E., Hinton, G. E., & Williams, R. J. (1986). Learning representations by back-propagating errors. Nature, 323, 533–536." }
    },
    {
      id: "gen-06", year: 1997,
      title: "Deep Blue vence a Kasparov",
      description: "La computadora Deep Blue de IBM derrota al campeón mundial de ajedrez Garry Kasparov. Fue el primer caso público de una máquina superando a un humano experto en un dominio cognitivo complejo.",
      importance: "high", tags: ["hito", "juegos"],
      source: { apa: "Russell, S., & Norvig, P. (2021). Artificial intelligence: A modern approach (4th ed.). Pearson." }
    },
    {
      id: "gen-07", year: 2012,
      title: "AlexNet y el Deep Learning",
      description: "AlexNet gana el concurso ImageNet con una ventaja sin precedentes, demostrando el poder de las redes convolucionales profundas. Este momento marca el inicio de la era moderna del Deep Learning.",
      importance: "high", tags: ["deep learning", "visión artificial"],
      source: { apa: "Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks. Advances in Neural Information Processing Systems, 25." }
    },
    {
      id: "gen-08", year: 2017,
      title: "Transformers — Attention Is All You Need",
      description: "Investigadores de Google publican la arquitectura Transformer, revolucionando el procesamiento de lenguaje natural. Este trabajo es la base técnica de modelos como GPT, BERT y todos los LLMs modernos.",
      importance: "high", tags: ["transformers", "NLP"],
      source: { apa: "Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). Attention is all you need. Advances in Neural Information Processing Systems, 30." }
    },
    {
      id: "gen-09", year: 2020,
      title: "GPT-3 de OpenAI",
      description: "OpenAI lanza GPT-3 con 175 mil millones de parámetros, estableciendo un nuevo estándar en generación de lenguaje natural. Su capacidad de few-shot learning sorprendió a la comunidad científica y tecnológica global.",
      importance: "high", tags: ["LLM", "generative AI"],
      source: { apa: "Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., ... & Amodei, D. (2020). Language models are few-shot learners. Advances in Neural Information Processing Systems, 33." }
    },
    {
      id: "gen-10", year: 2022,
      title: "ChatGPT — IA para el público masivo",
      description: "OpenAI lanza ChatGPT, alcanzando 100 millones de usuarios en dos meses. Por primera vez, una herramienta de IA conversacional avanzada se vuelve accesible para el público general sin conocimientos técnicos.",
      importance: "high", tags: ["chatbots", "adopción masiva"],
      source: { apa: "OpenAI. (2023). GPT-4 technical report. arXiv:2303.08774." }
    },
    {
      id: "gen-11", year: 2023,
      title: "IA Multimodal y Agentes Autónomos",
      description: "GPT-4, Gemini y Claude emergen como modelos multimodales capaces de procesar texto, imagen y audio. Surgen los primeros agentes de IA autónomos con capacidad de planificación y ejecución de tareas complejas.",
      importance: "high", tags: ["multimodal", "agentes"],
      source: { apa: "OpenAI. (2023). GPT-4 technical report. arXiv:2303.08774." }
    },
    {
      id: "gen-12", year: 2024,
      title: "Regulación Global y Competencia entre Naciones",
      description: "La UE aprueba el AI Act, la primera legislación integral de IA del mundo. EE.UU., China y Europa intensifican su competencia por el liderazgo en IA, con inversiones masivas en chips, modelos fundacionales e infraestructura.",
      importance: "high", tags: ["regulación", "geopolítica"],
      source: { apa: "European Commission. (2024). Artificial Intelligence Act: Regulation (EU) 2024/1689. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202401689" }
    }
  ],

  usa: [
    {
      id: "usa-01", year: 1958,
      title: "DARPA financia investigación en IA",
      description: "La Agencia de Proyectos de Investigación Avanzada de Defensa (DARPA) comienza a financiar investigación en IA en el MIT y Stanford. El apoyo militar impulsa los primeros laboratorios especializados en inteligencia artificial.",
      importance: "high", tags: ["DARPA", "financiamiento"],
      source: { apa: "National Science and Technology Council. (2016). The national artificial intelligence research and development strategic plan. Executive Office of the President." }
    },
    {
      id: "usa-02", year: 1969,
      title: "Stanford AI Laboratory (SAIL)",
      description: "John McCarthy funda el Stanford Artificial Intelligence Laboratory, que se convierte en uno de los centros de investigación más influyentes del mundo. De allí surgen lenguajes como LISP y décadas de investigación fundamental.",
      importance: "high", tags: ["academia", "Stanford"],
      source: { apa: "Russell, S., & Norvig, P. (2021). Artificial intelligence: A modern approach (4th ed.). Pearson." }
    },
    {
      id: "usa-03", year: 1997,
      title: "IBM Deep Blue",
      description: "IBM desarrolla Deep Blue, la primera computadora en derrotar al campeón mundial de ajedrez en condiciones de competencia oficial. Representa el pico de los sistemas de IA simbólica financiados por la industria privada.",
      importance: "high", tags: ["IBM", "ajedrez"],
      source: { apa: "Russell, S., & Norvig, P. (2021). Artificial intelligence: A modern approach (4th ed.). Pearson." }
    },
    {
      id: "usa-04", year: 2011,
      title: "Watson gana en Jeopardy!",
      description: "IBM Watson derrota a los mejores jugadores humanos de Jeopardy!, demostrando capacidades avanzadas de comprensión del lenguaje natural y razonamiento. Marcó el inicio del interés corporativo masivo en IA aplicada.",
      importance: "high", tags: ["IBM", "NLP"],
      source: { apa: "Russell, S., & Norvig, P. (2021). Artificial intelligence: A modern approach (4th ed.). Pearson." }
    },
    {
      id: "usa-05", year: 2015,
      title: "Fundación de OpenAI",
      description: "Elon Musk, Sam Altman y otros tecnólogos fundan OpenAI como organización sin fines de lucro dedicada a la IA segura y beneficiosa para la humanidad. Sería el principal actor detrás de la revolución de los LLMs.",
      importance: "high", tags: ["OpenAI", "startups"],
      source: { apa: "OpenAI. (2023). GPT-4 technical report. arXiv:2303.08774." }
    },
    {
      id: "usa-06", year: 2016,
      title: "Plan Nacional de I+D en IA",
      description: "La administración Obama publica el primer Plan Estratégico Nacional de Investigación y Desarrollo en Inteligencia Artificial, priorizando la inversión pública en IA y sus implicaciones éticas y económicas.",
      importance: "medium", tags: ["política pública", "Obama"],
      source: { apa: "National Science and Technology Council. (2016). The national artificial intelligence research and development strategic plan. Executive Office of the President." }
    },
    {
      id: "usa-07", year: 2019,
      title: "Iniciativa Americana de IA (EO 13859)",
      description: "El presidente Trump firma la Orden Ejecutiva 13859, estableciendo la Iniciativa Americana de IA para mantener el liderazgo de EE.UU. en investigación, recursos computacionales e infraestructura de IA.",
      importance: "medium", tags: ["política pública", "Trump"],
      source: { apa: "The White House. (2019). Executive order on maintaining American leadership in artificial intelligence. Federal Register, 84(31), 3967–3972." }
    },
    {
      id: "usa-08", year: 2023,
      title: "Orden Ejecutiva sobre IA Segura",
      description: "El presidente Biden firma la Orden Ejecutiva 14110, la más amplia regulación federal de IA en EE.UU. Establece estándares de seguridad, privacidad y equidad para el desarrollo y uso de sistemas de inteligencia artificial.",
      importance: "high", tags: ["regulación", "Biden"],
      source: { apa: "The White House. (2023). Executive order on the safe, secure, and trustworthy development and use of artificial intelligence (No. 14110). https://www.whitehouse.gov/" }
    }
  ],

  ue: [
    {
      id: "ue-01", year: 1984,
      title: "Programa ESPRIT",
      description: "La Comisión Europea lanza el programa ESPRIT (European Strategic Programme for Research in Information Technology), impulsando la colaboración en IA y tecnologías de la información entre países miembros.",
      importance: "medium", tags: ["financiamiento", "investigación"],
      source: { apa: "High-Level Expert Group on AI. (2019). Ethics guidelines for trustworthy AI. European Commission." }
    },
    {
      id: "ue-02", year: 2018,
      title: "Estrategia Europea de IA",
      description: "La Comisión Europea publica su primera Estrategia de IA, comprometiendo €20 mil millones en inversión para 2020. Se posiciona en un enfoque centrado en valores humanos, ética y confianza.",
      importance: "high", tags: ["estrategia", "inversión"],
      source: { apa: "European Commission. (2018). Artificial intelligence for Europe. COM(2018) 237 final." }
    },
    {
      id: "ue-03", year: 2019,
      title: "Directrices Éticas para IA Confiable",
      description: "El Grupo de Expertos de Alto Nivel de la UE publica las 'Ethics Guidelines for Trustworthy AI', definiendo los siete requisitos clave de una IA confiable, incluyendo robustez, privacidad y no discriminación.",
      importance: "high", tags: ["ética", "regulación"],
      source: { apa: "High-Level Expert Group on AI. (2019). Ethics guidelines for trustworthy AI. European Commission." }
    },
    {
      id: "ue-04", year: 2021,
      title: "Propuesta del AI Act",
      description: "La Comisión Europea presenta la propuesta legislativa del Acto de Inteligencia Artificial (AI Act), el primer marco regulatorio integral de IA basado en niveles de riesgo a nivel mundial.",
      importance: "high", tags: ["regulación", "AI Act"],
      source: { apa: "European Commission. (2021). Proposal for a regulation on artificial intelligence (AI Act). COM/2021/206 final." }
    },
    {
      id: "ue-05", year: 2023,
      title: "Acuerdo Político sobre el AI Act",
      description: "El Parlamento Europeo y el Consejo alcanzan un acuerdo político sobre el AI Act tras extensas negociaciones. Se incluyen regulaciones específicas para sistemas de IA de propósito general (GPAI) como los LLMs.",
      importance: "high", tags: ["regulación", "parlamento"],
      source: { apa: "European Commission. (2024). Artificial Intelligence Act: Regulation (EU) 2024/1689." }
    },
    {
      id: "ue-06", year: 2024,
      title: "Publicación oficial del AI Act",
      description: "El AI Act es publicado en el Diario Oficial de la UE (Regulation 2024/1689), entrando en vigor en agosto de 2024. Es la primera ley integral de IA en el mundo, con enfoque en riesgos, derechos y transparencia.",
      importance: "high", tags: ["AI Act", "legislación"],
      source: { apa: "European Commission. (2024). Artificial Intelligence Act: Regulation (EU) 2024/1689. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202401689" }
    }
  ],

  china: [
    {
      id: "cn-01", year: 1978,
      title: "Inicio de la Informática en China",
      description: "Con la apertura económica de Deng Xiaoping, China comienza a desarrollar capacidades en ciencias de la computación. Las primeras investigaciones en IA se realizan en universidades como Tsinghua y la Academia de Ciencias China (CAS).",
      importance: "medium", tags: ["historia", "academia"],
      source: { apa: "State Council of the People's Republic of China. (2017). New generation artificial intelligence development plan. http://www.gov.cn/zhengce/content/2017-07/20/content_5211996.htm" }
    },
    {
      id: "cn-02", year: 2006,
      title: "Plan de Medio y Largo Plazo en C&T",
      description: "China lanza su Plan Nacional de Ciencia y Tecnología 2006–2020, que identifica la IA como área prioritaria. Comienza una inversión sostenida en talento científico y laboratorios de investigación estatales.",
      importance: "medium", tags: ["planificación", "estado"],
      source: { apa: "State Council of the People's Republic of China. (2017). New generation artificial intelligence development plan." }
    },
    {
      id: "cn-03", year: 2017,
      title: "Plan Nacional de IA de Nueva Generación",
      description: "El Consejo de Estado publica el 'New Generation AI Development Plan', con el objetivo explícito de que China sea el líder mundial en IA para 2030. Establece metas escalonadas para 2020, 2025 y 2030 con inversión masiva del Estado.",
      importance: "high", tags: ["planificación estatal", "liderazgo global"],
      source: { apa: "State Council of the People's Republic of China. (2017). New generation artificial intelligence development plan. http://www.gov.cn/zhengce/content/2017-07/20/content_5211996.htm" }
    },
    {
      id: "cn-04", year: 2019,
      title: "Principios de Gobernanza de IA",
      description: "China publica sus 'Principios de Gobernanza de IA', promoviendo una IA 'armoniosa' alineada con valores nacionales. Empresas como Baidu, Alibaba y Tencent son designadas como campeones nacionales de IA.",
      importance: "high", tags: ["gobernanza", "BAT"],
      source: { apa: "National Governance Committee for New Generation AI. (2019). Governance principles for new generation artificial intelligence. Beijing." }
    },
    {
      id: "cn-05", year: 2022,
      title: "Regulación de IA Generativa",
      description: "China implementa regulaciones específicas para algoritmos de recomendación y contenido generado por IA, siendo uno de los primeros países en regular activamente los sistemas de IA generativa. Refleja el control estatal sobre la información digital.",
      importance: "high", tags: ["regulación", "generative AI"],
      source: { apa: "Cyberspace Administration of China. (2022). Provisions on the management of algorithmic recommendations." }
    },
    {
      id: "cn-06", year: 2023,
      title: "Ernie Bot y la Carrera China de LLMs",
      description: "Baidu lanza Ernie Bot, el primer LLM chino de escala masiva para el público. Le siguen más de 70 modelos de lenguaje desarrollados por empresas chinas, evidenciando la profundidad del ecosistema tecnológico del país.",
      importance: "high", tags: ["LLM", "Baidu"],
      source: { apa: "State Council of the People's Republic of China. (2017). New generation artificial intelligence development plan." }
    }
  ],

  latam: [
    {
      id: "lat-01", year: 1987,
      title: "Primeros Sistemas Expertos en Uruguay",
      description: "La Facultad de Ingeniería de la Universidad de la República (UdelaR) inicia investigaciones en sistemas expertos y lógica computacional. Se forman los primeros grupos académicos enfocados en IA en el país.",
      importance: "medium", tags: ["academia", "Uruguay"],
      source: { apa: "Comisión Económica para América Latina y el Caribe (CEPAL). (2021). Perspectivas de la inteligencia artificial en América Latina. Naciones Unidas." }
    },
    {
      id: "lat-02", year: 2007,
      title: "Plan Ceibal — Uruguay",
      description: "Uruguay lanza el Plan Ceibal, el primer programa de un laptop por niño implementado a escala nacional en el mundo. Sienta la infraestructura digital que habilitará futuras iniciativas de alfabetización tecnológica e IA educativa.",
      importance: "high", tags: ["educación", "Uruguay", "digital"],
      source: { apa: "Plan Ceibal. (2007). Un computador por niño. Presidencia de la República Oriental del Uruguay." }
    },
    {
      id: "lat-03", year: 2018,
      title: "Foro Regional de IA — América Latina",
      description: "La CEPAL organiza las primeras mesas de diálogo regionales sobre IA en América Latina, identificando brechas en capacidades digitales y oportunidades para el desarrollo sostenible impulsado por inteligencia artificial.",
      importance: "medium", tags: ["CEPAL", "regional"],
      source: { apa: "CEPAL. (2021). Perspectivas de la inteligencia artificial en América Latina. Naciones Unidas." }
    },
    {
      id: "lat-04", year: 2019,
      title: "Estrategia Nacional de IA — Uruguay",
      description: "AGESIC publica la primera Estrategia de Inteligencia Artificial para el Gobierno Digital de Uruguay, posicionándolo como el primer país de la región con una política pública integral de IA orientada a la transformación del Estado.",
      importance: "high", tags: ["AGESIC", "Uruguay", "política pública"],
      source: { apa: "AGESIC. (2019). Estrategia de inteligencia artificial para el gobierno digital. Presidencia de la República Oriental del Uruguay. https://www.gub.uy/" }
    },
    {
      id: "lat-05", year: 2021,
      title: "Agenda Digital para América Latina y el Caribe",
      description: "Los países miembros de la CEPAL adoptan la Agenda Digital 2022–2026, que incluye IA como componente estratégico para la recuperación post-pandemia y el desarrollo sostenible regional.",
      importance: "medium", tags: ["agenda digital", "regional"],
      source: { apa: "CEPAL. (2021). Perspectivas de la inteligencia artificial en América Latina. Naciones Unidas." }
    },
    {
      id: "lat-06", year: 2023,
      title: "Uruguay — Laboratorio de IA en el Sector Público",
      description: "Uruguay consolida el uso de herramientas de IA en trámites gubernamentales y salud pública, siendo reconocido por el Banco Mundial como modelo de gobierno digital en la región. El país lidera en índices de preparación para IA en Latinoamérica.",
      importance: "high", tags: ["gobierno digital", "Uruguay", "liderazgo"],
      source: { apa: "AGESIC. (2019). Estrategia de inteligencia artificial para el gobierno digital. Presidencia de la República Oriental del Uruguay." }
    }
  ],

  venezuela: [
    {
      id: "ven-01", year: 1984,
      title: "Sistemas Expertos en la USB y UCV",
      description: "La Universidad Simón Bolívar (USB) y la Universidad Central de Venezuela (UCV) desarrollan los primeros proyectos de sistemas expertos en el país, principalmente en áreas de diagnóstico médico y planificación de recursos.",
      importance: "medium", tags: ["academia", "sistemas expertos"],
      source: { apa: "Repositorios digitales de la Universidad Central de Venezuela (UCV) y la Universidad Simón Bolívar (USB). (1984–1995). Colección de papers sobre sistemas expertos." }
    },
    {
      id: "ven-02", year: 1992,
      title: "Laboratorio de Inteligencia Artificial — USB",
      description: "La Universidad Simón Bolívar formaliza su Laboratorio de Inteligencia Artificial, produciendo investigaciones en procesamiento de lenguaje natural y robótica. Fue durante décadas el principal centro de excelencia en IA del país.",
      importance: "high", tags: ["USB", "laboratorio"],
      source: { apa: "Ojeda, L. (1995). Sistemas expertos y su aplicación en Venezuela. Revista de la Facultad de Ingeniería, UCV, 10(2), 45–58." }
    },
    {
      id: "ven-03", year: 2005,
      title: "CENAMEC y Tecnología Educativa",
      description: "El Centro Nacional para el Mejoramiento de la Enseñanza de la Ciencia (CENAMEC) incorpora herramientas computacionales en educación. El interés por la IA aplicada a la educación crece en el ámbito académico venezolano.",
      importance: "low", tags: ["educación", "estado"],
      source: { apa: "CEPAL. (2021). Perspectivas de la inteligencia artificial en América Latina. Naciones Unidas." }
    },
    {
      id: "ven-04", year: 2015,
      title: "Crisis y Fuga de Talentos en IA",
      description: "La crisis económica y política provoca la emigración masiva de investigadores y profesionales de tecnología venezolanos. Muchos expertos en IA formados en la USB y UCV continúan sus carreras en EE.UU., Europa y América Latina.",
      importance: "high", tags: ["crisis", "diáspora"],
      source: { apa: "Observatorio de Conectividad e Innovación Digital de Venezuela. (2023). Informe de adopción de herramientas de IA en el sector privado venezolano." }
    },
    {
      id: "ven-05", year: 2020,
      title: "Adopción Informal de IA — Economía Freelance",
      description: "A pesar del contexto adverso, Venezuela muestra una alta adopción informal de herramientas de IA como ChatGPT y GitHub Copilot en el sector de desarrollo de software freelance orientado a exportación. La dolarización y el trabajo remoto impulsan esta tendencia.",
      importance: "high", tags: ["adopción", "freelance", "informal"],
      source: { apa: "Observatorio de Conectividad e Innovación Digital de Venezuela. (2023). Informe de adopción de herramientas de IA en el sector privado venezolano." }
    }
  ]
};

export const CATEGORIES = [
  { id: "general", label: "Visión General", color: "#6C63FF", emoji: "🌐" },
  { id: "usa",     label: "Estados Unidos", color: "#3B82F6", emoji: "🇺🇸" },
  { id: "ue",      label: "Unión Europea",  color: "#0EA5E9", emoji: "🇪🇺" },
  { id: "china",   label: "China",          color: "#EF4444", emoji: "🇨🇳" },
  { id: "latam",   label: "Latinoamérica / Uruguay", color: "#10B981", emoji: "🇺🇾" },
  { id: "venezuela", label: "Venezuela",    color: "#F59E0B", emoji: "🇻🇪" },
];
