# Everform Shopify Theme

Custom Shopify Online Store 2.0 theme for Everform - UK manufacturer of architectural metalwork and Corten steel products.

## Overview

This theme is designed specifically for Everform's B2B/B2C business model, featuring:

- **Dual VAT Pricing Display**: Shows both Ex VAT and Inc VAT prices (critical UK B2B requirement)
- **Two Product Template Types**: Simple (planters, edging) and Technical (copings, window pods with specifications)
- **Industrial Design System**: Clean, precise, professional aesthetic
- **Performance Optimized**: Core Web Vitals ready, lazy loading, optimized assets
- **SEO-First**: Schema markup, meta tags, semantic HTML
- **Accessible**: WCAG AA compliant, keyboard navigation, screen reader support

## Design Philosophy

**No AI-slop aesthetics** - This theme follows strict design principles:
- Clean, industrial Swiss design influence
- Mathematical grids and precise spacing
- Generous whitespace
- Disciplined accent color use (teal only)
- No gradients, glassmorphism, or excessive shadows
- Product photography as hero content

## Technology Stack

- **Shopify Online Store 2.0** (JSON templates, sections, blocks)
- **Vanilla JavaScript** (ES6, no frameworks)
- **CSS Custom Properties** (design tokens)
- **Liquid Templating**
- **BEM Naming Convention**

## Theme Structure

```
everformtest/
├── assets/
│   ├── base.css                 # Reset, variables, utilities
│   ├── typography.css           # Type system
│   ├── layout.css               # Grid, containers
│   ├── components.css           # Buttons, cards, forms, etc.
│   └── theme.js                 # Main JavaScript
├── config/
│   ├── settings_schema.json    # Theme settings
│   └── settings_data.json       # Default settings values
├── layout/
│   └── theme.liquid             # Main HTML structure
├── locales/
│   └── en.default.json          # English translations
├── sections/
│   ├── header.liquid            # Site header
│   ├── footer.liquid            # Site footer
│   ├── product-info.liquid      # Product details (VAT pricing)
│   ├── technical-accordions.liquid
│   ├── size-chart-table.liquid
│   └── [other sections]
├── snippets/
│   ├── product-price.liquid     # VAT pricing snippet
│   ├── meta-tags.liquid         # SEO meta tags
│   ├── product-card.liquid      # Product grid card
│   └── [other snippets]
├── templates/
│   ├── index.json               # Homepage
│   ├── collection.json          # Product listings
│   ├── product.simple.json      # Simple products
│   ├── product.technical.json   # Technical products
│   ├── cart.json                # Cart page
│   ├── page.quotation.json      # Quote request
│   ├── page.projects.json       # Projects gallery
│   └── [other templates]
└── README.md                     # This file
```

## VAT Pricing System (CRITICAL FEATURE)

### Overview
UK businesses require clear VAT pricing for both B2B and B2C transactions. This theme displays:
- **Ex VAT price** (base price)
- **Inc VAT price** (calculated automatically)
- Both prices update dynamically when customer selects variants

### Implementation
Located in `snippets/product-price.liquid`:

```liquid
{% render 'product-price', product: product %}
```

### Theme Settings
Configure in Theme Editor > Theme settings > VAT Settings:
- Enable Ex VAT + Inc VAT Display (checkbox)
- VAT Rate (%) - Default: 20 (UK standard rate)
- Ex VAT Label - Default: "Ex VAT"
- Inc VAT Label - Default: "Inc VAT"

### How It Works
1. Product prices in Shopify are stored as **Ex VAT**
2. Liquid calculates Inc VAT: `price × 1.20` (for 20% VAT)
3. JavaScript updates prices when variant changes
4. Checkout automatically applies correct VAT based on customer location

## Product Metafields

### Required Metafield Definitions

Create these metafields in **Shopify Admin > Settings > Custom Data > Products**:

#### For All Products

| Namespace | Key | Type | Name |
|-----------|-----|------|------|
| `custom` | `material` | Single line text | Material |
| `custom` | `lead_time` | Single line text | Lead Time |
| `custom` | `warranty` | Single line text | Warranty |

#### For Technical Products Only

| Namespace | Key | Type | Name |
|-----------|-----|------|------|
| `custom` | `thickness` | Single line text | Thickness/Gauge |
| `custom` | `standards_compliance` | Multi-line text | Standards Compliance |
| `custom` | `engineering_drawing` | File (Image) | Engineering Drawing |
| `custom` | `size_chart` | Rich text | Size Chart |
| `custom` | `installation_guide` | Rich text | Installation Guide |
| `custom` | `technical_datasheet` | File (PDF) | Technical Datasheet |
| `custom` | `delivery_info` | Rich text | Delivery Information |
| `custom` | `features_list` | List of single line text | Features List |

### Usage Example

**In product template:**
```liquid
{% if product.metafields.custom.engineering_drawing %}
  <img src="{{ product.metafields.custom.engineering_drawing | image_url: width: 1500 }}"
       alt="Technical drawing of {{ product.title }}">
{% endif %}
```

## Product Templates

### 1. Simple Product Template (`product.simple.json`)

For planters, edging, and straightforward products.

**Features:**
- Image gallery (4-6 images)
- VAT pricing
- Variant selectors (size, finish)
- Quantity selector
- Add to cart button
- Basic description
- Related products
- Quote CTA

**Assign to:**
- Corten planters
- Aluminium planters
- Corten edging
- Simple walls

### 2. Technical Product Template (`product.technical.json`)

For copings, window pods, and products requiring specifications.

**Features:**
All simple template features PLUS:
- Engineering drawing (zoomable)
- Size chart table
- Technical accordions:
  - Features (certifications, performance specs)
  - Specifications (materials, manufacturing)
  - Installation Guide
  - Delivery FAQs
- Media gallery (16+ images)
- Downloadable documents

**Assign to:**
- Aluminium copings
- Window pods
- Technical facades
- Architectural products

## Theme Customization

### Colors

Edit in **Theme Editor > Theme settings > Colors**:

```css
--color-primary: #183E3F         /* Teal accent */
--color-primary-dark: #0F2627    /* Hover state */
--color-primary-light: #2A5F61   /* Badges */
--color-black: #1A1A1A           /* Text */
--color-charcoal: #333333        /* Secondary text */
--color-gray: #666666            /* Muted text */
```

### Typography

Edit in **Theme Editor > Theme settings > Typography**:

- **Heading Font**: Archivo (Bold 700)
- **Body Font**: Questrial (Regular 400)
- **Base Font Size**: 16px (adjustable 14-18px)

### Layout

Edit in **Theme Editor > Theme settings > Layout**:

- **Container Max Width**: 1440px (adjustable 1200-1600px)
- **Section Padding Desktop**: 80px (adjustable 40-120px)
- **Section Padding Mobile**: 48px (adjustable 24-80px)

### Contact Information

Edit in **Theme Editor > Theme settings > Contact Information**:

- Email: enquiries@everform.co.uk
- Phone: 02380 170146
- Hours: Mon-Fri, 08:00-17:30
- Address: 75 Bournemouth Road, Chandlers Ford, SO53 3AP
- Instagram: @everformltd
- YouTube: @everformlimited

## Navigation Setup

### Header Menu

Create menu: **Navigation > Main menu**

```
HOME
PRODUCTS (dropdown)
  ├─ Corten Steel
  │   ├─ Corten Planters
  │   ├─ Corten Edging
  │   └─ Corten Walls
  ├─ Aluminium Products
  │   ├─ Aluminium Planters
  │   ├─ Aluminium Copings
  │   └─ Window Pods
  └─ View All Products
SERVICES (dropdown)
  ├─ Bespoke Fabrications
  ├─ Design & Engineering
  ├─ Manufacturing & Supply
  └─ Installation Services
PROJECTS
REQUEST QUOTE
ABOUT
BLOG
CONTACT
```

### Footer Menu

Create menu: **Navigation > Footer menu**

5 columns configured in **Theme Editor > Sections > Footer**

## Forms

### Contact Forms

Theme includes 3 contact form locations:
1. Homepage (optional section)
2. Contact page
3. Cart page (embedded)

**Fields:**
- Name (required)
- Email (required)
- Phone (optional)
- Message (required)

### Request Quotation Form

Located at `/pages/quotation-form`

**Integration options:**
1. **Pify Form Builder** (current) - Embedded iframe
2. **Shopify Native Form** - Alternative if migrating from Pify
3. **Klaviyo Form** - Alternative for marketing integration

**Critical:** Maintain 48-hour response guarantee messaging

## Projects Gallery

### Setup

1. Create page: `/pages/projects`
2. Assign template: `page.projects.json`
3. Add projects via **Theme Editor > Templates > page.projects**

### Project Card Block Settings

- **Image**: Upload project photo (1200×900px, 4:3 aspect ratio)
- **Title**: Project name
- **Link** (optional): URL to full project details
- **CTA Text** (optional): "View Project"

### Carousel Settings

- **Mobile**: 1.5 slides visible
- **Tablet**: 2 slides visible
- **Desktop**: 3 slides visible
- **Effect**: Coverflow (3D perspective)

## Cart Settings

Edit in **Theme Editor > Theme settings > Cart**:

- **Show Contact Form in Cart**: ✓ Enabled (recommended)
- **Show Order Notes Field**: ✓ Enabled (recommended)

## SEO

### Schema Markup

Automatically included:

1. **Organization Schema** (sitewide) - `layout/theme.liquid`
2. **Product Schema** - `product` templates
3. **LocalBusiness Schema** - About/Contact pages (when created)
4. **FAQ Schema** - Technical accordions (when FAQ format used)

### Meta Tags

Dynamic meta tags in `snippets/meta-tags.liquid`:
- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- Product-specific tags
- Article-specific tags

### Image Optimization

**Guidelines:**

| Type | Dimensions | Format | Max Size |
|------|-----------|--------|----------|
| Product primary | 1200×1500px (4:5) | JPG/WebP | 150KB |
| Engineering drawing | 1500×1000px | PNG | 100KB |
| Collection banner | 1920×600px | JPG/WebP | 250KB |
| Project gallery | 1200×900px (4:3) | JPG/WebP | 200KB |

**Alt text format:**
- Product: `{Product Name} in {Material} - {View Type}`
- Drawing: `Technical drawing of {Product Name} showing {Specs}`
- Project: `{Project Name} - {Product Used}`

## Development

### Local Development

**Prerequisites:**
- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli/install)
- Node.js 14+
- Git

**Setup:**

```bash
# Clone repository
git clone [repository-url]
cd everformtest

# Login to Shopify
shopify login

# Connect to your store
shopify theme dev --store=[your-store.myshopify.com]
```

**Hot reload:** Changes auto-sync to preview URL

### Code Standards

**Liquid:**
- Use `{% liquid %}` tag for multi-line logic
- Limit nesting to 2 levels
- Comment complex logic
- Use snippets for reusable components

**JavaScript:**
- Vanilla JS only (no jQuery, React, Vue)
- ES6 syntax (const, let, arrow functions)
- Async/await for async operations
- Event delegation for dynamic content

**CSS:**
- BEM naming convention
- CSS Custom Properties for theming
- Mobile-first media queries
- Limit nesting to 3 levels

### File Naming

- **Sections**: `section-name.liquid` (lowercase, hyphens)
- **Snippets**: `snippet-name.liquid` (lowercase, hyphens)
- **Templates**: `template.type.json` (lowercase, dots)
- **Assets**: `asset-name.css` or `asset-name.js` (lowercase, hyphens)

## Deployment

### To Staging (Development Theme)

```bash
shopify theme push --development
```

### To Production (Live Theme)

```bash
# Push to unpublished theme
shopify theme push --unpublished

# Test thoroughly on preview URL

# Publish when ready
shopify theme publish --theme-id=[theme-id]
```

### Pre-Launch Checklist

- [ ] All products have correct VAT pricing
- [ ] Product metafields populated (technical products)
- [ ] Navigation menus configured
- [ ] Contact information updated
- [ ] Forms tested (contact, quotation, cart)
- [ ] Projects gallery populated
- [ ] All images optimized and have alt text
- [ ] Test checkout flow (VAT calculation)
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit (score > 90)
- [ ] Test accessibility (keyboard navigation)
- [ ] Review all policy pages
- [ ] Set up 301 redirects if URLs changed

## Performance

### Core Web Vitals Targets

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Optimization Techniques

1. **Images**: WebP format, lazy loading, responsive srcset
2. **CSS**: Critical CSS inlined, rest deferred
3. **JavaScript**: Deferred loading, code splitting
4. **Fonts**: Font-display: swap, preload
5. **Third-party scripts**: Lazy load, async
6. **Caching**: Browser caching, CDN (Shopify CDN automatic)

## Browser Support

- **Chrome** (last 2 versions)
- **Firefox** (last 2 versions)
- **Safari** (last 2 versions)
- **Edge** (last 2 versions)
- **iOS Safari** (last 2 versions)
- **Chrome Mobile** (last 2 versions)

## Accessibility

- **WCAG 2.1 AA Compliant**
- Keyboard navigation (all interactive elements)
- Screen reader support (ARIA labels, semantic HTML)
- Focus visible states (never removed)
- Color contrast > 4.5:1
- Touch targets > 44px
- Skip to content link
- Alt text on all images

## Troubleshooting

### VAT Pricing Not Updating

1. Check variant has price set
2. Verify VAT rate in Theme settings
3. Check browser console for JavaScript errors
4. Ensure `theme.js` is loaded

### Product Images Not Displaying

1. Verify image URLs in Shopify Admin
2. Check image file size (< 5MB)
3. Ensure aspect ratio matches template
4. Clear browser cache

### Forms Not Submitting

1. Check hCaptcha is configured
2. Verify form action URL
3. Check spam settings in Shopify
4. Test with different email domain

## Support

For technical support or questions:

- **Developer Documentation**: [Shopify Theme Docs](https://shopify.dev/docs/themes)
- **Everform Contact**: enquiries@everform.co.uk
- **Phone**: 02380 170146

## License

Proprietary - © 2024 Everform Ltd. All rights reserved.

## Changelog

### Version 1.0.0 (2024-01-18)
- Initial theme release
- VAT pricing system
- Two product template types
- Design system implementation
- SEO schema markup
- Accessibility features
