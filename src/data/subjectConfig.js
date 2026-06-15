// src/data/subjectConfig.js
export const subjectConfig = {
  sociales: {
    label: 'Estudios Sociales',
    icon: '🌍',
    accent: '#10B981',
    bloques: [
      { id: 'geografia-historia', label: 'Geografía e Historia', icon: '🗺️', color: '#0284c7' },
      { id: 'educacion-civica',   label: 'Educación Cívica',     icon: '🏛️', color: '#7c3aed' },
    ],
  },
  ciencias: {
    label: 'Ciencias',
    icon: '🔬',
    accent: '#3B82F6',
    bloques: [
      { id: 'cuerpo-humano', label: 'Cuerpo Humano', icon: '🧬', color: '#0284c7' },
      { id: 'biodiversidad', label: 'Biodiversidad', icon: '🌿', color: '#16a34a' },
      { id: 'energia',       label: 'Energía',        icon: '⚡', color: '#d97706' },
      { id: 'geofisica',     label: 'Geofísica',      icon: '🌍', color: '#7c3aed' },
    ],
  },
  espanol: {
    label: 'Español',
    icon: '📖',
    accent: '#F59E0B',
    bloques: [
      { id: 'comprension-lectora', label: 'Comprensión Lectora',            icon: '📖', color: '#0284c7' },
      { id: 'produccion-escrita',  label: 'Producción de Texto Expositivo', icon: '✏️', color: '#d97706' },
    ],
  },
  matematicas: {
    label: 'Matemática',
    icon: '🔢',
    accent: '#EF4444',
    bloques: [
      { id: 'numeros',     label: 'Números',                    icon: '🔢', color: '#0284c7' },
      { id: 'geometria',   label: 'Geometría',                  icon: '📐', color: '#16a34a' },
      { id: 'medidas',     label: 'Medidas',                    icon: '📏', color: '#d97706' },
      { id: 'algebra',     label: 'Relaciones y Álgebra',       icon: '🔣', color: '#7c3aed' },
      { id: 'estadistica', label: 'Estadística y Probabilidad', icon: '📊', color: '#dc2626' },
    ],
  },
};
