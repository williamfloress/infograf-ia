export const comparativeData = {
  decades: ["1950s", "1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"],
  categories: ["general", "usa", "ue", "china", "latam", "venezuela"],
  labels: {
    general:   "Visión General",
    usa:       "Estados Unidos",
    ue:        "Unión Europea",
    china:     "China",
    latam:     "Latinoamérica / Uruguay",
    venezuela: "Venezuela",
  },
  colors: {
    general:   "#6C63FF",
    usa:       "#3B82F6",
    ue:        "#0EA5E9",
    china:     "#EF4444",
    latam:     "#10B981",
    venezuela: "#F59E0B",
  },
  // Activity intensity per decade per category (0=none, 1=low, 2=medium, 3=high)
  activity: {
    general:   [3, 2, 1, 2, 2, 2, 3, 3],
    usa:       [3, 2, 1, 2, 2, 2, 3, 3],
    ue:        [0, 0, 0, 1, 1, 1, 2, 3],
    china:     [0, 0, 1, 1, 1, 2, 2, 3],
    latam:     [0, 0, 0, 1, 1, 2, 2, 3],
    venezuela: [0, 0, 0, 2, 2, 1, 1, 2],
  },
  conclusions: [
    {
      title: "Asimetría en el liderazgo global",
      text: "Estados Unidos lideró la investigación en IA desde su fundación en 1956 hasta la actualidad, impulsado por la combinación única de capital de riesgo privado, grandes universidades y agencias de defensa como DARPA. China, aunque llegó después, ha logrado la convergencia más rápida de la historia mediante planificación estatal centralizada, mientras que la UE optó por diferenciarse en regulación y ética antes que en innovación técnica bruta."
    },
    {
      title: "El modelo europeo: regulación como liderazgo",
      text: "La Unión Europea reconoció su desventaja competitiva en el desarrollo de modelos fundacionales y apostó por exportar un modelo normativo. El AI Act (2024) es la primera legislación integral de IA del mundo y ya sirve de referencia para otras jurisdicciones. Este enfoque, aunque criticado por frenar la innovación, posiciona a Europa como árbitro global de los estándares éticos de la IA."
    },
    {
      title: "Latinoamérica: Uruguay como excepción regional",
      text: "América Latina enfrenta brechas significativas en infraestructura computacional, talento especializado y financiamiento en IA. Uruguay representa la excepción: su madurez institucional (Plan Ceibal 2007, estrategia AGESIC 2019) y su estabilidad política lo convierten en el caso de estudio más avanzado de la región. El resto de la región permanece en etapas tempranas de adopción, con dependencia de soluciones externas."
    },
    {
      title: "Venezuela: conocimiento sin ecosistema",
      text: "Venezuela posee una tradición académica sólida en IA —la USB y UCV generaron investigación de calidad hasta los años 2000— pero la crisis estructural post-2015 diezmó ese capital humano mediante la emigración masiva. Paradójicamente, la adopción informal de herramientas de IA generativa en el sector freelance muestra una resiliencia tecnológica notable, desconectada de cualquier política pública o apoyo institucional."
    },
    {
      title: "Convergencia hacia la era de los LLMs (2020–2026)",
      text: "La irrupción de ChatGPT en 2022 marcó un punto de inflexión global: por primera vez, todas las regiones —con distintos niveles de madurez— se enfrentan simultáneamente al mismo desafío de adopción, regulación e integración social de la IA generativa. La brecha ya no es solo técnica, sino también de gobernanza, equidad de acceso y soberanía sobre los datos y modelos."
    }
  ]
};
