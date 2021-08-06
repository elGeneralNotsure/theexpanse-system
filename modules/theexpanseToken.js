export class theexpanseToken extends Token {

    async _onCreate(tokenData, options, userId) {
        super._onCreate(tokenData, options, userId);
        // Ensure this change occurs only once
        if (game.user.id !== userId) return
        if (this.actor?.data?.type !== "char") return;
        const updateData = {};
        if (!this.data.bar1?.attribute) updateData["bar1.attribute"] = "health";
        if (!this.data.bar2?.attribute) {
            const barData = game.settings.get("theexpanse-system", "usePowerPoints") ? "powerPoints" : ((this.actor.hasPlayerOwner) && (game.settings.get("theexpanse-system", "useConviction")) ? "conviction" : null);
            updateData["bar2.attribute"] = barData;
        }
        if (this.actor.hasPlayerOwner) {
            updateData["displayBars"] = 10;
            updateData["disposition"] = 1;
            updateData["actorLink"] = token.data.actor && true;
        } else {
            updateData["displayBars"] = 20;
        };

        await this.document.update(updateData);
    }
};