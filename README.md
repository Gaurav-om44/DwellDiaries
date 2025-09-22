# Anjali Diaries - Angular 17 E-commerce Application

This is a modern e-commerce application built with Angular 17, featuring a Ministore theme for selling smartphones, smartwatches, and mobile accessories.

## 🚀 Features

- **Modern Angular 17 Architecture** - Built with the latest Angular framework
- **Responsive Design** - Mobile-first approach with Bootstrap 5
- **Component-Based Structure** - Modular and reusable components
- **Service-Oriented Architecture** - Clean separation of concerns
- **Interactive Carousels** - Swiper.js integration for product showcases
- **Search Functionality** - Real-time product search with popup
- **Shopping Cart** - Add to cart functionality with state management
- **Blog System** - Content management for blog posts
- **SEO Optimized** - Proper routing and meta tags

## 🛠️ Technology Stack

- **Frontend Framework**: Angular 17
- **Styling**: SCSS with Bootstrap 5
- **Icons**: SVG icons and Bootstrap icons
- **Carousels**: Swiper.js
- **State Management**: RxJS Observables
- **Routing**: Angular Router
- **Forms**: Angular Reactive Forms

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── header/
│   │   ├── footer/
│   │   ├── search-popup/
│   │   ├── billboard/
│   │   ├── company-services/
│   │   ├── mobile-products/
│   │   ├── smart-watches/
│   │   ├── yearly-sale/
│   │   ├── latest-blog/
│   │   ├── testimonials/
│   │   ├── subscribe/
│   │   └── instagram/
│   ├── pages/              # Page components
│   │   ├── home/
│   │   ├── shop/
│   │   ├── product-detail/
│   │   ├── cart/
│   │   ├── blog/
│   │   ├── blog-detail/
│   │   ├── about/
│   │   └── contact/
│   ├── services/           # Business logic services
│   │   ├── product.service.ts
│   │   ├── blog.service.ts
│   │   └── cart.service.ts
│   ├── app.module.ts       # Main application module
│   ├── app-routing.module.ts
│   └── app.component.*
├── assets/                 # Static assets
│   └── images/            # Image assets
└── styles.scss            # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI 17

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd anjali-diaries-angular
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Copy assets**
   ```bash
   # Copy all images from the original project to src/assets/images/
   cp -r images/* src/assets/images/
   ```

4. **Start development server**
   ```bash
   npm start
   # or
   ng serve
   ```

5. **Open your browser**
   Navigate to `http://localhost:4200`

### Build for Production

```bash
ng build --configuration production
```

## 🎨 Design Features

- **Color Scheme**: Professional blue and gray palette
- **Typography**: Jost and Lato font families
- **Responsive**: Mobile-first design approach
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: WCAG compliant components

## 📱 Components Overview

### Header Component
- Navigation menu with routing
- Search functionality with popup
- Shopping cart with item count
- Responsive mobile menu

### Billboard Component
- Hero section with Swiper carousel
- Call-to-action buttons
- Responsive image handling

### Product Components
- Mobile products showcase
- Smart watches section
- Product cards with hover effects
- Add to cart functionality

### Services
- **ProductService**: Manages product data and search
- **BlogService**: Handles blog posts and content
- **CartService**: Shopping cart state management

## 🔧 Development

### Adding New Components

```bash
ng generate component components/component-name
```

### Adding New Services

```bash
ng generate service services/service-name
```

### Adding New Pages

```bash
ng generate component pages/page-name
```

## 📦 Dependencies

- **@angular/core**: ^17.0.0
- **@angular/common**: ^17.0.0
- **@angular/router**: ^17.0.0
- **@angular/forms**: ^17.0.0
- **bootstrap**: ^5.3.0
- **swiper**: ^11.0.0
- **rxjs**: ~7.8.0

## 🚀 Deployment

The application can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use Angular CLI build and deploy
- **AWS S3**: Upload the built files

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support and questions, please contact the development team.

---

**Built with ❤️ using Angular 17**
