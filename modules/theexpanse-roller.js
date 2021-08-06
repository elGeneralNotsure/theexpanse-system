import { theexpanseRollCheck } from "./dice.js";

export class TheExpanseRoller extends Application {
	constructor(options = {}) {
		super(options)
	}

	get template() {
		return `systems/theexpanse-system/templates/rolls/theexpanse-roller.hbs`;
	}
	
	getData(options) {
		const data = super.getData(options);
		data.colorset = game.settings.get("theexpanse-system", "colorScheme");
		return data;
	}
	
	activateListeners(html) {
		super.activateListeners(html);
		html.find("#theexpanse-roller img").click(this._onClick.bind(this));
		html.find("#theexpanse-roller img").contextmenu(this._onRightClick.bind(this));
		html.find("#theexpanse-roller-drag").contextmenu(this._onResetPosition.bind(this));

		// Set position
		let roller = document.getElementById("theexpanse-roller");
		const rollerPos = game.user.getFlag("theexpanse-system", "theexpanseRollerPos");
		roller.style.left = rollerPos.xPos;
		roller.style.bottom = rollerPos.yPos;

		// Make the DIV element draggable:
		this._dragElement(roller);
	}
	
	refresh() {
		this.render(true);
	}

 	async _onClick(event) {
		event.preventDefault();
		const user = game.user.name;
		const rollHeader = game.i18n.format("theexpanse-system.chatCard.looseRoll", {user});
        theexpanseRollCheck({event: event, flavor: rollHeader});
	}

	async _onRightClick(event) {
		event.preventDefault();
		let roll = await new Roll("1d6").evaluate({async: true});
		return roll.toMessage({}, {rollMode: event.shiftKey ? "blindroll" : ""});
	}

	_onResetPosition(event) {
		const elmnt = event.currentTarget.closest("#theexpanse-roller");
		const original = CONFIG.theexpanseSystem.theexpanseRollerPos;
		elmnt.style.left = original.xPos;
		elmnt.style.bottom = original.yPos;
		game.user.setFlag("theexpanse-system", "theexpanseRollerPos", original);
	}

	_dragElement(elmnt) {
		var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
		if (document.getElementById("theexpanse-roller-drag")) {
		  // if present, the header is where you move the DIV from:
		  document.getElementById("theexpanse-roller-drag").onmousedown = dragMouseDown;
		} else {
		  // otherwise, move the DIV from anywhere inside the DIV:
		  elmnt.onmousedown = dragMouseDown;
		}
	  
		function dragMouseDown(e) {
		  e = e || window.event;
		  e.preventDefault();
		  // get the mouse cursor position at startup:
		  pos3 = e.clientX;
		  pos4 = e.clientY;
		  document.onmouseup = closeDragElement;
		  // call a function whenever the cursor moves:
		  document.onmousemove = elementDrag;
		}
	  
		function elementDrag(e) {
			e = e || window.event;
			e.preventDefault();
			// calculate the new cursor position:
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			// set the element's new position:
			elmnt.style.bottom = (elmnt.offsetParent.clientHeight - elmnt.offsetTop - elmnt.clientHeight + pos2) + "px";
			elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		}
	  
		function closeDragElement() {
		  	// stop moving when mouse button is released:
		  	document.onmouseup = null;
		  	document.onmousemove = null;
		  	// Save position on appropriate User Flag
			const rollerPos = {};
			rollerPos.xPos = elmnt.style.left;
			rollerPos.yPos = elmnt.style.bottom;
			game.user.setFlag("theexpanse-system", "theexpanseRollerPos", rollerPos);
		}
	}
}