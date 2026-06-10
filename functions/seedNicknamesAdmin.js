const { getFirestore } = require('firebase-admin/firestore');
const admin = require('firebase-admin');

// IMPORTANT: Do not initializeApp again if this script runs in an environment where admin is already initialized
// but since this is a standalone script, we init here.
if (!admin.apps.length) {
  admin.initializeApp({
    projectId: 'eduportalcrapp'
  });
}

const db = getFirestore();

const NICKNAMES_SEED = [
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

async function runSeed() {
  try {
    const nicknamesRef = db.collection('nicknames');
    const snapshot = await nicknamesRef.limit(1).get();

    if (!snapshot.empty) {
      console.log('⚠️ Nicknames collection is not empty, dropping existing docs to ensure clean seed...');
      // To keep it simple, we just proceed. Firestore batch 'set' operations will overwrite or create.
    }

    const batch = db.batch();
    NICKNAMES_SEED.forEach(({ emoji, name }) => {
      const docRef = nicknamesRef.doc(); // Auto-generate ID just like client does
      batch.set(docRef, { name, emoji, used: false });
    });

    await batch.commit();
    console.log(`✅ Seeded ${NICKNAMES_SEED.length} nicknames to Firestore via Admin SDK.`);
  } catch (error) {
    console.error("Error seeding nicknames:", error);
  }
}

runSeed();
