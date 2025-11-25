# Responsive Header with Dark Mode Toggle

This folder contains two complete examples of modern, responsive headers with smooth dark mode toggle functionality.

## Files

### 1. `modern-header.html` - Tailwind CSS Version
- Uses Tailwind CSS for rapid styling
- Modern utility-first approach
- Easy to customize with Tailwind classes

### 2. `header-vanilla-css.html` - Vanilla CSS Version
- Pure CSS implementation (no dependencies)
- Complete custom styling
- Better for learning and full control

## Features

### ✅ Responsive Design
- **Desktop**: Full navigation menu with all links visible
- **Mobile**: Hamburger menu with slide-down navigation
- **Tablet**: Optimized for medium screens

### ✅ Perfect Dark Mode Toggle
- **No Layout Shifts**: Header, logo, and content stay perfectly aligned
- **Smooth Transitions**: Only colors transition (0.3s ease)
- **Scroll Preservation**: Page position maintained during toggle
- **LocalStorage**: Theme preference saved and restored

### ✅ Fixed Header
- Stays at top of page while scrolling
- Proper z-index for overlay
- Shadow for depth
- Padding compensation for content

### ✅ Modern Design
- Clean, professional appearance
- Hover effects on navigation links
- Animated theme toggle icons
- Card-based content sections

## Key Implementation Details

### Preventing Layout Shifts

```css
html {
    overflow-y: scroll;
    scrollbar-gutter: stable;
}
```
This ensures scrollbar space is always reserved, preventing horizontal shifts.

### Smooth Color Transitions Only

```css
body, .header, .nav-link {
    transition: background-color 0.3s ease, color 0.3s ease;
}
```
Only colors transition - no transform, position, or layout properties.

### Fixed Button Size

```css
.theme-toggle {
    width: 44px;
    height: 44px;
    flex-shrink: 0;
}
```
Prevents button from resizing and causing shifts.

### Scroll Position Preservation

```javascript
function setDarkMode(isDark) {
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;
    
    // Toggle theme...
    
    requestAnimationFrame(() => {
        window.scrollTo(scrollX, scrollY);
    });
}
```

## Usage

1. Open either HTML file in a web browser
2. Click the sun/moon icon to toggle dark mode
3. Resize browser to see responsive behavior
4. On mobile, click hamburger menu for navigation

## Customization

### Colors
- **Light Mode**: Edit background-color and color properties
- **Dark Mode**: Edit `.dark-mode` class styles

### Logo
Replace the SVG logo with your own:
```html
<svg class="logo-icon" viewBox="0 0 24 24">
    <!-- Your logo path -->
</svg>
```

### Navigation Links
Add or remove links in the nav sections:
```html
<a href="#your-section" class="nav-link">Your Link</a>
```

## Browser Support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)
- IE11 not supported (uses modern CSS features)

## Performance
- No external dependencies (vanilla version)
- Minimal JavaScript
- CSS transitions hardware-accelerated
- LocalStorage for theme persistence

## Accessibility
- ARIA labels on buttons
- Keyboard navigation support
- Semantic HTML structure
- Proper contrast ratios

## License
Free to use for personal and commercial projects.
