// Not in use, but maybe in the future...
export function localizeConfig(toLocalize, noSort) {

    // Localize and sort CONFIG objects
    for ( let o of toLocalize ) {
        const localized = Object.entries(CONFIG.theexpanseSystem[o]).map(e => {
            return [e[0], game.i18n.localize(e[1])];
        });
        if ( !noSort.includes(o) ) localized.sort((a, b) => a[1].localeCompare(b[1]));
        CONFIG.theexpanseSystem[o] = localized.reduce((obj, e) => {
            obj[e[0]] = e[1];
            return obj;
        }, {});
    }
}

export function localizeTheExpanseEffects() {
    const toLocalize = ["theexpanseEffectsKeys"];

    // Localize and sort CONFIG objects
    for ( let o of toLocalize ) {
        const localized = Object.entries(CONFIG.theexpanseSystem[o]).map(e => {
            const label = game.i18n.localize(e[1].label);
            const mask = e[1].mask;
            return [e[0], {label, mask}];
        });
        CONFIG.theexpanseSystem[o] = localized.reduce((obj, e) => {
            obj[e[0]] = e[1];
            return obj;
        }, {});
    }

    const originalEffects = CONFIG.theexpanseSystem[toLocalize];
    let options = [];
    for (const e in originalEffects) {
        if (Object.hasOwnProperty.call(originalEffects, e)) {
            const effect = originalEffects[e];
            options.push([
                effect.label,
                effect.mask,
                e
            ]);          
        }
    }
    options = sortObjArrayByName(options, 0);
    CONFIG.theexpanseSystem.theexpanseEffectsOptions = options;
}

export function abilitiesName() {
    // Capture what is the ability set to be used
    const settingAblOption = game.settings.get("theexpanse-system", "abilitySelection");
    const ablOptions = CONFIG.theexpanseSystem.abilitiesSettings;
    const ablType = ["main", "dage"];

    for ( let o of ablType ) {
        const localized = Object.entries(ablOptions[o]).map(e => {
            return [e[0], game.i18n.localize(e[1])];
        });
        // if ( !noSort.includes(o) ) localized.sort((a, b) => a[1].localeCompare(b[1])); // All entries are sorted
        localized.sort((a, b) => a[1].localeCompare(b[1]));
        ablOptions[o] = localized.reduce((obj, e) => {
            obj[e[0]] = e[1];
            return obj;
        }, {});
    }

    CONFIG.theexpanseSystem.abilities = ablOptions[settingAblOption];
}

// Hide checkboxes to select Primary Abilities
export function hidePrimaryAblCheckbox(html) {
    const primaryAblShow = game.settings.get("theexpanse-system", "primaryAbl");
    const boxes = html.find(".ability-box .primary-secondary");
    if (!primaryAblShow) {
        for (let k = 0; k < boxes.length; k++) {
            const e = boxes[k];
            e.style.display = "none";
        };
    }

    // Hide Total Ability box if it equal to Original
    const abilityBox = html.find(".ability-box")
    for (let t = 0; t < abilityBox.length; t++) {
        const e = abilityBox[t];
        const original = e.children[0].querySelector(".abl-value.original");
        const total = e.children[0].querySelector(".abl-value.total");
        if (original.value === total.value) total.style.display = "none";        
    }
};

export function nameItemSheetWindow(theexpanseSystemItemSheet) {
    // Add item type in the title bar within brackets
    const i = theexpanseSystemItemSheet.item.type.toLowerCase();
    const itemType = i[0].toUpperCase() + i.slice(1);
    const itemWindowId = theexpanseSystemItemSheet.actor ? `actor-${theexpanseSystemItemSheet.actor.id}-item-${theexpanseSystemItemSheet.item.id}` : `item-${theexpanseSystemItemSheet.item.id}`;
    let itemWindow = document.getElementById(itemWindowId);
    let windowHeader = itemWindow.children[0].firstElementChild;
    windowHeader.textContent += ` [${game.i18n.localize("ITEM.Type" + itemType)}]`;
};

export function sortObjArrayByName(nameArray, nameKey) {
    return nameArray.sort(function(a, b) {
        const nameA = a[nameKey].toLowerCase();
        const nameB = b[nameKey].toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
    });
}