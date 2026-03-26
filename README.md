# 🚦 Traffic Light Simulator

A modern, sleek Traffic Light Simulator built with HTML, CSS, and JavaScript.

## Project Structure

```
Traffic-Lights/
├── index.html   → Page structure and layout
├── style.css    → Dark mode styling and glow effects
├── script.js    → Light sequence logic and auto-timer
└── README.md    → You are here
```

## How to Run

No installs, no build tools. Just open `index.html` in your browser.

## Features

- 💡 **Realistic Sequence** — Switches through Red, Amber, and Green in order
- 🕹️ **Manual Control** — Use the "Next Light" button to cycle manually
- 🤖 **Auto Mode** — Toggle automatic cycling with realistic durations (Red/Green: 4s, Amber: 1.5s)
- ✨ **Glow Effects** — CSS box-shadows create a realistic light emission effect
- 🌑 **Premium Dark UI** — Minimalist dark aesthetic for better visual impact

## What I Learned Building This

### HTML
- How to structure complex visual components using nested `div` elements
- Using `id` attributes for precise JavaScript DOM manipulation
- Organizing layouts with semantic containers for buttons and lights

### CSS
- **Flexbox** — Used for centering the housing and stacking bulbs vertically
- **Glow Effects** — Using `box-shadow` with RGBA transparency for light emission
- **Transitions** — Implementing `transition: opacity 0.3s ease` for smooth light switching
- **State Styling** — Creating an `.active` class to toggle visibility and glows
- **UI Design** — Using HSL/Hex colors and border-radius for a premium "housing" look

### JavaScript
- `document.getElementById` for targeting specific bulbs and buttons
- `setInterval` & `setTimeout` — Managing the timing for auto-mode
- **Modulo Operator (%)** — Using `(current + 1) % bulbs.length` to loop through the light array
- `classList.add/remove` — Toggling active states dynamically
- **State Management** — Using boolean flags (`autoMode`) to track the simulator's state
- **Functional Logic** — Separating manual triggers from the automatic sequence loop

## Credits

**Ernest** — Developer
Built this project as part of my IT course (Jan–Jul 2026).
Wrote all the HTML, CSS, and JavaScript from the ground up.

**Antigravity** — AI Coding Assistant  
Helped me structure and write this professional README based on the project template.

**Claude (Anthropic)** — Teaching Assistant  
Guided the build concept by concept — explained the logic of the modulo operator, CSS transitions, and timer management. Helped debug the auto-toggle sequence and refine the glow aesthetics.

**Resources**
- [MDN Web Docs](https://developer.mozilla.org) — JavaScript Timing Events
- [Google Fonts](https://fonts.google.com) — Modern monospace references
- [CSS-Tricks](https://css-tricks.com) — Flexbox guide
