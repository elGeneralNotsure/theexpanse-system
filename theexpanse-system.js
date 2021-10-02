// import * as Macros from "./modules/macros.js";
import {theexpanseSystem} from "./modules/config.js";
import theexpanseSystemSheetItem from "./modules/sheets/theexpanseSystemSheetItem.js";
import theexpanseSystemSheetCharacter from "./modules/sheets/theexpanseSystemSheetCharacter.js";
import theexpanseSystemSheetCharStatBlock from "./modules/sheets/theexpanseSystemSheetCharStatBlock.js";
import theexpanseSystemSheetVehicle from "./modules/sheets/theexpanseSystemSheetVehicle.js";
import theexpanseSystemSheetSpaceship from "./modules/sheets/theexpanseSystemSheetSpaceship.js";
import theexpanseActiveEffectConfig from "./modules/sheets/theexpanseActiveEffectConfig.js";
import {theexpanseSystemActor} from "./modules/theexpanseSystemActor.js";
import {theexpanseEffect} from "./modules/theexpanseEffect.js";
import {theexpanseToken} from "./modules/theexpanseToken.js";
import {theexpanseSystemItem} from "./modules/theexpanseSystemItem.js";
import { createTheExpanseMacro } from "./modules/macros.js";
import { rollOwnedItem } from "./modules/macros.js";
import { TheExpanseRoller } from "./modules/theexpanse-roller.js";
import { TheExpanseTracker } from "./modules/theexpanse-tracker.js";

import * as Dice from "./modules/dice.js";
import * as Settings from "./modules/settings.js";
import * as TheExpanseChat from "./modules/theexpanse-chat.js";
import * as Setup from "./modules/setup.js";
import * as migrations from "./modules/migration.js";

async function preloadHandlebarsTemplates() {
    const path = `systems/theexpanse-system/templates/partials/`;
    const templatePaths = [
        `${path}bonus-desc-sheet.hbs`,
        `${path}dmg-block-sheet.hbs`,
        `${path}bonuses-sheet.hbs`,
        `${path}active-bonuses.hbs`,
        `${path}ability-focus-select.hbs`,
        `${path}cost-resource-block.hbs`,
        `${path}play-aid-bar.hbs`,
        `${path}item-image-sheet-card.hbs`,
        `${path}conditions-block.hbs`,
        `${path}char-sheet-nav-bar.hbs`,
        `${path}char-sheet-tab-main.hbs`,
        `${path}char-sheet-tab-equipment.hbs`,
        `${path}char-sheet-tab-talent-stunts.hbs`,
        `${path}char-sheet-tab-persona.hbs`,
        `${path}char-sheet-tab-effects.hbs`,
        `${path}item-card-buttons.hbs`,
        `${path}char-stat-block-column1.hbs`,
        `${path}item-options-sheet.hbs`,
    ];

    return loadTemplates(templatePaths);
};

Hooks.once("init", async function() {
    const theexpanseSystemText = `
     ___   ____________   _____            __               
    /   | / ____/ ____/  / ___/__  _______/ /____  ____ ___ 
   / /| |/ / __/ __/     \\__ \\/ / / / ___/ __/ _ \\/ __ \`__ \\
  / ___ / /_/ / /___    ___/ / /_/ (__  ) /_/  __/ / / / / /
 /_/  |_\\____/_____/   /____/\\__, /____/\\__/\\___/_/ /_/ /_/ 
                            /____/                          `;

    console.log("THE EXPANSE System | Here comes the Juice...");
    console.log(theexpanseSystemText);

    // Create a namespace within the game global
    game.theexpanseSystem = {
        applications: {
            theexpanseSystemSheetCharacter,
            theexpanseSystemSheetCharStatBlock,
            theexpanseSystemSheetVehicle,
            theexpanseSystemSheetSpaceship,
            // theexpanseActiveEffectConfig,
            theexpanseSystemSheetItem,
            TheExpanseRoller,
            TheExpanseTracker
        },
        dice: Dice,
        migrations: migrations,
        rollOwnedItem,
        entities: {
            theexpanseSystemActor,
            theexpanseToken,
            theexpanseSystemItem,
            theexpanseEffect
        }
    };

    CONFIG.theexpanseSystem = theexpanseSystem;

    // Define Token Icons
    CONFIG.statusEffects = theexpanseSystem.THEEXPANSEstatusEffects;
    // Changing a few control icons
    CONFIG.controlIcons.defeated = "systems/theexpanse-system/resources/imgs/effects/hasty-grave.svg"

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("theexpanse-system", theexpanseSystemSheetCharacter, {
        types: ["char"],
        makeDefault: true,
        label: "theexpanse-system.SHEETS.charStandard"
    });
    Actors.registerSheet("theexpanse-system", theexpanseSystemSheetCharStatBlock, {
        types: ["char"],
        label: "theexpanse-system.SHEETS.charStatBlock"
    });
    Actors.registerSheet("theexpanse-system", theexpanseSystemSheetVehicle, {
        types: ["vehicle"],
        makeDefault: true,
        label: "theexpanse-system.SHEETS.vehicleStandard"
    });
    Actors.registerSheet("theexpanse-system", theexpanseSystemSheetSpaceship, {
        types: ["spaceship"],
        makeDefault: true,
        label: "theexpanse-system.SHEETS.spaceshipStandard"
    });
    
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("theexpanse-system", theexpanseSystemSheetItem, {
        makeDefault: true,
        label: "theexpanse-system.SHEETS.itemStandard"
    });

    game.theexpanseSystem.theexpanseRoller = new TheExpanseRoller({
        popOut: false,
        minimizable: false,
        resizable: false,
    });

    game.theexpanseSystem.theexpanseTracker = new TheExpanseTracker({
        popOut: false,
        minimizable: false,
        resizable: false
    });

    // Define extra data for TheExpanse System (Actors, Items, ActiveEffectConfig)
    CONFIG.Actor.documentClass = theexpanseSystemActor;
    CONFIG.Token.objectClass = theexpanseToken;
    CONFIG.Item.documentClass = theexpanseSystemItem;
    CONFIG.ActiveEffect.documentClass = theexpanseEffect;
    // Saving this customization for a later implementation
    // CONFIG.ActiveEffect.sheetClass = theexpanseActiveEffectConfig;

    // Load partials for Handlebars
    preloadHandlebarsTemplates();

    // Register System Settings
    Settings.registerSystemSettings();

    // Useful concat Helper from Boilerplate system!
    Handlebars.registerHelper('concat', function() {
        let outStr = '';
        for (let arg in arguments) {
            if (typeof arguments[arg] != 'object') {
                outStr += arguments[arg];
            }
        }
        return outStr;
    });

    // Handlebar to identify type of Effect
    Handlebars.registerHelper('ageffect', function(mask, options) {
        for (let o = 0; o < options.length; o++) {
            const e = options[o];
            if (e[1] === mask) return e[0]
        }
        return `${mask} (${game.i18n.localize("theexpanse-system.custom")})`;
    })

    // Handlebar returning array with Focus for a given Ability
    Handlebars.registerHelper('focusbyabl', function(focus, abl) {
        return focus.filter(f => f.data.useAbl === abl)
    })

    // Handlebar returning array with equiped weapon
    Handlebars.registerHelper('equippedwpn', function(weapons) {
        return weapons.filter(f => f.data.equiped === true)
    })

    // Handlebar returning array with active Power dealing damage
    Handlebars.registerHelper('dmgpower', function(powers) {
        return powers.filter(p => p.data.activate === true && (p.data.hasDamage || p.data.hasHealing))
    })

    // Handlebar returning all carried itens
    Handlebars.registerHelper('carriedequip', function(items) {
        return items.filter(p => p.type === "equipment" || p.type === "weapon")
    })

    
    // Handlebar to itentify if Weapon Group is know
    Handlebars.registerHelper('haswgroup', function(wGroup, groupArray) {
        if (!groupArray === []) return false;
        return groupArray.includes(wGroup) ? true : false;
    });

    // Handlebar to build damage summary on chat card
    Handlebars.registerHelper('termOperator', function(diceTerms, k) {
        if (k === 0) return ``;
        const op = diceTerms[k-1].operator;
        return op === `+` ? `` : op;
    });

    // Handlebar helper to compare 2 data
    Handlebars.registerHelper("when",function(operand_1, operator, operand_2, options) {
        let operators = {
            'eq': function(l,r) { return l == r; },
            'noteq': function(l,r) { return l != r; },
            'gt': function(l,r) { return Number(l) > Number(r); },
            'or': function(l,r) { return l || r; },
            'and': function(l,r) { return l && r; },
            '%': function(l,r) { return (l % r) === 0; }
        },
        result = operators[operator](operand_1,operand_2);
      
        if (result) return options.fn(this);
        else return options.inverse(this);
    });

    // Keep a list of actors that need to prepareData after 'ready' (generally those that rely on other actor data - passengers/mounts)
    game.postReadyPrepare = [];

});

Hooks.once("setup", function() {
    // Localize conditions
    for (let c = 0; c < theexpanseSystem.conditions.length; c++) {
        const cond = theexpanseSystem.conditions[c];
        theexpanseSystem.conditions[c].name = game.i18n.localize(theexpanseSystem.conditions[c].name);
        theexpanseSystem.conditions[c].desc = game.i18n.localize(theexpanseSystem.conditions[c].desc);
    }

    // Localize Abilities' name
    Setup.abilitiesName();

    // Localize Effects Name and build object
    Setup.localizeTheExpanseEffects();

    // Localize Item modifier label
    // Setup.localizeModifiers();

});

Hooks.once("ready", async function() {
    // Identify Colorset
    const color = game.user.getFlag("theexpanse-system", "colorScheme");
    if (color) game.settings.set("theexpanse-system", "colorScheme", color);
    if (!color) game.user.setFlag("theexpanse-system", "colorScheme", game.settings.get("theexpanse-system", "colorScheme"));
    // Register color scheme on global name space
    theexpanseSystem.colorScheme = game.settings.get("theexpanse-system", "colorScheme");

    // Tracker Handling
    // Identify if User already has theexpanseTrackerPos flag set
    const userTrackerFlag = await game.user.getFlag("theexpanse-system", "theexpanseTrackerPos");
    const useTracker = (game.settings.get("theexpanse-system", "serendipity") || game.settings.get("theexpanse-system", "complication") !== "none") ? true : false;
    if (!userTrackerFlag) await game.user.setFlag("theexpanse-system", "theexpanseTrackerPos", theexpanseSystem.theexpanseTrackerPos);
    if (useTracker) game.theexpanseSystem.theexpanseTracker.refresh();

    // TheExpanse Roller
    // Handle flag
    const rollerFlag = await game.user.getFlag("theexpanse-system", "theexpanseRollerPos");
    if (!rollerFlag) await game.user.setFlag("theexpanse-system", "theexpanseRollerPos", theexpanseSystem.theexpanseRollerPos);
    game.theexpanseSystem.theexpanseRoller.refresh()

    // Check if Dice so Nice is active to register Stunt Die option
    if (game.modules.get("dice-so-nice") && game.modules.get("dice-so-nice").active) {
        import("/modules/dice-so-nice/DiceColors.js").then((diceColors) => {
            
            const colorset = diceColors.COLORSETS;
            let colorChoices = {};
            for (const type in colorset) {
                if (colorset.hasOwnProperty(type)) {
                    const colorCode = colorset[type].name;
                    const colorName = colorset[type].description;
                    const newChoice = {[colorCode]: colorName}
                    colorChoices = {
                    ...colorChoices,
                    ...newChoice
                    };
                };
            };
            if (colorChoices !== {} && colorChoices) {
                // After loading all modules, check if Dice so Nice is installed and add option to select Stunt Die colorset                
                Settings.stuntSoNice(colorChoices);
                // Identify if user has registered Dice so Nice Stunt Die option
                const stuntSoNiceFlag = game.user.getFlag("theexpanse-system", "stuntSoNice");
                if (stuntSoNiceFlag) game.settings.set("theexpanse-system", "stuntSoNice", stuntSoNiceFlag);
                if (!stuntSoNiceFlag) game.user.setFlag("theexpanse-system", "stuntSoNice", game.settings.get("theexpanse-system", "stuntSoNice"));
            };
        });
    };

    // Prepare Actors dependent on other Actors
    for(let e of game.postReadyPrepare){
        e.prepareData();
    }
    
    // Register System Settings related do Focus Compendium
    theexpanseSystem.itemCompendia = Settings.allCompendia("Item");
    Settings.loadCompendiaSettings();
    const setCompendium = game.settings.get("theexpanse-system", "masterFocusCompendium");
    theexpanseSystem.focus = Settings.compendiumList(setCompendium);

    // Wait to register hotbar drop hook on ready so that modules could register earlier if they want to
    Hooks.on("hotbarDrop", (bar, data, slot) => createTheExpanseMacro(data, slot));

    // // Determine whether a system migration is required and feasible
    if ( !game.user.isGM ) return;
    const currentVersion = game.settings.get("theexpanse-system", "systemMigrationVersion");
    const NEEDS_MIGRATION_VERSION = "0.7.5";
    // const COMPATIBLE_MIGRATION_VERSION = "0.8.7";
    const needsMigration = !currentVersion || isNewerVersion(NEEDS_MIGRATION_VERSION, currentVersion);
    if ( !needsMigration ) return;

    // Perform the migration
    // if ( currentVersion && isNewerVersion(COMPATIBLE_MIGRATION_VERSION, currentVersion) ) {
    //     const warning = `Your THE EXPANSE System data is from too old a Foundry version and cannot be reliably migrated to the latest version. The process will be attempted, but errors may occur.`;
    //     ui.notifications.error(warning, {permanent: true});
    // }
    migrations.migrateWorld();

});

Hooks.on("createCompendium", () => {
    theexpanseSystem.itemCompendia = Settings.allCompendia("Item");
})

// If Compendia are updated, then compendiumList is gathered once again
Hooks.on("renderCompendium", () => {
    const setCompendium = game.settings.get("theexpanse-system", "masterFocusCompendium");
    theexpanseSystem.focus = Settings.compendiumList(setCompendium);
});

Hooks.on("rendertheexpanseSystemItemSheet", (app, html, data) => {
    // Add item type on title bar
    Setup.nameItemSheetWindow(app);
});

Hooks.on("rendertheexpanseSystemSheetCharacter", (app, html, data) => {
    // Hide primary Abilities checkbox
    Setup.hidePrimaryAblCheckbox(html);
});

Hooks.on("renderChatLog", (app, html, data) => TheExpanseChat.addChatListeners(html));

Hooks.on("renderChatMessage", (app, html, data) => {
    // Hide chat message when rolling to GM
    TheExpanseChat.sortCustomTheExpanseChatCards(app, html, data);
});

// Prevent Items to be created on non campatible Actor types
Hooks.on("preCreateItem", (itemCreated, itemCreatedData, options, userId) => {
    // Ensure this change occurs once
    if (game.user.id !== userId) return;

    const actor = itemCreated.actor;
    const itemName = itemCreatedData.name
    const itemType = itemCreatedData.type

    if (!actor) return;

    // Avoid dropping Item on Vehicle
    if (actor.type === "vehicle") {
        ui.notifications.warn(`Items can not be droped on Vehicle Actor type.`);
        return options.temporary = true;
    };

    // Ensure only Spaceship Features are droped on Spaceships
    if (actor.type === "spaceship" && itemType !== "shipfeatures") {
        let warning = game.i18n.localize("theexpanse-system.WARNING.nonShipPartsOnShip");
        ui.notifications.warn(warning);
        return options.temporary = true;
    }
    
    // Prevent adding spaceship features to Actors
    if (actor.type === "char" && itemType === "shipfeatures") {
        let warning = game.i18n.localize("theexpanse-system.WARNING.shipPartsOnChar");
        ui.notifications.warn(warning);
        return options.temporary = true;
    }
    
    // Avoid Focus with repeated name on Actors
    if (actor.type === "char" && itemType === "focus") {
        const hasFocus = actor.items.filter(f => f.name === itemCreatedData.name && f.type === "focus");
        if (hasFocus.length > 0) {
            let warning = game.i18n.localize("theexpanse-system.WARNING.duplicatedFocus");
            warning += `"${itemName.toUpperCase()}"`;
            ui.notifications.warn(warning);
            return options.temporary = true;
        }
    }
});