/**
 * seedNicknames.js
 * =================
 * Source list of preset nicknames, each { name, emoji }.
 *
 * - The emoji is displayed in the picker UI only.
 * - Only `name` (without emoji) is saved as the user's account nickname.
 * - Used by Register.jsx as the picker fallback, and by scripts/seed.mjs to
 *   populate the Supabase `nicknames` table.
 */

export const NICKNAMES_SEED = [
  // ⛏️ Minecraft / Builders
  { emoji: "⛏️", name: "BlockBuilder" },
  { emoji: "💎", name: "DiamondDigger" },
  { emoji: "🧱", name: "CubeCrafter" },
  { emoji: "🔥", name: "LavaMiner" },
  { emoji: "🟢", name: "EmeraldHunter" },
  { emoji: "⚙️", name: "RedstoneWizard" },
  { emoji: "🏗️", name: "SkyBuilder" },
  { emoji: "🪨", name: "StoneExplorer" },
  { emoji: "💣", name: "TNTMaster" },
  { emoji: "🏔️", name: "CaveAdventurer" },
  { emoji: "🧱", name: "PixelCrafter" },
  { emoji: "⚒️", name: "IronCrafter" },
  { emoji: "🏹", name: "BlockRanger" },
  { emoji: "🌋", name: "LavaKnight" },
  { emoji: "🏗️", name: "MegaBuilder" },

  // 🎮 Gamer
  { emoji: "🎮", name: "GameMaster" },
  { emoji: "🕹️", name: "PixelPlayer" },
  { emoji: "🌍", name: "WorldCreator" },
  { emoji: "🎲", name: "FunArchitect" },
  { emoji: "🚀", name: "LevelExplorer" },
  { emoji: "🎯", name: "QuestHero" },
  { emoji: "🏆", name: "XPChampion" },
  { emoji: "🎮", name: "TurboPlayer" },
  { emoji: "🎨", name: "DreamBuilder" },
  { emoji: "🗺️", name: "MapExplorer" },
  { emoji: "🎮", name: "EpicMaker" },
  { emoji: "⚡", name: "SpeedRunner" },
  { emoji: "🎮", name: "VictoryKid" },
  { emoji: "🎲", name: "AdventureMaker" },
  { emoji: "🎮", name: "PixelLegend" },

  // ⚡ Action / Battle
  { emoji: "⚡", name: "StormRider" },
  { emoji: "🚀", name: "RocketRanger" },
  { emoji: "🔥", name: "BlazeWarrior" },
  { emoji: "⚔️", name: "BattleNinja" },
  { emoji: "🏹", name: "VictoryHunter" },
  { emoji: "💥", name: "PowerBlaster" },
  { emoji: "🌩️", name: "ThunderChampion" },
  { emoji: "⚡", name: "FlashRunner" },
  { emoji: "🚁", name: "JetpackHero" },
  { emoji: "🛡️", name: "MegaGuardian" },
  { emoji: "⚡", name: "SpeedFighter" },
  { emoji: "🔥", name: "FireChampion" },
  { emoji: "🏆", name: "EpicWarrior" },
  { emoji: "⚡", name: "TurboFighter" },
  { emoji: "💥", name: "StormChampion" },

  // 🚀 Space
  { emoji: "🚀", name: "AstroKid" },
  { emoji: "🌌", name: "GalaxyExplorer" },
  { emoji: "⭐", name: "StarVoyager" },
  { emoji: "🛰️", name: "OrbitPilot" },
  { emoji: "☄️", name: "MeteorRunner" },
  { emoji: "🌙", name: "MoonWalker" },
  { emoji: "🪐", name: "PlanetRider" },
  { emoji: "🚀", name: "RocketPilot" },
  { emoji: "🌟", name: "CosmicHero" },
  { emoji: "🛸", name: "SpaceRanger" },
  { emoji: "🌠", name: "StarChaser" },
  { emoji: "🚀", name: "AstroExplorer" },
  { emoji: "🌌", name: "GalaxyHero" },
  { emoji: "⭐", name: "NovaPilot" },
  { emoji: "☄️", name: "CometRunner" },

  // 🐲 Fantasy / Magic
  { emoji: "🐲", name: "DragonRider" },
  { emoji: "🧙", name: "MagicWizard" },
  { emoji: "⚔️", name: "MysticKnight" },
  { emoji: "🔥", name: "FirePhoenix" },
  { emoji: "❄️", name: "FrostMage" },
  { emoji: "🌪️", name: "StormDragon" },
  { emoji: "🏹", name: "SilverArcher" },
  { emoji: "💎", name: "CrystalHero" },
  { emoji: "🌟", name: "GoldenKnight" },
  { emoji: "🧙", name: "PixelWizard" },
  { emoji: "🔥", name: "LavaDragon" },
  { emoji: "🌬️", name: "WindWarrior" },
  { emoji: "❄️", name: "IceChampion" },
  { emoji: "🐉", name: "SkyDragon" },
  { emoji: "⚔️", name: "ShadowKnight" },

  // 🐼 Animals
  { emoji: "🐼", name: "NinjaPanda" },
  { emoji: "🐯", name: "TurboTiger" },
  { emoji: "🦊", name: "RocketFox" },
  { emoji: "🐧", name: "PixelPenguin" },
  { emoji: "🐨", name: "CoolKoala" },
  { emoji: "🐰", name: "BraveBunny" },
  { emoji: "🦦", name: "EpicOtter" },
  { emoji: "🐱", name: "CyberCat" },
  { emoji: "🐹", name: "NinjaHamster" },
  { emoji: "🦙", name: "RocketLlama" },
  { emoji: "🐼", name: "PowerPanda" },
  { emoji: "🦊", name: "NeonFox" },
  { emoji: "🐯", name: "StormTiger" },
  { emoji: "🐧", name: "SpacePenguin" },
  { emoji: "🐨", name: "PixelKoala" },

  // 🤖 Tech / Coding
  { emoji: "🤖", name: "RoboCoder" },
  { emoji: "💻", name: "CodeNinja" },
  { emoji: "🧠", name: "LogicMaster" },
  { emoji: "📡", name: "DataExplorer" },
  { emoji: "🧑‍💻", name: "DebugHero" },
  { emoji: "⚙️", name: "ByteBuilder" },
  { emoji: "🤖", name: "AIExplorer" },
  { emoji: "💾", name: "PixelCoder" },
  { emoji: "🧑‍💻", name: "CodePilot" },
  { emoji: "🔬", name: "TechWizard" },

  // 🌟 Legends
  { emoji: "🔥", name: "BlazeKid" },
  { emoji: "⚡", name: "ThunderSpark" },
  { emoji: "🌟", name: "CosmicChampion" },
  { emoji: "🚀", name: "SpeedVoyager" },
  { emoji: "⚡", name: "PowerSpark" },
  { emoji: "🌈", name: "NeonHero" },
  { emoji: "🏆", name: "MegaChampion" },
  { emoji: "⚡", name: "FlashHero" },
  { emoji: "🌟", name: "EpicExplorer" },
  { emoji: "🚀", name: "TurboVoyager" },
];
