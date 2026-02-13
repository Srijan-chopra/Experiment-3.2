# Experiment-3.2

## Course Outcome Mapped

**CO1**: Explain the fundamental concepts of front-end and back-end development, including HTML, CSS, JavaScript, React.js, Node.js, and databases.

**CO2**: Develop interactive and responsive front-end applications using HTML, CSS, JavaScript, and React.js.

## 1. Aim

To create a reusable ProductCard component that displays product information using React props.

## 2. Objective

✓ Design a responsive product card  
✓ Implement props for dynamic data  
✓ Style with modern CSS techniques  
✓ Display stock status visually

## 3. Hardware/Software Requirements

### Software
- VS Code
- React 18+
- Chrome DevTools
- Node.js & npm

### Hardware
- i3+ CPU
- 4GB RAM

## 4. About the Program

This experiment demonstrates component-based architecture in React, prop passing, and conditional rendering.

### Key Features Implemented:

1. **Props-based Architecture**
   - `name`: Product name
   - `price`: Product price
   - `image`: Product image URL
   - `description`: Product description
   - `inStock`: Boolean for stock status
   - `category`: Product category
   - `rating`: Product rating (1-5)

2. **Conditional Rendering**
   - Stock badge (green for in-stock, red for out-of-stock)
   - Disabled button for out-of-stock items
   - Optional category and rating display

3. **Modern CSS Techniques**
   - CSS Grid for layout
   - Flexbox for component structure
   - CSS transitions and transforms
   - Gradient backgrounds
   - Box shadows and hover effects
   - Responsive design with media queries
   - Backdrop filters for modern UI

4. **Responsive Design**
   - Mobile-first approach
   - Breakpoints for tablets and phones
   - Flexible grid system

## 5. Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 6. File Structure

```
├── ProductCard.jsx       # Main component
├── ProductCard.css       # Component styling
├── App.jsx              # Demo application
├── App.css              # App styling
├── main.jsx             # React entry point
├── product-card-demo.html # HTML entry
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## 7. Component Usage

```jsx
<ProductCard
  name="Wireless Headphones"
  price={79.99}
  image="https://example.com/image.jpg"
  description="Premium noise-cancelling headphones"
  inStock={true}
  category="Electronics"
  rating={4.5}
/>
```

## 8. Learning Outcomes

Students will learn:
- React component creation
- Props passing and validation
- Conditional rendering
- CSS-in-JS concepts
- Responsive web design
- Modern ES6+ JavaScript
- Component reusability

## 9. Expected Output

A grid of product cards displaying:
- Product image with hover zoom effect
- Stock status badge (color-coded)
- Category badge
- Product name and description
- Price display
- Star rating
- Add to Cart button (disabled when out of stock)
- Smooth hover animations
- Fully responsive across devices

---

**Experiment Date**: February 13, 2026  
**Technology Stack**: React 18, Vite, CSS3, JavaScript ES6+
