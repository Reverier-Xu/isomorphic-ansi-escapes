const ESC = '\u001B'
const CSI = `${ESC}[`
const OSC = `${ESC}]`
const BEL = '\u0007'
const SEP = ';'

const ansiEscapes = {
	ESC,
	CSI,
	OSC,
	BEL,
	SEP,
	cursorTo: (x: number, y?: number) => {
		let seq = `${CSI}${x + 1}G`
		if (y) seq += `${CSI}${y + 1}d`
		return seq
	},
	cursorMove: (x: number, y?: number) => {
		let returnValue = ''
		if (x < 0)
			returnValue += `${CSI}${-x}D`
		else if (x > 0)
			returnValue += `${CSI}${x}C`

		if (y && y < 0)
			returnValue += `${CSI}${-y}A`
		else if (y && y > 0)
			returnValue += `${CSI}${y}B`

		return returnValue
	},
	cursorUp: (count = 1) => `${CSI}${count}A`,
	cursorUp1: `${CSI}A`,
	cursorDown: (count = 1) => `${CSI}${count}B`,
	cursorDown1: `${CSI}B`,
	cursorForward: (count = 1) => `${CSI}${count}C`,
	cursorForward1: `${CSI}C`,
	cursorBackward: (count = 1) => `${CSI}${count}D`,
	cursorBackward1: `${CSI}D`,
	cursorLeft: `${CSI}G`,
	cursorSavePosition: `${CSI}s`,
	cursorRestorePosition: `${CSI}u`,
	cursorGetPosition: `${CSI}6n`,
	cursorNextLine: `${CSI}E`,
	cursorPrevLine: `${CSI}F`,
	cursorHide: `${CSI}?25l`,
	cursorShow: `${CSI}?25h`,
	eraseLines: (count: number) => {
		let clear = ''
		for (let i = 0; i < count; i++) {
			clear += ansiEscapes.eraseLine + (i < count - 1 ? ansiEscapes.cursorUp() : '')
		}
		if (count) clear += ansiEscapes.cursorLeft
		return clear
	},
	eraseEndLine: `${CSI}K`,
	eraseStartLine: `${CSI}1K`,
	eraseLine: `${CSI}2K`,
	eraseDown: `${CSI}J`,
	eraseUp: `${CSI}1J`,
	eraseScreen: `${CSI}2J`,
	scrollUp: `${CSI}S`,
	scrollDown: `${CSI}T`,
	clearScreen: `${ESC}c`,
	clearTerminal: () => { return `${ansiEscapes.eraseScreen}${CSI}3J${CSI}H` },
	beep: BEL,
	link: (text: string, url: string) => [OSC, '8', SEP, SEP, url, BEL, text, OSC, '8', SEP, SEP, BEL].join(''),
	delete: `${CSI}3~`,
	home: `${CSI}H`,
	end: `${CSI}F`,
	blank: (count = 1) => `${CSI}${count}@`,
}

export default ansiEscapes
