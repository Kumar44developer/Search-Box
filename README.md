# 🔍 Animated Expanding Search Box

A modern, animated expanding search component built with vanilla HTML, CSS, and JavaScript. Designed with smooth sliding transitions, icon rotation animations, and auto-focus handling to provide an intuitive user search experience.

---

## Features

- **Expanding Slider Animation**: Compact 60px search button expands smoothly into a 320px input field using custom cubic-bezier easing.
- **Icon Rotation & Crossfade**: Smoothly rotates and fades between the search magnifying glass (`fa-search`) and close icon (`fa-times`).
- **Automatic Input Focus**: Automatically places cursor focus inside the text input when opened.
- **State Reset**: Clears entered search text automatically when collapsed back to the closed state.
- **Pill UI & Drop Shadows**: Styled with rounded pill borders, soft depth shadows, and vibrant accent colors.
- **Zero Framework Overhead**: Built with pure HTML5, CSS3, and vanilla JavaScript.

---

## Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Semantic input and button layout |
| CSS3 | Flexbox centering, cubic-bezier transitions, transforms, and icon rotation |
| JavaScript (ES6) | Click event handling, class toggling, and input focus management |
| Font Awesome 6 | Search and close glyph icons |

---

## Project Structure

```
Search-Box/
├── index.html      
├── style.css       
├── script.js        
└── README.md        
```

---

## How It Works

1. **Collapsed State**: The `<input>` field and `<button>` share identical 60px dimensions and rounded pill geometry. The button sits atop the input displaying the `fa-search` icon.
2. **Expansion Interaction**: Clicking the button toggles the `.active` class on `.container`.
3. **CSS Transitions**:
   - The input's `width` expands from 60px to 320px.
   - The button slides across (`transform: translateX(260px)`) and shifts background color from white to royal blue (`#4169e1`).
   - The search icon rotates 90 degrees and fades to opacity `0`, while the close icon rotates into place at opacity `1`.
4. **Input Management**: The script automatically calls `input.focus()` on open, or clears `input.value` on close.

---

## Getting Started

No installation, build tools, or server configurations are needed.

### 1. Clone the repository

```bash
git clone https://github.com/Kumar44developer/Search-Box.git
```

### 2. Launch the application

Open `index.html` directly in any web browser, or launch it with an extension like VS Code Live Server.

---

## Customization

- **Adjust Expanded Width**: Modify the width in `.container.active .search` in `style.css`:
  ```css
  .container.active .search {
      width: 400px;
  }
  ```
  Adjust the button's translation distance (`translateX(...)`) accordingly.
- **Change Theme Colors**: Edit the background color in `body` or `.container.active .button` within `style.css`.
- **Modify Animation Speed**: Update the `transition` timing in `.search` and `.button` (e.g., `0.3s` for faster snapping).

---

## Author

**Kumar44developer** — [GitHub Profile](https://github.com/Kumar44developer)
