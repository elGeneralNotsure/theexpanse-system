import * as Dice from "../dice.js";
import {theexpanseSystem} from "../config.js";
import { sortObjArrayByName } from "../setup.js";
import theexpanseSystemSheetCharacter from "./theexpanseSystemSheetCharacter.js";

export default class theexpanseSystemSheetCharStatBlock extends theexpanseSystemSheetCharacter {
    
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            // resizable: false,
            width: 400,
            height: 650,
            classes: ["theexpanse-system", "sheet", "char", "stat-block"],
            tabs: [{
                navSelector: ".add-sheet-tabs",
                contentSelector: ".sheet-tab-section",
                initial: "main"
            }]
        });
    }

    get template() {
        return `systems/theexpanse-system/templates/sheets/${this.actor.data.type}-stat-block.hbs`;
    }

    /* -------------------------------------------- */
    /** @inheritdoc */
    getData(options) {
        return {
            ...super.getData(options),
            isBlock: true
        }
    };
    
    activateListeners(html) {
        super.activateListeners(html);
        if (this.isEditable) {
            new ContextMenu(html, ".item-show", this.itemContextMenu);
        }
    };

    itemContextMenu = [
        {
            name: game.i18n.localize("theexpanse-system.chatCard.roll"),
            icon: '<i class="far fa-eye"></i>',
            callback: e => {
                const data = e[0].closest(".feature-controls").dataset;
                const item = this.actor.items.get(data.itemId);
                item.showItem(e.shiftKey)
            }
        },
        {
            name: game.i18n.localize("theexpanse-system.settings.edit"),
            icon: '<i class="fas fa-edit"></i>',
            callback: e => {
                const data = e[0].closest(".feature-controls").dataset;
                const item = this.actor.items.get(data.itemId);
                item.sheet.render(true);
            }
        },
        {
            name: game.i18n.localize("theexpanse-system.settings.delete"),
            icon: '<i class="fas fa-trash"></i>',
            callback: e => {
                const data = e[0].closest(".feature-controls").dataset;
                const item = this.actor.items.get(data.itemId);
                item.delete();
            }
        }
    ];
}