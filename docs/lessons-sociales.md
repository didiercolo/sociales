# Estudios Sociales — Lecciones planas

**Sources:** grade4.js (1 lesson), grade5.js (11 lessons), grade6.js (6 lessons), resumen.js (1 lesson)  
**Total:** 19 lessons

**Slug rule:** Strip `"Lección N: "` prefix → lowercase → hyphens → remove accents (á→a, é→e, í→i, ó→o, ú→u, ñ→n) → remove punctuation except hyphens.

---

## Bloque: Geografía e Historia (`geografia-historia`)

Lessons about geography, maps, physical features, pre-Columbian history, colonial era, independence, national campaigns, political/economic history.

| # | slug | title (original) | source |
|---|------|-----------------|--------|
| 1 | `costa-rica-y-su-geografia` | "Lección 1: Costa Rica y su Geografía" | grade4 id:1 |
| 2 | `historia-antigua-de-costa-rica` | "Lección 1: Historia antigua de Costa Rica" | grade5 id:1 |
| 3 | `etnias-de-la-costa-rica-antigua` | "Lección 2: Etnias de la Costa Rica antigua" | grade5 id:2 |
| 4 | `el-momento-del-contacto-colon` | "Lección 5: El momento del contacto (Colón)" | grade5 id:5 |
| 5 | `la-sociedad-colonial` | "Lección 6: La sociedad colonial" | grade5 id:6 |
| 6 | `causas-de-la-independencia` | "Lección 7: Causas de la independencia" | grade5 id:7 |
| 7 | `la-libertad-politica-de-costa-rica` | "Lección 8: La libertad política de Costa Rica" | grade5 id:8 |
| 8 | `la-anexion-del-partido-de-nicoya` | "Lección 9: La anexión del Partido de Nicoya" | grade5 id:9 |
| 9 | `banco-de-preguntas-g5` | "Lección 11: Banco de Preguntas Completo" | grade5 id:11 |
| 10 | `la-campana-nacional-de-costa-rica` | "Lección 1: La Campaña Nacional de Costa Rica (1856-1857)" | grade6 id:1 |
| 11 | `el-estado-liberal-y-los-suenos-de-progreso` | "Lección 2: El Estado Liberal y los Sueños de Progreso" | grade6 id:2 |
| 12 | `el-estado-social-y-las-reformas-de-1940` | "Lección 3: El Estado Social y las Reformas de 1940" | grade6 id:3 |
| 13 | `la-guerra-civil-de-1948` | "Lección 4: La Guerra Civil de 1948" | grade6 id:4 |
| 14 | `resumen-general-completo` | "Resumen General Completo" | resumen id:1 |

---

## Bloque: Educación Cívica (`educacion-civica`)

Lessons about indigenous rights/current situation, intercultural society, national symbols, citizenship, and current civic challenges.

| # | slug | title (original) | source |
|---|------|-----------------|--------|
| 15 | `situacion-actual-de-los-pueblos-originarios` | "Lección 3: Situación actual de los pueblos originarios" | grade5 id:3 |
| 16 | `costa-rica-sociedad-intercultural` | "Lección 4: Costa Rica, sociedad intercultural" | grade5 id:4 |
| 17 | `los-simbolos-nacionales` | "Lección 10: Los símbolos nacionales" | grade5 id:10 |
| 18 | `ciudadania-y-desafios-actuales` | "Lección 5: Ciudadanía y Desafíos Actuales" | grade6 id:5 |
| 19 | `banco-de-preguntas-g6` | "Lección 6: Banco de Preguntas Completo (6°)" | grade6 id:6 |

---

## Notes

- `banco-de-preguntas-g5` and `banco-de-preguntas-g6` are question-bank lessons (large `quiz[]` arrays, minimal `sections[]`). They are useful for exam practice. Included under their dominant content bloque.
- `resumen-general-completo` (resumen.js) is a comprehensive review lesson with `questionCount: 20`. Included as the final lesson under `geografia-historia`.
- grade5 id:11 section titles reference "Taller" exercises — these are contained within the lesson's `sections[]` and will be preserved as-is.
- All numeric `id` values will become the string slugs listed above.
