# Fresh Juice Station - Premium Juice Delivery Service

A modern, colorful, and mobile-friendly website for Fresh Juice Station, a premium juice delivery service operating in Hayatabad, Peshawar. Built with React, TypeScript, and modern web technologies.

## 🌟 Features

### Customer Features
- **Beautiful Homepage** with glowing title and vibrant fruit-themed design
- **Interactive Menu** showcasing juice categories with photos, ingredients, and pricing
- **Online Ordering System** with customer information and delivery options
- **Hayatabad Delivery Only** validation for service area
- **Multiple Payment Options** (Cash on Delivery, upcoming JazzCash/EasyPaisa/Credit Card)
- **Real-time Order Confirmation** with notifications
- **Mobile-Responsive Design** optimized for all devices

### Admin Features
- **Secure Admin Login** (restricted to affankhkh3434@gmail.com)
- **Product Management** - Add, edit, delete juice products
- **Order Management** - View all orders and customer data
- **Real-time Notifications** with sound alerts for new orders
- **Dashboard Analytics** showing recent orders and product status

### Technical Features
- **SEO Optimized** for Google search visibility
- **Fast Loading** with optimized images and code splitting
- **Type-Safe** development with TypeScript
- **Modern UI** using Tailwind CSS and shadcn/ui components
- **Real-time Updates** using React Query
- **Sound Notifications** for admin alerts
- **Firebase Integration** ready for authentication and data storage

## 🚀 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **React Query** for state management
- **Wouter** for routing
- **React Hook Form** with Zod validation
- **Framer Motion** for animations

### Backend
- **Express.js** with TypeScript
- **In-memory storage** for development
- **RESTful API** design
- **Zod validation** for request/response schemas

### Development Tools
- **Vite** for fast development and building
- **ESLint** and **TypeScript** for code quality
- **PostCSS** for CSS processing

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Setup

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd fresh-juice-station
   npm install
   ```

2. **Environment Setup**
   Create environment variables for Firebase (optional):
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_PROJECT_ID=your_project_id
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5000`

### Build for Production
```bash
npm run build
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Vibrant pink (#E53E5D) for call-to-action elements
- **Secondary**: Teal (#4ECDC4) for accents
- **Gradients**: Orange to pink to purple for backgrounds
- **Glass Effects**: Backdrop blur and transparency

### Visual Effects
- **Glowing animations** on buttons and titles
- **Hover transformations** with scale effects
- **Smooth transitions** throughout the interface
- **Responsive typography** adapting to screen sizes
- **Professional shadows** and depth effects

### Mobile Optimization
- Touch-friendly buttons and forms
- Responsive grid layouts
- Optimized images for different screen densities
- Fast loading on mobile networks

## 📱 User Journey

### Customer Flow
1. **Homepage** - View hero section with glowing title
2. **Menu Browse** - Explore juice options with ingredients and pricing
3. **Product Selection** - Choose juice, size, and quantity
4. **Order Form** - Fill customer details and delivery address
5. **Payment Method** - Select Cash on Delivery or future options
6. **Confirmation** - Receive order confirmation with details

### Admin Flow
1. **Login** - Secure authentication for admin users
2. **Dashboard** - Overview of products and recent orders
3. **Product Management** - Add/edit/delete juice products
4. **Order Monitoring** - View all customer orders with details
5. **Notifications** - Real-time alerts for new orders

## 🛡️ Security Features

- **Admin-only access** restricted to specific email
- **Input validation** using Zod schemas
- **XSS protection** with proper sanitization
- **CORS handling** for secure API requests
- **Environment variable** management for sensitive data

## 🌐 SEO Optimization

### Meta Tags
- Comprehensive title and description tags
- Open Graph tags for social media sharing
- Twitter Card support
- Structured data markup for search engines

### Performance
- Optimized images with proper alt text
- Fast loading times with code splitting
- Mobile-first responsive design
- Semantic HTML structure

### Local SEO
- Business location information (Hayatabad, Peshawar)
- Contact details and service area
- Local business schema markup

## 📊 Deployment Options

### Replit (Recommended)
- One-click deployment with built-in hosting
- Automatic SSL certificates
- Easy domain configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure environment variables
4. Set up continuous deployment

### Other Platforms
- Vercel
- Firebase Hosting
- Traditional web hosting with Node.js support

## 🔧 Configuration

### Sample Products
The application comes with pre-loaded sample juice products:
- Mango Magic
- Green Juice
- Red Rush
- Paradise
- Feel Good
- Purple Power

### Customization
- Update product information in `server/storage.ts`
- Modify color scheme in `client/src/index.css`
- Adjust delivery area validation in order form
- Configure payment methods in the order component

## 📞 Support & Contact

For technical support or business inquiries:
- **Email**: info@freshjuicestation.com
- **Phone**: +92 300 1234567
- **Location**: Hayatabad, Peshawar

## 📄 License

This project is proprietary software for Fresh Juice Station. All rights reserved.

---

**Fresh Juice Station** - NO WATER, NO SUGAR, NO ADDITIVES - Pure & Organic Juices 🥤