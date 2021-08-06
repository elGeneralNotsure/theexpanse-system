export const theexpanseSystem = {
    abilitiesSettings: {}
};

// Ability set for "main" - core THE EXPANSE System games
theexpanseSystem.abilitiesSettings.main = {
    "acc": "theexpanse-system.acc",
    "comm": "theexpanse-system.comm",
    "cons": "theexpanse-system.cons",
    "dex": "theexpanse-system.dex",
    "fight": "theexpanse-system.fight",
    "int": "theexpanse-system.int",
    "per": "theexpanse-system.per",
    "str": "theexpanse-system.str",
    "will": "theexpanse-system.will",
};

// Ability set for "dage" - Dragon TheExpanse games
theexpanseSystem.abilitiesSettings.dage = {
    "comm": "theexpanse-system.comm",
    "cons": "theexpanse-system.cons",
    "cunn": "theexpanse-system.cunn",
    "dex": "theexpanse-system.dex",
    "magic": "theexpanse-system.magic",
    "per": "theexpanse-system.per",
    "str": "theexpanse-system.str",
    "will": "theexpanse-system.will",
};

theexpanseSystem.actionsToCast = {
    noAction: "theexpanse-system.noAction",
    minorAction: "theexpanse-system.minorAction",
    majorAction: "theexpanse-system.majorAction",
    oneMinute: "theexpanse-system.oneMinute",
    fiveMinutes: "theexpanse-system.fiveMinutes",
    tenMinutes: "theexpanse-system.tenMinutes",
    twentyMinutes: "theexpanse-system.twentyMinutes",
    oneHour: "theexpanse-system.oneHour",
    fourHours: "theexpanse-system.fourHours",
    twelveHours: "theexpanse-system.twelveHours"
};

theexpanseSystem.reloadDuration = {
    noAction: "theexpanse-system.noAction",
    minorAction: "theexpanse-system.minorAction",
    majorAction: "theexpanse-system.majorAction",
    d6minor: "theexpanse-system.d6minor"
};

theexpanseSystem.fatigueConditions = {
    noFatigue: "theexpanse-system.noFatigue",
    winded: "theexpanse-system.winded",
    fatigued: "theexpanse-system.fatigued",
    exhausted: "theexpanse-system.exhausted",
    dying: "theexpanse-system.dying"
};

// Conditions
theexpanseSystem.conditions = [
    {
        name: "theexpanse-system.conditions.blinded",
        desc: "theexpanse-system.conditions.blindedDesc",
        id: "blinded"
    },
    {
        name: "theexpanse-system.conditions.deafened",
        desc: "theexpanse-system.conditions.deafenedDesc",
        id: "deafened"
    },
    {
        name: "theexpanse-system.conditions.exhausted",
        desc: "theexpanse-system.conditions.exhaustedDesc",
        id: "exhausted"
    },
    {
        name: "theexpanse-system.conditions.fatigued",
        desc: "theexpanse-system.conditions.fatiguedDesc",
        id: "fatigued"
    },
    {
        name: "theexpanse-system.conditions.freefalling",
        desc: "theexpanse-system.conditions.freefallingDesc",
        id: "freefalling"
    },
    {
        name: "theexpanse-system.conditions.helpless",
        desc: "theexpanse-system.conditions.helplessDesc",
        id: "helpless"
    },
    {
        name: "theexpanse-system.conditions.hindered",
        desc: "theexpanse-system.conditions.hinderedDesc",
        id: "hindered"
    },
    {
        name: "theexpanse-system.conditions.prone",
        desc: "theexpanse-system.conditions.proneDesc",
        id: "prone"
    },
    {
        name: "theexpanse-system.conditions.restrained",
        desc: "theexpanse-system.conditions.restrainedDesc",
        id: "restrained"
    },
    {
        name: "theexpanse-system.conditions.injured",
        desc: "theexpanse-system.conditions.injuredDesc",
        id: "injured",
    },
    {
        name: "theexpanse-system.conditions.wounded",
        desc: "theexpanse-system.conditions.woundedDesc",
        id: "wounded"
    },
    {
        name: "theexpanse-system.conditions.unconscious",
        desc: "theexpanse-system.conditions.unconsciousDesc",
        id: "unconscious"
    },
    {
        name: "theexpanse-system.conditions.dying",
        desc: "theexpanse-system.conditions.dyingDesc",
        id: "dying"
    }
];

theexpanseSystem.damageType = {
    stun: "theexpanse-system.stun",
    wound: "theexpanse-system.wound"
};
theexpanseSystem.damageSource = {
    impact: "theexpanse-system.impact",
    ballistic: "theexpanse-system.ballistic",
    penetrating: "theexpanse-system.penetrating"
    // piercing: "theexpanse-system.piercing"
};
theexpanseSystem.rof = {
    none: "theexpanse-system.rof.none",
    singleShot: "theexpanse-system.rof.singleShot",
    semiAuto: "theexpanse-system.rof.semiAuto",
    fullAuto: "theexpanse-system.rof.fullAuto"
};
    
// Vehicle parameters
theexpanseSystem.velocityCategory = {
    velStandard: {colDmg: "1d6", sideDmg: "1d3"},
    velFast:  {colDmg: "2d6", sideDmg: "1d6"},
    velVeryFast:  {colDmg: "4d6", sideDmg: "2d6"},
    velExtreme:  {colDmg: "6d6", sideDmg: "3d6"}
};

// Spacehip sizes
theexpanseSystem.spaceshipSize = {
    tiny: 1,
    small: 2,
    medium: 3,
    large: 4,
    huge: 5,
    gigantic: 6,
    colossal: 7,
    titanic: 8
};

// Spaceship hull by size
theexpanseSystem.spaceshipHull = [
    "1",
    "1d3",
    "1d6",
    "2d6",
    "3d6",
    "4d6",
    "5d6",
    "6d6"
];

// Spaceship crew by size
theexpanseSystem.spaceshipCrew = [
    {min: 1, typ: 2},
    {min: 1, typ: 2},
    {min: 2, typ: 4},
    {min: 4, typ: 16},
    {min: 16, typ: 64},
    {min: 64, typ: 512},
    {min: 256, typ: 2048},
    {min: 1024, typ: 8192}
];

// Spaceship crew competece
theexpanseSystem.spaceshipCrewCompetence = {
    incompetent: 0,
    poor: 1,
    average: 2,
    capable: 3,
    skilled: 4,
    elite: 5
};

// Spaceship Features
theexpanseSystem.featuresType = [
    "sensorMod", "maneuverSizeStep", "juiceMod", "special",
    "hullPlating", "hullMod",/* "rollable", */"weapon" // Maybe in the future I can add the rollable feature...
];

const itemIconPath = "systems/theexpanse-system/resources/imgs/item-icon/";
theexpanseSystem.itemIcons = {
    "equipment": `${itemIconPath}briefcase.svg`,
    "stunts": `${itemIconPath}split-cross.svg`,
    "talent": `${itemIconPath}skills.svg`,
    "power": `${itemIconPath}embrassed-energy.svg`,
    "honorifics": `${itemIconPath}rank-3.svg`,
    "relationship": `${itemIconPath}player-next.svg`,
    "membership": `${itemIconPath}backup.svg`,
    "weapon": `${itemIconPath}fist.svg`,
    "focus": `${itemIconPath}gift-of-knowledge.svg`,
    "shipfeatures": `${itemIconPath}processor.svg`
};

const actorIconPath = "systems/theexpanse-system/resources/imgs/actor-icon/";
theexpanseSystem.actorIcons = {
    "vehicle": `${actorIconPath}chariot.svg`,
    "char": `${actorIconPath}sensousness.svg`,
    "spaceship": `${actorIconPath}rocket.svg`,
}

const uiElementsPath = "systems/theexpanse-system/resources/imgs/ui-elements/";
theexpanseSystem.uiElements = {
    theexpanseRoller: `${uiElementsPath}cube.svg`
}

const THEEXPANSEstatusEffectsPath = "systems/theexpanse-system/resources/imgs/effects/";
theexpanseSystem.THEEXPANSEstatusEffects = [
    {
        icon: `${THEEXPANSEstatusEffectsPath}number.png`,
        id: `num0`,
        label: `0`,
        flags: {
            "theexpanse-system": {
                type: "counter"
            }
        }
    },
    {
        icon: `${THEEXPANSEstatusEffectsPath}number-1.png`,
        id: `num1`,
        label: `1`,
        flags: {
            "theexpanse-system": {
                type: "counter"
            }
        }
    },
    {
        icon: `${THEEXPANSEstatusEffectsPath}number-2.png`,
        id: `num2`,
        label: `2`,
        flags: {
            "theexpanse-system": {
                type: "counter"
            }
        }
    },
    {
        icon: `${THEEXPANSEstatusEffectsPath}number-3.png`,
        id: `num3`,
        label: `3`,
        flags: {
            "theexpanse-system": {
                type: "counter"
            }
        }
    },
    {
        icon: `${THEEXPANSEstatusEffectsPath}number-4.png`,
        id: `num4`,
        label: `4`,
        flags: {
            "theexpanse-system": {
                type: "counter"
            }
        }
    },
    {
        icon: `${THEEXPANSEstatusEffectsPath}number-5.png`,
        id: `num5`,
        label: `5`,
        flags: {
            "theexpanse-system": {
                type: "counter"
            }
        }
    },
    {
        icon: `${THEEXPANSEstatusEffectsPath}number-6.png`,
        id: `num6`,
        label: `6`,
        flags: {
            "theexpanse-system": {
                type: "counter"
            }
        }
    },
    {
        icon: `${THEEXPANSEstatusEffectsPath}number-7.png`,
        id: `num7`,
        label: `7`,
        flags: {
            "theexpanse-system": {
                type: "counter"
            }
        }
    },
    {
        icon: `${THEEXPANSEstatusEffectsPath}number-8.png`,
        id: `num8`,
        label: `8`,
        flags: {
            "theexpanse-system": {
                type: "counter"
            }
        }
    },
    {
        icon: `${THEEXPANSEstatusEffectsPath}number-9.png`,
        id: `num9`,
        label: `9`,
        flags: {
            "theexpanse-system": {
                type: "counter"
            }
        }
    },
    {
        icon: `${THEEXPANSEstatusEffectsPath}number-10.png`,
        id: `num10`,
        label: `10`,
        flags: {
            "theexpanse-system": {
                type: "counter"
            }
        }
    },
    {
        icon: `${THEEXPANSEstatusEffectsPath}pirate-grave.svg`,
        id: `dead`,
        label: `EFFECT.StatusDead`,
        flags: {
            "theexpanse-system": {
                type: "core"
            }
        }
    },
    {
        label: "theexpanse-system.conditions.blinded",
        id: "blinded",
        icon: "icons/svg/blind.svg",
        flags: {
            "theexpanse-system": {
                type: "conditions",
                name: "blinded",
            }
        }
    },
    {
        label: "theexpanse-system.conditions.deafened",
        id: "deafened",
        icon: "icons/svg/deaf.svg",
        flags: {
            "theexpanse-system": {
                type: "conditions",
                name: "deafened",
            }
        }
    },
    {
        label: "theexpanse-system.conditions.dying",
        id: "dying",
        icon: `${THEEXPANSEstatusEffectsPath}half-dead.svg`,
        flags: {
            "theexpanse-system": {
                type: "conditions",
                name: "dying"
            }
        }
    },
    {
        label: "theexpanse-system.conditions.fatigued",
        id: "fatigued",
        icon: `${THEEXPANSEstatusEffectsPath}despair.svg`,
        flags: {
            "theexpanse-system": {
                type: "conditions",
                name: "fatigued"
            }
        }
    },
    {
        label: "theexpanse-system.conditions.exhausted",
        id: "exhausted",
        icon: `${THEEXPANSEstatusEffectsPath}oppression.svg`,
        flags: {
            "theexpanse-system": {
                type: "conditions",
                name: "exhausted"
            }
        },
        changes: [{
            key: "data.speed.total",
            mode: CONST.ACTIVE_EFFECT_MODES.MULTIPLY,
            value: "0.5"
        }]
    },
    {
        label: "theexpanse-system.conditions.freefalling",
        id: "freefalling",
        icon: `${THEEXPANSEstatusEffectsPath}acrobatic.svg`,
        flags: {
            "theexpanse-system": {
                type: "conditions",
                name: "freefalling"
            }
        }
    },
    {
        label: "theexpanse-system.conditions.helpless",
        id: "helpless",
        icon: `${THEEXPANSEstatusEffectsPath}knockout.svg`,
        flags: {
            "theexpanse-system": {
                type: "conditions",
                name: "helpless"
            }
        }
    },
    {
        label: "theexpanse-system.conditions.hindered",
        id: "hindered",
        icon: `${THEEXPANSEstatusEffectsPath}knee-bandage.svg`,
        flags: {
            "theexpanse-system": {
                type: "conditions",
                name: "hindered"
            }
        },
        changes: [{
            key: "data.speed.total",
            mode: CONST.ACTIVE_EFFECT_MODES.MULTIPLY,
            value: "0.5"
        }]
    },
    {
        label: "theexpanse-system.conditions.injured",
        id: "injured",
        icon: `${THEEXPANSEstatusEffectsPath}backstab.svg`,
        flags: {
            "theexpanse-system": {
                type: "conditions",
                name: "injured"
            }
        },
        changes: [{
            key: "data.testMod",
            mode: CONST.ACTIVE_EFFECT_MODES.ADD,
            value: "-1"
        }]
    },
    {
        label: "theexpanse-system.conditions.wounded",
        id: "wounded",
        icon: `${THEEXPANSEstatusEffectsPath}arrowed.svg`,
        flags: {
            "theexpanse-system": {
                type: "conditions",
                name: "wounded"
            }
        },
        changes: [{
            key: "data.speed.total",
            mode: CONST.ACTIVE_EFFECT_MODES.MULTIPLY,
            value: "0.5"
        },
        {
            key: "data.testMod",
            mode: CONST.ACTIVE_EFFECT_MODES.ADD,
            value: "-2"
        }]
    },
    {
        label: "theexpanse-system.conditions.prone",
        id: "prone",
        icon: "icons/svg/falling.svg",
        flags: {
            "theexpanse-system": {
                type: "conditions",
                name: "prone"
            }
        }
    },
    {
        label: "theexpanse-system.conditions.restrained",
        id: "restrained",
        icon: `${THEEXPANSEstatusEffectsPath}imprisoned.svg`,
        flags: {
            "theexpanse-system": {
                type: "conditions",
                name: "restrained"
            }
        },
        changes: [{
            key: "data.speed.total",
            mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
            value: "0"
        }]
    },
    {
        label: "theexpanse-system.conditions.unconscious",
        id: "unconscious",
        icon: "icons/svg/unconscious.svg",
        flags: {
            "theexpanse-system": {
                type: "conditions",
                name: "unconscious"
            }
        },
        changes: [{
            key: "data.speed.total",
            mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
            value: "0"
        }]
    },
    // Below this line are Foundry Core token conditions
    {
        id: "sleep",
        label: "EFFECT.StatusAsleep",
        icon: "icons/svg/sleep.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "fly",
        label: "EFFECT.StatusFlying",
        icon: "icons/svg/wing.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "stun",
        label: "EFFECT.StatusStunned",
        icon: "icons/svg/daze.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "paralysis",
        label: "EFFECT.StatusParalysis",
        icon: "icons/svg/paralysis.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "silence",
        label: "EFFECT.StatusSilenced",
        icon: "icons/svg/silenced.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "fear",
        label: "EFFECT.StatusFear",
        icon: "icons/svg/terror.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "burning",
        label: "EFFECT.StatusBurning",
        icon: "icons/svg/fire.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "frozen",
        label: "EFFECT.StatusFrozen",
        icon: "icons/svg/frozen.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "shock",
        label: "EFFECT.StatusShocked",
        icon: "icons/svg/lightning.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "corrode",
        label: "EFFECT.StatusCorrode",
        icon: "icons/svg/acid.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
        {
        id: "bleeding",
        label: "EFFECT.StatusBleeding",
        icon: "icons/svg/blood.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "disease",
        label: "EFFECT.StatusDisease",
        icon: "icons/svg/biohazard.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "poison",
        label: "EFFECT.StatusPoison",
        icon: "icons/svg/poison.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "radiation",
        label: "EFFECT.StatusRadiation",
        icon: "icons/svg/radiation.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "regen",
        label: "EFFECT.StatusRegen",
        icon: "icons/svg/regen.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "degen",
        label: "EFFECT.StatusDegen",
        icon: "icons/svg/degen.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "upgrade",
        label: "EFFECT.StatusUpgrade",
        icon: "icons/svg/upgrade.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "downgrade",
        label: "EFFECT.StatusDowngrade",
        icon: "icons/svg/downgrade.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "target",
        label: "EFFECT.StatusTarget",
        icon: "icons/svg/target.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "eye",
        label: "EFFECT.StatusMarked",
        icon: "icons/svg/eye.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "curse",
        label: "EFFECT.StatusCursed",
        icon: "icons/svg/sun.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "bless",
        label: "EFFECT.StatusBlessed",
        icon: "icons/svg/angel.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "fireShield",
        label: "EFFECT.StatusFireShield",
        icon: "icons/svg/fire-shield.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "coldShield",
        label: "EFFECT.StatusIceShield",
        icon: "icons/svg/ice-shield.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "magicShield",
        label: "EFFECT.StatusMagicShield",
        icon: "icons/svg/mage-shield.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
    {
        id: "holyShield",
        label: "EFFECT.StatusHolyShield",
        icon: "icons/svg/holy-shield.svg",
        flags: {
            "theexpanse-system": {
                type: "general"
            }
        }
    },
];

theexpanseSystem.theexpanseEffectsKeys = {
    "testMod": {label: "theexpanse-system.bonus.testMod", mask: "data.testMod"},
    "attackMod": {label: "theexpanse-system.bonus.attackMod", mask: "data.attackMod"},
    "actorDamage": {label: "theexpanse-system.bonus.actorDamage", mask: "data.dmgMod"},
    "acc": {label: "theexpanse-system.bonus.acc", mask: "data.abilities.acc.total"},
    "comm": {label: "theexpanse-system.bonus.comm", mask: "data.abilities.comm.total"},
    "cons": {label: "theexpanse-system.bonus.cons", mask:"data.abilities.cons.total"},
    "cunn": {label: "theexpanse-system.bonus.cunn", mask: "data.abilities.cunn.total"},
    "dex": {label: "theexpanse-system.bonus.dex", mask: "data.abilities.dex.total"},
    "fight": {label: "theexpanse-system.bonus.fight", mask: "data.abilities.fight.total"},
    "int": {label: "theexpanse-system.bonus.int", mask: "data.abilities.int.total"},
    "magic": {label: "theexpanse-system.bonus.magic", mask: "data.abilities.magic.total"},
    "per": {label: "theexpanse-system.bonus.per", mask: "data.abilities.per.total"},
    "str": {label: "theexpanse-system.bonus.str", mask: "data.abilities.str.total"},
    "will": {label: "theexpanse-system.bonus.will", mask: "data.abilities.total"},
    "defense": {label: "theexpanse-system.bonus.defense", mask: "data.defense.total"},
    "impactArmor": {label: "theexpanse-system.bonus.impactArmor", mask: "data.armor.impact"},
    "ballisticArmor": {label: "theexpanse-system.bonus.ballisticArmor", mask: "data.armor.ballistic"},
    "defendMnv": {label: "theexpanse-system.bonus.defendMnv", mask: "data.defend.total"},
    "guardupMnv": {label: "theexpanse-system.bonus.guardupMnv", mask: "data.guardUp.total"},
    "allOutAtk": {label: "theexpanse-system.bonus.allOutAtkMnv", mask: "data.allOutAttack.total"},
    "maxHealth": {label: "theexpanse-system.bonus.maxHealth", mask: "data.health.max"},
    "maxConviction": {label: "theexpanse-system.bonus.maxConviction", mask: "data.conviction.max"},
    "maxPowerPoints": {label: "theexpanse-system.bonus.maxPowerPoints", mask: "data.powerPoints.max"},
    "aimMnv": {label: "theexpanse-system.bonus.aimMnv", mask: "data.aim.total"},
    "armorPenalty": {label: "theexpanse-system.bonus.armorPenalty", mask: "data.armor.penalty"},
    "armorStrain": {label: "theexpanse-system.bonus.armorStrain", mask: "data.armor.strain"},
    "speed": {label: "theexpanse-system.bonus.speed", mask: "data.speed.total"},
    "toughness": {label: "theexpanse-system.bonus.toughness", mask: "data.armor.toughness.total"},
}

theexpanseSystem.itemEffectsKeys = {
    "powerForce": {label: "theexpanse-system.bonus.powerForce", mask: ""},
    "focus": {label: "theexpanse-system.bonus.focusValue", mask: ""},
    "itemDamage": {label: "theexpanse-system.bonus.itemAtk", mask: ""},
    "itemActivation": {label: "theexpanse-system.bonus.generalDmg", mask: ""}
}

// TheExpanse Tracker & Roller Initial Positions
theexpanseSystem.theexpanseTrackerPos = {xPos: "260px", yPos: "69px"};
theexpanseSystem.theexpanseRollerPos = {xPos: "800px", yPos: "10px"};

// Initializing variable to load focus Compendiaum
theexpanseSystem.focus = [];

// List with world's Item compendia
theexpanseSystem.itemCompendia = [];