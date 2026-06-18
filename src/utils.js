export const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

export const formatDate = (dateStr) => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('es-CR', { day: 'numeric', month: 'long' });
};

const TIERS = {
  4: { name: 'Maestro', icon: '👑', color: '#fbbf24' },
  3: { name: 'Especialista', icon: '💎', color: '#60a5fa' },
  2: { name: 'Aventurero', icon: '⚔️', color: '#f87171' },
  1: { name: 'Explorador', icon: '🗺️', color: '#94a3b8' },
};
export const getTierInfo = (tier) => TIERS[tier] || TIERS[1];

export const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
