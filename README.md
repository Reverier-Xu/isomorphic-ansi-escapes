# Isomorphic Ansi-Escapes

> [ANSI escape codes](http://www.termsys.demon.co.uk/vtansi.htm) for manipulating the terminal

A fork of [sindresorhus/ansi-escapes](https://github.com/sindresorhus/ansi-escapes) that remove node dependencies to support in-browser use (exactly, [xterm.js](http://xtermjs.org/)).

## Installation

```shell
# Using pnpm
pnpm add isomorphic-ansi-escapes
# Or yarn
yarn add isomorphic-ansi-escapes
```

## Use with xterm

```typescript
import ansiEscapes from 'isomorphic-ansi-escapes'
import { Terminal } from 'xterm'
import 'xterm/css/xterm.css'

...
const term = new Terminal({...})
...

// Moves the cursor two rows up and to the left
term.write(ansiEscapes.cursorUp(2) + ansiEscapes.cursorLeft)
//=> '\u001B[2A\u001B[1000D'

...
```

## API

### cursorTo(x, y?)

Set the absolute position of the cursor. `x0` `y0` is the top left of the screen.

### cursorMove(x, y?)

Set the position of the cursor relative to its current position.

### cursorUp(count)

Move cursor up a specific amount of rows. Default is `1`.

### cursorUp1

Move cursor up 1 row.

> tips: if you'd like to `switch` user input, this sugar maybe helpful.

### cursorDown(count)

Move cursor down a specific amount of rows. Default is `1`.

### cursorDown1

Move cursor down 1 row.

### cursorForward(count)

Move cursor forward a specific amount of columns. Default is `1`.

### cursorForward1

Move cursor forward 1 col.

### cursorBackward(count)

Move cursor backward a specific amount of columns. Default is `1`.

### cursorBackward1

Move cursor backward 1 col.

### cursorLeft

Move cursor to the left side.

### cursorSavePosition

Save cursor position.

### cursorRestorePosition

Restore saved cursor position.

### cursorGetPosition

Get cursor position.

### cursorNextLine

Move cursor to the next line.

### cursorPrevLine

Move cursor to the previous line.

### cursorHide

Hide cursor.

### cursorShow

Show cursor.

### eraseLines(count)

Erase from the current cursor position up the specified amount of rows.

### eraseEndLine

Erase from the current cursor position to the end of the current line.

### eraseStartLine

Erase from the current cursor position to the start of the current line.

### eraseLine

Erase the entire current line.

### eraseDown

Erase the screen from the current line down to the bottom of the screen.

### eraseUp

Erase the screen from the current line up to the top of the screen.

### eraseScreen

Erase the screen and move the cursor the top left position.

### scrollUp

Scroll display up one line.

### scrollDown

Scroll display down one line.

### clearScreen

Clear the terminal screen. (Viewport)

### clearTerminal

Clear the whole terminal, including scrollback buffer. (Not just the visible part of it)

### beep

Output a beeping sound.

### link(text, url)

Create a clickable link.

[Supported terminals.](https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda) Use [`supports-hyperlinks`](https://github.com/jamestalmage/supports-hyperlinks) to detect link support.
