import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  features?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      price: 999,
      originalPrice: 1099,
      image: 'assets/images/product-item1.jpg',
      category: 'mobile',
      description: 'Latest iPhone with advanced features',
      rating: 4.8,
      reviews: 1250,
      inStock: true,
      features: ['5G', 'A17 Pro Chip', '48MP Camera', 'Titanium Design']
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      price: 899,
      originalPrice: 999,
      image: 'assets/images/product-item2.jpg',
      category: 'mobile',
      description: 'Premium Android smartphone',
      rating: 4.7,
      reviews: 980,
      inStock: true,
      features: ['AI Camera', '200MP Sensor', 'S Pen Support', 'Wireless Charging']
    },
    {
      id: 3,
      name: 'Apple Watch Series 9',
      price: 399,
      image: 'assets/images/product-item3.jpg',
      category: 'smartwatch',
      description: 'Advanced health and fitness tracking',
      rating: 4.9,
      reviews: 2100,
      inStock: true,
      features: ['ECG', 'Blood Oxygen', 'GPS', 'Water Resistant']
    },
    {
      id: 4,
      name: 'Samsung Galaxy Watch 6',
      price: 299,
      image: 'assets/images/product-item4.jpg',
      category: 'smartwatch',
      description: 'Smartwatch with comprehensive health monitoring',
      rating: 4.6,
      reviews: 1500,
      inStock: true,
      features: ['Sleep Tracking', 'Heart Rate', 'BIA Sensor', 'Rotating Bezel']
    },
    {
      id: 5,
      name: 'Google Pixel 8',
      price: 699,
      image: 'assets/images/product-item5.jpg',
      category: 'mobile',
      description: 'Pure Android experience with AI features',
      rating: 4.5,
      reviews: 750,
      inStock: true,
      features: ['Google AI', 'Magic Eraser', 'Call Screen', '7 Years Updates']
    }
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);

  constructor() { }

  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    const filteredProducts = this.products.filter(product => product.category === category);
    return new BehaviorSubject(filteredProducts).asObservable();
  }

  getFeaturedProducts(): Product[] {
    return this.products.filter(product => product.rating >= 4.7);
  }

  searchProducts(query: string): Product[] {
    const lowercaseQuery = query.toLowerCase();
    return this.products.filter(product => 
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
    );
  }
}
