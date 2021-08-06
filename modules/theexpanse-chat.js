export function addChatListeners(html) {
    html.on('click', '.roll-damage', chatDamageRoll);
    html.on('contextmenu', '.roll-damage', chatDamageRoll);
    html.on('click', '.roll-fatigue', chatFatigueRoll);
    html.on('contextmenu', '.roll-fatigue', chatFatigueRoll);
    html.on('click', '.roll-item', rollItemFromChat);
    html.on('contextmenu', '.roll-item', rollItemFromChat);
};

export async function chatDamageRoll(event) {
    event.preventDefault();
    let owner = null;
    const classList = event.currentTarget.classList;
    const card = event.type === "contextmenu" ? event.target.closest(".feature-controls") : event.currentTarget.closest(".feature-controls");
    const actorId = card.dataset.actorId;
    if (actorId) owner = game.actors.get(actorId) ?? await fromUuid(actorId); // this section is to keep chat compatibilities with version 0.7.4 and ealier
    owner = owner?.actor ?? owner;
    if (!owner) return ui.notifications.warn(game.i18n.localize("theexpanse-system.WARNING.originTokenMissing"));
    const itemSource = owner.items.get(card.dataset.itemId);

    let stuntDie = null;
    let addFocus = false;
    let resistedDamage = false;
    if (classList.contains('add-stunt-damage')) {
        stuntDie = card.dataset.stuntDie;
    };
    if (classList.contains('add-focus-damage')) {
        addFocus = true;
    };
    if (classList.contains('resisted')) {
        resistedDamage = true;
    };

    const damageData = {
        event: event,
        stuntDie: stuntDie,
        addFocus: addFocus,
        atkDmgTradeOff: card.dataset.atkdmgTrade,
        resistedDmg: resistedDamage,
    };
    itemSource.rollDamage(damageData);
};

export async function chatFatigueRoll(event) {
    let owner = null;
    const card = event.currentTarget.closest(".feature-controls");
    const actorId = card.dataset.actorId;
    owner = await fromUuid(actorId) ?? game.actors.get(actorId); // this section is to keep chat compatibilities with version 0.7.4 and ealier
    owner = owner?.actor ?? owner;
    if (!owner) return ui.notifications.warn(game.i18n.localize("theexpanse-system.WARNING.originTokenMissing"));
    const itemSource = owner.items.get(card.dataset.itemId);
    itemSource.roll(event, "fatigue");
};

export async function rollItemFromChat(event) {
    const classList = event.currentTarget.classList;
    const actorUuid = event.currentTarget.closest(".feature-controls").dataset.ownerUuid;
    const itemId = event.currentTarget.closest(".feature-controls").dataset.itemId;
    let owner = await fromUuid(actorUuid);
    owner = owner?.actor ?? owner;
    const item = owner.items.get(itemId);
    if (classList.contains("damage")) item.rollDamage({event});
    if (classList.contains("attack")) item.roll(event);
}

export async function sortCustomTheExpanseChatCards(chatCard, html, data) {
    // Add attribute type="button" to THE EXPANSE buttons
    _buttonType(html.find(".theexpanse-system.item-chat-controls button"));
    _buttonType(html.find("button.theexpanse-button"));

    // Toggle chat card visibility of THE EXPANSE Roll Cards
    if (html.find(".base-theexpanse-roll").length > 0) _handleTheExpanseRollVisibility(html, chatCard, data);

    // Check permission level to show and roll chat buttons when rolling item card
    if (html.find(".item-chat-controls").length > 0) _handleItemCardButton(html);
};

function _buttonType(buttons) {
    for (let b = 0; b < buttons.length; b++) {
        const button = buttons[b];
        button.type = "button";
    }
}

async function _handleTheExpanseRollVisibility(html, chatCard, chatData){
    const element = html.find(".theexpanse-system.base-theexpanse-roll .feature-controls");
    for (let e = 0; e < element.length; e++) {
        const el = element[e];
        const data = el.dataset;
        const actorId = data.actorId;
        let actor;
        if (actorId) actor = game.actors.get(actorId) ?? await fromUuid(actorId); // this section is to keep chat compatibilities with version 0.7.4 and ealier
        actor = actor?.actor ?? actor;
        const isBlind = chatCard.data.blind;
        const whisperTo = chatData.message.whisper;
        const author = chatData.author.id;
        const userId = game.user.id;
    
        if ((whisperTo.includes(userId) || whisperTo.length < 1 || author === userId) && !isBlind) {
            el.querySelector(".blind-roll-card").style.display = "none";
        } else {
            if (isBlind && whisperTo.includes(userId)) {
                el.querySelector(".blind-roll-card").style.display = "none";
            } else {
                el.querySelector(".regular-roll-card").style.display = "none";
                const hideField = userId === author ? ".other-user-roll" : ".user-roll";
                el.querySelector(`.blind-roll-card ${hideField}`).style.display = "none";
            }
        }
        _permCheck(actor?.permission, el.querySelector(`.theexpanse-chat-buttons-grid`));
    }
}

async function _handleItemCardButton(html){
    const sectionClass = `.item-chat-controls`
    const data = html.find(sectionClass);
    for (let d = 0; d < data.length; d++) {
        const el = data[d];
        const actorId = el.dataset.ownerUuid;
        let actor;
        if (actorId) actor = await fromUuid(actorId);
        _permCheck(actor?.permission, el, sectionClass);
    }
}

function _permCheck(actorPerm, element) {
    if (!element) return
    const validPerm = [CONST.ENTITY_PERMISSIONS.OWNER];
    if (game.settings.get("theexpanse-system", "observerRoll")) validPerm.push(CONST.ENTITY_PERMISSIONS.OBSERVER);
    if (!validPerm.includes(actorPerm)) element.style.display = "none";
}