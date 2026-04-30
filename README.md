# Historia de la Inteligencia Artificial — Infografía Interactiva

![Vista previa del proyecto](https://img.shields.io/badge/Estado-Completado-success) ![React](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-5-purple) ![APA](https://img.shields.io/badge/Normas-APA_7%C2%AA_ed-orange)

Una infografía web interactiva que explora la historia y evolución de la Inteligencia Artificial desde 1950 hasta la actualidad, analizada desde **6 perspectivas globales y regionales** distintas. 

Este proyecto fue desarrollado con fines académicos e informativos por la Universidad de Oriente (Guatamare, 2026) para la materia de Introducción a la IA, manteniendo un riguroso estándar de citación utilizando las **Normas APA 7ª edición**.

## Perspectivas Analizadas

La infografía divide la historia en 6 categorías interactivas:

1. **Visión General**: Hitos fundamentales de la tecnología y la teoría computacional (Test de Turing, ELIZA, Deep Learning, LLMs).
2. **Estados Unidos**: El desarrollo impulsado por el sector privado, el capital de riesgo y la academia (OpenAI, IBM, Stanford, DARPA).
3. **Unión Europea**: El enfoque centrado en la ética, la privacidad y la creación del primer marco regulatorio global (AI Act).
4. **China**: El ascenso planificado desde el Estado para alcanzar la soberanía y el liderazgo tecnológico global.
5. **Latinoamérica / Uruguay**: Análisis de los desafíos regionales, destacando a Uruguay como pionero en gobierno digital e implementación de estrategias estatales de IA.
6. **Venezuela**: El auge de los sistemas expertos universitarios en los años 80 y 90, contrastado con la adopción actual impulsada por la economía freelance a pesar de los desafíos estructurales.

Adicionalmente, el proyecto incluye un **Panel de Datos Comparativo** al final del recorrido que evalúa el nivel de actividad e inversión por décadas, acompañado de conclusiones cualitativas.

## Características y Experiencia de Usuario (UX/UI)

- **Globo Terráqueo 3D Interactivo**: Navegación principal a través de un globo 3D renderizado dinámicamente (`react-simple-maps`). El usuario puede rotar la tierra con el ratón o la pantalla táctil y seleccionar las distintas regiones para filtrar la línea de tiempo de forma inmersiva.
- **Línea de Tiempo Tipo Acordeón**: Las tarjetas de los eventos mantienen una interfaz limpia alineada en el centro. Al hacer clic en el año, la información profunda (descripción, imágenes históricas y citas APA) se expande de manera fluida desplazando el contenido inferior.
- **Optimización Móvil (Mobile-First)**: El panel del mapa 3D se transforma automáticamente en un menú lateral deslizable en dispositivos móviles. Cuenta con un botón flotante dinámico (FAB) para facilitar la exploración táctil sin obstruir la lectura.
- **Sistema Gráfico Dinámico**: Contenedores de imágenes que se adaptan proporcionalmente (`object-fit: contain`) y asignación inteligente de iconos vectoriales (`lucide-react`) según las etiquetas temáticas de cada evento histórico.
- **Estética "Dark Theme" Premium**: Paleta de colores sobria y editorial, diseñada para resaltar la legibilidad del texto, evitar fatiga visual y destacar las fotografías de archivo.

## Arquitectura Técnica

- **Framework**: React + Vite (Despliegue estático ultra rápido).
- **Estilos**: CSS puro (Vanilla) con variables y tokens. Flexbox y CSS Grid avanzados sin dependencias externas para garantizar el máximo control sobre animaciones y posicionamiento absoluto en la línea de tiempo.
- **Bibliotecas Clave**: 
  - `react-simple-maps` (Geometría y proyección ortográfica 3D).
  - `lucide-react` (Iconografía moderna y consistente).

## Instalación Local

Si deseas ejecutar este proyecto en tu propia máquina:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/williamfloress/infograf-ia.git
   ```
2. Navega al directorio:
   ```bash
   cd info-IA
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Créditos

**Universidad de Oriente, Guatamare 2026 — Introducción a la IA.**  
Desarrollado para propósitos académicos y de difusión tecnológica. Todos los textos e hitos históricos han sido redactados originalmente basados en la literatura referenciada en la propia aplicación.
