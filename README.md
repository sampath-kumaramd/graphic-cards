# Graphic Cards Shopping Center

This is a Next.js project that serves as a comparison platform for graphic cards, allowing users to browse, compare, and find the best deals on various GPU models.

## Project Overview

The Shopping Center is a web application that helps users:

- Browse popular graphic card brands
- Compare prices across different retailers
- View detailed product specifications
- Find the lowest prices in both local and international markets
- Learn about different graphic card models and their features

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) with Radix UI primitives
- **Language**: TypeScript
- **Image Optimization**: Next.js Image component

## Key Features

- Responsive design that works across desktop and mobile devices
- Product cards with detailed information
- Price comparison across multiple retailers
- Brand-specific pages with detailed information
- Product detail pages with comprehensive specifications
- International price comparison (Netherlands and Germany)
- Latest price drops and deals

## Project Structure

- `/app`: Next.js app router pages and layouts
- `/components`: Reusable UI components
- `/bin`: Data files for products, brands, and other content
- `/lib`: Utility functions and enums
- `/public`: Static assets like images and icons

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages

- **Home**: Featured products, popular brands, and latest price drops
- **Brand Pages**: Detailed information about specific graphic card brands
- **Product Pages**: Comprehensive details about specific graphic card models with price comparisons
- **Favorite Brands**: Overview of popular graphic card manufacturers

## Components

The project uses a component-based architecture with reusable UI elements:

- `ProductCard`: Displays product information in various formats
- `Header`: Navigation and search functionality
- `Footer`: Site links and information
- `Card`: Wrapper for content sections
- Various UI components from shadcn/ui library

## Data Management

Product and brand data is currently stored in static TypeScript files in the `/bin` directory. This includes:

- Product specifications
- Brand information
- Price data from different retailers
- Comparison information

## Deployment

The application is configured for easy deployment on Vercel, the platform from the creators of Next.js.

## Image Handling

The project is configured to use external image domains (ibb.co) as well as local images in the public directory.

## Customization

The UI uses Tailwind CSS with a customized theme defined in `tailwind.config.ts` and CSS variables in `globals.css`.

---

Created by Sampath Kumara
