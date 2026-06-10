# Plan: Integración MEP Pruebas Estandarizadas 2026 en EduPortal CR

**Referencia de contenido:** [`mep-pruebas-estandarizadas-2026.md`](./mep-pruebas-estandarizadas-2026.md)  
**Alcance actual:** Primaria únicamente (grados 4–6)

---

## Contexto

EduPortal CR cubre primaria (grados 4–6) con lecciones estáticas en `src/data/lessons/`. Las Pruebas Nacionales Estandarizadas del MEP son el referente curricular oficial — alinear la plataforma con sus bloques le da valor institucional directo y orienta qué aprender y cómo será evaluado.

**Asignaturas de primaria en scope:**
- Estudios Sociales (Bloque 1: Geografía e Historia / Bloque 2: Educación Cívica)
- Ciencias (4 bloques)
- Español (Comprensión Lectora + Producción de Texto Expositivo)
- Matemática (5 bloques)

---

## Fase 1 — Etiquetado MEP en contenido existente

### Objetivo
Mapear los `quiz[]` de las lecciones actuales a los bloques MEP para que los estudiantes vean qué bloque están practicando.

### Cambio en estructura de datos

Agregar campo `mepBloque` (opcional) a cada objeto `quiz[]` en `src/data/lessons/`:

```js
// src/data/lessons/sociales.js — ejemplo
{
  id: "geo-1",
  question: "¿Cuál es...?",
  options: ["A", "B", "C", "D"],
  answer: "B",
  mepBloque: "primaria-sociales-bloque1",   // ← nuevo campo opcional
}
```

### Constantes de bloques — `src/data/mepBloques.js` (archivo nuevo)

```js
export const MEP_BLOQUES = {
  "primaria-sociales-bloque1": "Geografía e Historia",
  "primaria-sociales-bloque2": "Educación Cívica",
  "primaria-ciencias-bloque1": "Cuerpo Humano",
  "primaria-ciencias-bloque2": "Biodiversidad",
  "primaria-ciencias-bloque3": "Energía",
  "primaria-ciencias-bloque4": "Geofísica",
  "primaria-espanol-comprension": "Comprensión Lectora",
  "primaria-espanol-produccion": "Producción de Texto Expositivo",
  "primaria-mate-numeros": "Números",
  "primaria-mate-geometria": "Geometría",
  "primaria-mate-medidas": "Medidas",
  "primaria-mate-algebra": "Relaciones y Álgebra",
  "primaria-mate-estadistica": "Estadística y Probabilidad",
};
```

### Archivos a tocar
| Archivo | Cambio |
|---------|--------|
| `src/data/lessons/sociales.js` | Agregar `mepBloque` a cada ítem de quiz |
| `src/data/lessons/ciencias.js` | Agregar `mepBloque` a cada ítem de quiz |
| `src/data/lessons/espanol.js` | Agregar `mepBloque` a cada ítem de quiz |
| `src/data/lessons/matematicas.js` | Agregar `mepBloque` a cada ítem de quiz |
| `src/data/mepBloques.js` | Crear archivo nuevo con el mapa de bloques |
| `src/components/Quiz/QuizActive.jsx` | Mostrar badge del bloque (opcional, cosmético) |

**Riesgo:** Ninguno — campo opcional, no rompe nada existente.

---

## Fase 2 — Modo Simulacro MEP (Primaria)

### Objetivo
Sesión cronometrada de 60 preguntas que simula la prueba sumativa real del MEP para primaria.

### Ruta nueva
```
/simulacro/:subject
```
Ejemplos: `/simulacro/sociales`, `/simulacro/ciencias`, `/simulacro/espanol`, `/simulacro/matematicas`

### Componente `<Simulacro>`

**Flujo de 3 pantallas:**

1. **`SimulacroStart`** — muestra asignatura, 60 preguntas, 120 minutos, formato selección única, bloques que cubre. Botón "Comenzar".
2. **`SimulacroActive`** — barra de progreso (ítem X de 60), temporizador regresivo (120:00→0:00), pregunta con 4 opciones. Botón "Siguiente" habilitado solo al seleccionar una opción.
3. **`SimulacroResults`** — puntaje (X/60), desglose por bloque MEP, tiempo utilizado. Opción de revisar respuestas.

### Lógica de preguntas
- Extraer todos los `quiz[]` con `mepBloque` definido de `lessonsData[subject]` (todos los grados)
- Mezclar aleatoriamente y samplear 60 (o todos si hay menos)
- Agrupación por bloque para el desglose en resultados

### Temporizador
```js
// useEffect con setInterval — guardar en sessionStorage para sobrevivir re-renders
useEffect(() => {
  const interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
  return () => clearInterval(interval);
}, []);
```

### Puntos Firebase
El simulacro es **local** (no envía a Firebase) — es práctica libre, sin límites de tier. Los quizzes regulares de lección mantienen `submitAnswer` como hoy.

### Archivos a crear
| Archivo | Descripción |
|---------|-------------|
| `src/pages/Simulacro.jsx` | Página principal, maneja estado (start/active/results) |
| `src/components/Simulacro/SimulacroStart.jsx` | Pantalla de inicio |
| `src/components/Simulacro/SimulacroActive.jsx` | Pregunta + temporizador + barra progreso |
| `src/components/Simulacro/SimulacroResults.jsx` | Puntaje + desglose por bloque |

### Ruta en `App.jsx`
```jsx
<Route path="/simulacro/:subject" element={<Simulacro />} />
```

---

## Fase 3 — Soporte Español: Producción de Texto Expositivo

### Objetivo
Practicar la Parte 2 de Español (50% de la nota) usando el `<TextQuiz>` existente, con la rúbrica MEP visible antes del prompt.

### Estructura del ítem en `src/data/lessons/espanol.js`

```js
openQuestions: [
  {
    id: "prod-1",
    mepBloque: "primaria-espanol-produccion",
    mepTipo: "expositivo",          // ← activa display de rúbrica MEP
    prompt: "Escribe un texto expositivo sobre la importancia del agua para la vida.",
    rubrica: {
      estructura: "4 párrafos: introducción, 2 desarrollo, conclusión",
      extension: "Mínimo 200 palabras",
      tiempo: "90 minutos",
      criterios: [
        "Claridad y coherencia de ideas",
        "Vocabulario apropiado al tema",
        "Ortografía y puntuación",
        "Estructura completa del texto",
      ],
    },
  },
]
```

### Cambio en `TextQuiz.jsx`
Cuando el ítem tiene `mepTipo`, mostrar un panel informativo antes del área de escritura:

```jsx
{question.mepTipo && (
  <div className="mep-rubrica">
    <h4>Rúbrica MEP — {question.rubrica.estructura}</h4>
    <p>Extensión: {question.rubrica.extension} · Tiempo: {question.rubrica.tiempo}</p>
    <ul>{question.rubrica.criterios.map(c => <li key={c}>{c}</li>)}</ul>
  </div>
)}
```

---

## Fase 4 — Página de Información MEP Primaria

### Objetivo
Página informativa donde el estudiante ve exactamente cómo será su prueba: asignaturas, bloques, cantidad de ítems, formato.

### Ruta
```
/prueba-mep
```

### Contenido
- Info general (120 min, 60 preguntas, selección única A/B/C/D)
- Acordeón por asignatura con sus bloques y descripción
- Para Español: explicación de las dos partes (50% / 50%)
- Botón "Practicar simulacro" por asignatura → `/simulacro/:subject`

---

## Orden de implementación

| Fase | Esfuerzo | Impacto | Dependencia |
|------|----------|---------|-------------|
| 1 — Etiquetado MEP en datos | Bajo | Medio | Ninguna |
| 2 — Simulacro | Medio | Alto | Fase 1 |
| 3 — Español producción + rúbrica | Bajo | Medio | Ninguna |
| 4 — Página info MEP | Bajo | Medio | Ninguna |

Empezar por **Fase 1** — habilita el simulacro y no toca componentes. Fases 3 y 4 son independientes y pueden hacerse en paralelo.

---

## Fuera de scope por ahora
- Secundaria (bachillerato) — 5 asignaturas con bloques propios
- Educación Cívica como asignatura independiente (solo aplica en secundaria)
- Integración de puntaje del simulacro con Firebase/tier system
