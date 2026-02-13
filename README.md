# The Modern Café - Restaurant Menu

A modern, mobile-friendly restaurant menu webpage built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Optimized for smartphones, tablets, and desktops
- **Modern UI**: Clean, minimalist design with soft colors and elegant typography
- **Multiple Sections**: Organized menu categories (Coffee, Drinks, Desserts, Snacks)
- **Easy Navigation**: Interactive category tabs with smooth transitions
- **Keyboard Accessible**: Full keyboard navigation support
- **Print Ready**: Beautiful print layout for taking physical copies
- **Contact Information**: Header and footer with business details
- **Mobile-First Approach**: Optimized mobile experience with progressive enhancement

## File Structure

```
.
├── index.html       # Main HTML structure
├── style.css        # All styling and responsive breakpoints
├── script.js        # Interactive functionality
├── vercel.json      # Vercel deployment configuration
├── .gitignore       # Git ignore file
├── package.json     # Project metadata
└── README.md        # This file
```

## How to Use

### Local Development

1. **Clone or download the repository**
2. **Open in VS Code**: `code .`
3. **Use Live Server** (VS Code Extension):
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"
   - The menu will open at `http://localhost:5500`

### Or simply open the file:
```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

## Deployment on Vercel

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from your project directory
vercel
```

### Option 2: GitHub Integration
1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click "Deploy" - Vercel automatically detects it's a static site
5. Your site will be live with a URL like: `https://your-project.vercel.app`

### Option 3: Drag & Drop
1. Go to [vercel.com](https://vercel.com)
2. Sign in or create an account
3. Drag and drop the entire folder onto Vercel
4. Your site will be deployed instantly

## QR Code Integration

Once deployed on Vercel, you can generate a QR code for your menu:

1. Copy your Vercel URL (e.g., `https://your-modern-cafe.vercel.app`)
2. Use a QR code generator like:
   - [QR Code Generator](https://www.qr-code-generator.com)
   - [ZXing QR Code Generator](https://zxing.appspot.com)
3. Display the QR code in your restaurant:
   - Near the entrance
   - On table placards
   - In printed advertisements
   - On your storefront

## Customization Guide

### Update Restaurant Info
Edit `index.html`:
- Line 13: Change `<h1>` to your restaurant name
- Line 14: Update the tagline
- Lines 222-229: Update contact information

### Modify Menu Items
Edit `index.html` and find each section (Coffee, Drinks, Desserts, Snacks):
- Replace item names in `<h3 class="item-name">`
- Update prices in `<span class="item-price">`
- Change descriptions in `<p class="item-description">`

### Change Colors
Edit `style.css` (lines 1-10):
```css
:root {
    --primary-color: #c9ada7;      /* Main color */
    --secondary-color: #9a8c98;    /* Secondary color */
    --accent-color: #d4a5a5;       /* Accent color */
    --background-color: #f5f5f5;   /* Background */
    --card-background: #ffffff;    /* Card backgrounds */
    --text-color: #2c2c2c;         /* Text color */
}
```

### Change Fonts
Edit `style.css` line 20:
```css
font-family: 'Your Font Name', sans-serif;
```

## Responsive Breakpoints

The design includes optimized layouts for:
- **Mobile**: < 480px (phones)
- **Mobile**: 480px - 768px (larger phones)
- **Tablet**: 769px - 1024px
- **Desktop**: > 1025px

## Accessibility Features

- ✅ Semantic HTML structure
- ✅ Keyboard navigation (arrow keys between categories)
- ✅ ARIA labels for screen readers
- ✅ High contrast colors
- ✅ Readable font sizes
- ✅ Respects `prefers-reduced-motion`

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

The site is optimized for performance:
- **Fast Loading**: Minimal CSS, no external dependencies
- **No JavaScript Libraries**: Pure vanilla JavaScript
- **Optimized Images**: Text-based emojis instead of image files
- **Small File Size**: Entire site < 50KB total

## Advanced Features (Optional)

Uncomment code in `script.js` to enable:
- Service Worker for offline support (PWA)
- Google Analytics integration
- Item search functionality
- Social media sharing

## Troubleshooting

### Menu not switching categories
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console (F12) for errors
- Ensure JavaScript is enabled

### Styling looks wrong on mobile
- Check device viewport setting
- Clear cache and refresh
- Test in different browsers

### QR code not working
- Verify it was generated from correct URL
- Test by scanning with multiple devices
- Check that Vercel deployment is still active

## License

Free to use and modify for your restaurant.

## Support

For issues or questions:
1. Check the customization guide above
2. Review the code comments in HTML/CSS/JS files
3. Test in different browsers
4. Check Vercel deployment logs

---

**Created**: February 2026
**Version**: 1.0
**Status**: Production Ready
