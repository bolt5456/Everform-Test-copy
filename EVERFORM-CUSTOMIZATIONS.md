# Everform Theme Customizations - Complete Summary

## ✅ What I've Done

I've researched Everform's actual business and customized the Dawn theme with real company information and Everform-specific content.

---

## 🎨 1. Branding & Colors

**Updated Color Scheme:**
- Changed scheme-5 to Everform's signature teal: `#183E3F`
- This color now appears on the "Why Choose Everform" section
- Maintains professional industrial aesthetic

**Social Media:**
- Added Instagram: [@everformltd](https://www.instagram.com/everformltd)
- Added YouTube: [@everformlimited](https://www.youtube.com/@everformlimited)
- These links now appear in the footer

---

## 🏠 2. Homepage (index.json)

When you refresh your Shopify store, the homepage now has:

### Hero Banner Section
- **Heading:** "Architectural Metalwork Solutions"
- **Text:** "UK manufacturer of Corten steel planters, aluminium copings, and bespoke metalwork. BS EN 1090 certified with over 30 years' experience."
- **Buttons:**
  - Primary: "Shop Products" → All products
  - Secondary: "Request Quote" → Contact page
- **Position:** Left-aligned with text box overlay
- **Note:** You'll need to add a hero image through Shopify theme customizer

### Featured Collection: Corten Steel Planters
- **Heading:** "Corten Steel Planters"
- **Description:** "Handmade in Britain. Pre-weathered and un-weathered options available. Tool-free assembly with 5-year warranty."
- Shows 4 products in portrait aspect ratio
- **Note:** You'll need to create a "Corten Steel Planters" collection in Shopify

### Featured Collection: Architectural Metal Products
- **Heading:** "Architectural Metal Products"
- **Description:** "Precision-engineered aluminium copings, window pods, and fascias. Wind-tested to 182mph. BS EN 1090 certified."
- Shows 4 products in portrait aspect ratio
- Light gray background (scheme-2)

### Why Choose Everform (4 Columns)
Everform teal background with 4 key benefits:

1. **BS EN 1090 Certified**
   - "Our Southampton factory is certified to BS EN 1090 with over 30 years' experience in structural metalwork fabrication."

2. **Bespoke Fabrication**
   - "Custom designs from concept to completion. CNC precision manufacturing with 5-10 working day turnaround on bespoke projects."
   - "Learn More" button → Contact page

3. **Free UK Delivery**
   - "Free mainland UK delivery on all orders. Professional installation services available for architectural products."

4. **5-Year Warranty**
   - "All products backed by our comprehensive 5-year warranty. Built to last using premium materials and British craftsmanship."

### British Manufactured Section
- **Heading:** "British Manufactured Metal Fabrications"
- **Content:**
  - "Based in Southampton, Everform specialises in the design, manufacture and supply of fabricated architectural building elements and outdoor garden products."
  - Details about CNC machinery (punch, brake presses, stud welders, flatbed routers)
  - BS EN 1090 certification mention
- **Button:** "Contact Us" → Contact page

### Bespoke Services Section (Image + Text)
- **Heading:** "Bespoke Metal Fabrication Services"
- **Content:**
  - "From design to installation, we offer a complete end-to-end service"
  - Lists services:
    - Design & 3D Modelling (AutoCAD, Revit, Solidworks)
    - CNC Precision Manufacturing
    - Powder Coating & Finishing
    - Professional Installation
    - Project Management
- **Button:** "Request Custom Quote" → Contact page
- **Note:** Add an image of your factory/CNC equipment through theme customizer

### Contact Form Section
- **Heading:** "Get In Touch"
- Standard Shopify contact form
- Clean white background

---

## 🦶 3. Footer

**Real Everform Contact Information:**
- **Phone:** 07501 251618
- **Email:** enquiries@everform.co.uk
- **Address:**
  - 75 Bournemouth Road
  - Chandlers Ford
  - Eastleigh, Hampshire
  - SO53 3AP
- **Hours:** Mon-Fri, 8:00-17:30

**Footer Layout (4 Columns):**
1. **Products** - Link list (you'll customize in Shopify menus)
2. **Services** - Link list (you'll customize in Shopify menus)
3. **Company** - Link list (you'll customize in Shopify menus)
4. **Contact Us** - Shows all contact details above

**Footer Settings:**
- Dark background (scheme-4 - dark charcoal)
- Social media icons enabled (Instagram, YouTube)
- Payment icons enabled
- Policy links shown

---

## 💷 4. VAT Pricing System (CRITICAL for UK)

Created `snippets/vat-price.liquid` for UK VAT pricing display.

**Features:**
- Shows both Ex VAT and Inc VAT prices
- Default 20% UK VAT rate
- Automatic calculation: Inc VAT = Ex VAT × 1.20
- Clean, professional styling

**How it works:**
```liquid
{% render 'vat-price', price: product.price %}
```

**Displays as:**
```
£100.00  Ex VAT
£120.00  Inc VAT
```

**Next Step:** This needs to be integrated into the product page template (I can do this next if you'd like)

---

## 📋 Everform Business Details (From Research)

Here's what I learned about Everform:

**Company:**
- UK manufacturer based in Southampton (Chandlers Ford)
- BS EN 1090 certified
- 30+ years of experience
- Comprehensive CNC equipment (punch, brake presses, stud welders, flatbed routers)
- All structural welders British Standard-certified

**Products:**
1. **Corten Steel Products:**
   - Planters (modular, trough, column)
   - Garden edging
   - Retaining walls
   - Pre-weathered and un-weathered options
   - Tool-free assembly
   - 5-year warranty

2. **Architectural Metal Products:**
   - Aluminium copings (wind-tested to 182mph!)
   - Window pods (self-supporting)
   - Window cills
   - Fascias
   - Premium powder coating

**Services:**
- Design & 3D modelling (AutoCAD, Revit, Solidworks)
- CNC manufacturing
- Powder coating & finishing
- Professional installation
- Project management
- Bespoke fabrication (5-10 working day turnaround)

**Key Features:**
- Free UK mainland delivery
- BS EN 1090 certification
- 5-year warranty
- British craftsmanship
- Quick clip-on installation systems

---

## 🎯 What to Do Next in Shopify

### 1. Upload the Theme
The customized theme is ready to upload to Shopify:
- ZIP the theme folder
- Upload via Shopify Admin → Online Store → Themes → Add theme

### 2. Add Images (IMPORTANT)
The theme needs images to look complete:

**Hero Banner:**
- Go to Theme Customizer → Homepage → Image Banner section
- Upload a high-quality image of:
  - Corten steel planters in a landscape
  - Architectural metalwork installation
  - Your factory/workshop
- Recommended sources:
  - Your own product photography
  - Unsplash search: "corten steel", "industrial metalwork", "architectural metal"

**Bespoke Services Section:**
- Add image of CNC machinery or factory floor
- Shows your manufacturing capabilities

**Optional - Product Collection Images:**
- Featured collections can have header images

### 3. Create Collections
Create these collections in Shopify (Products → Collections):

1. **"Corten Steel Planters"** (or similar name)
   - Add all your Corten planter products here
   - The homepage will automatically show 4 products from this collection

2. **"Architectural Metal Products"** (or similar name)
   - Add copings, window pods, fascias
   - Homepage will show 4 products from this collection

### 4. Set Up Menus
Configure footer menus (Navigation → Menus):

**Products Menu:**
- Corten Steel Planters
- Aluminium Planters
- Corten Edging
- Aluminium Copings
- Window Pods
- Window Cills
- View All Products

**Services Menu:**
- Bespoke Fabrications
- Design Services
- Installation
- Contact for Quote

**Company Menu:**
- About Us
- Contact
- Projects
- Certifications

### 5. Add Products (If You Haven't)
Add your actual products with:
- High-quality product images
- Accurate pricing (Ex VAT - the VAT pricing snippet will calculate Inc VAT)
- Product descriptions
- Variants (sizes, finishes, etc.)

### 6. Optional Enhancements
If you want me to add more:
- Product page VAT pricing integration
- Additional content pages (About, Services detail pages)
- Projects gallery page
- Quote request form
- Technical specification sections for products
- Size chart functionality

---

## 📊 What You Should See Now

When you upload and preview the theme:

✅ **Professional homepage** with Everform messaging
✅ **Real contact information** in footer
✅ **Everform teal** color in "Why Choose Everform" section
✅ **Credibility signals:** BS EN 1090, 30 years experience, 5-year warranty
✅ **Clear value propositions:** Free delivery, bespoke services, British made
✅ **Social media links** (Instagram, YouTube)
✅ **Dark professional footer** with all company details
✅ **Call-to-actions** throughout (Shop Products, Request Quote, Contact Us)

**It will look 1000x better than the default Dawn preset!**

---

## 🔗 Research Sources

All content based on real Everform information from:
- [Everform Homepage](https://everform.co.uk/)
- [Bespoke Fabrications Page](https://everform.co.uk/pages/bespoke-fabrications)
- [Architectural Metal Products Collection](https://everform.co.uk/collections/architectural-metal-products)
- [Corten Steel Planters Collection](https://everform.co.uk/collections/corten-steel-planters)
- [Aluminium Window Pods Collection](https://everform.co.uk/collections/window-pods)
- [Contact Page](https://everform.co.uk/pages/contact)

---

## ✅ Committed to Git

All changes committed with message:
`Customize Dawn theme for Everform - Phase 1`

Ready to push to GitHub when you want.

---

## 🚀 Next Phase Options

Let me know what you'd like me to add next:

1. **Integrate VAT pricing into product pages** (highly recommended for UK)
2. **Add more content pages** (About, Services, Projects gallery)
3. **Customize product page layout** (technical specs, size charts, downloads)
4. **Add more homepage sections** (testimonials, featured projects, video)
5. **Create navigation menus** (I can create the JSON config for menus)
6. **Something else?**

The theme is now fully customized for Everform and ready to use! 🎉
