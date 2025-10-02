import { Component, OnInit } from '@angular/core';

export interface AccentChair {
  id: number;
  title: string;
  description: string;
  image: string;
  material: string;
  style: string;
  features: string[];
  price?: string;
  color: string;
}

@Component({
  selector: 'app-accent-chairs-grid',
  templateUrl: './accent-chairs-grid.component.html',
  styleUrls: ['./accent-chairs-grid.component.scss']
})
export class AccentChairsGridComponent implements OnInit {
  
  accentChairs: AccentChair[] = [
    {
      id: 1,
      title: 'Modern Velvet Chair',
      description: 'A luxurious velvet accent chair with clean lines and contemporary design, perfect for modern living spaces.',
      image: 'assets/images/chair-velvet.jpg',
      material: 'Velvet',
      style: 'Modern',
      color: 'Deep Blue',
      features: ['Velvet Upholstery', 'Clean Lines', 'Modern Design', 'Comfortable Seating'],
      price: 'From $850'
    },
    {
      id: 2,
      title: 'Leather Wingback Chair',
      description: 'A classic wingback chair in premium leather with traditional design and exceptional comfort.',
      image: 'assets/images/chair-leather.jpg',
      material: 'Leather',
      style: 'Traditional',
      color: 'Brown',
      features: ['Premium Leather', 'Wingback Design', 'Traditional Style', 'Ergonomic Support'],
      price: 'From $1,200'
    },
    {
      id: 3,
      title: 'Scandinavian Chair',
      description: 'A minimalist Scandinavian chair with light wood frame and neutral upholstery for clean aesthetics.',
      image: 'assets/images/chair-scandinavian.jpg',
      material: 'Wood & Fabric',
      style: 'Scandinavian',
      color: 'Natural',
      features: ['Light Wood Frame', 'Neutral Fabric', 'Minimalist Design', 'Natural Materials'],
      price: 'From $650'
    },
    {
      id: 4,
      title: 'Mid-Century Chair',
      description: 'A retro-inspired mid-century modern chair with geometric patterns and vintage appeal.',
      image: 'assets/images/chair-midcentury.jpg',
      material: 'Fabric & Wood',
      style: 'Mid-Century',
      color: 'Mustard',
      features: ['Geometric Pattern', 'Retro Design', 'Wooden Legs', 'Vintage Appeal'],
      price: 'From $750'
    },
    {
      id: 5,
      title: 'Bohemian Chair',
      description: 'An eclectic bohemian chair with vibrant patterns and relaxed, artistic styling.',
      image: 'assets/images/chair-bohemian.jpg',
      material: 'Mixed Textiles',
      style: 'Bohemian',
      color: 'Multi-Color',
      features: ['Vibrant Patterns', 'Mixed Textiles', 'Artistic Design', 'Eclectic Style'],
      price: 'From $600'
    },
    {
      id: 6,
      title: 'Contemporary Chair',
      description: 'A sleek contemporary chair with innovative design and premium materials for modern spaces.',
      image: 'assets/images/chair-contemporary.jpg',
      material: 'Metal & Fabric',
      style: 'Contemporary',
      color: 'Charcoal',
      features: ['Sleek Design', 'Metal Frame', 'Premium Materials', 'Innovative Style'],
      price: 'From $950'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  viewChair(chair: AccentChair): void {
    console.log('Viewing chair:', chair.title);
  }

  getQuote(chair: AccentChair): void {
    console.log('Getting quote for:', chair.title);
  }
}