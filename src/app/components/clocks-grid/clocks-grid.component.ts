import { Component, OnInit } from '@angular/core';

export interface Clock {
  id: number;
  title: string;
  description: string;
  image: string;
  material: string;
  style: string;
  features: string[];
  price?: string;
  color: string;
  type: string;
}

@Component({
  selector: 'app-clocks-grid',
  templateUrl: './clocks-grid.component.html',
  styleUrls: ['./clocks-grid.component.scss']
})
export class ClocksGridComponent implements OnInit {
  
  clocks: Clock[] = [
    {
      id: 1,
      title: 'Modern Wall Clock',
      description: 'A sleek contemporary wall clock with clean lines and minimalist design, perfect for modern interiors.',
      image: 'assets/images/clock-modern.jpg',
      material: 'Metal & Glass',
      style: 'Modern',
      color: 'Black',
      type: 'Wall',
      features: ['Quartz Movement', 'Silent Operation', 'Modern Design', 'Easy Installation'],
      price: 'From $120'
    },
    {
      id: 2,
      title: 'Vintage Mantel Clock',
      description: 'A classic vintage mantel clock with ornate details and traditional craftsmanship for elegant spaces.',
      image: 'assets/images/clock-vintage.jpg',
      material: 'Wood & Brass',
      style: 'Vintage',
      color: 'Antique',
      type: 'Mantel',
      features: ['Mechanical Movement', 'Ornate Details', 'Traditional Craft', 'Elegant Design'],
      price: 'From $280'
    },
    {
      id: 3,
      title: 'Minimalist Clock',
      description: 'An ultra-minimalist clock with simple design and natural materials for clean aesthetics.',
      image: 'assets/images/clock-minimalist.jpg',
      material: 'Wood',
      style: 'Minimalist',
      color: 'Natural',
      type: 'Wall',
      features: ['Natural Wood', 'Simple Design', 'Clean Aesthetics', 'Sustainable Materials'],
      price: 'From $95'
    },
    {
      id: 4,
      title: 'Digital Wall Clock',
      description: 'A contemporary digital wall clock with LED display and smart features for modern living.',
      image: 'assets/images/clock-digital.jpg',
      material: 'Plastic & Metal',
      style: 'Contemporary',
      color: 'White',
      type: 'Wall',
      features: ['LED Display', 'Smart Features', 'Contemporary Style', 'Energy Efficient'],
      price: 'From $150'
    },
    {
      id: 5,
      title: 'Art Deco Clock',
      description: 'A stunning Art Deco clock with geometric patterns and luxurious materials for statement pieces.',
      image: 'assets/images/clock-artdeco.jpg',
      material: 'Brass & Glass',
      style: 'Art Deco',
      color: 'Gold',
      type: 'Table',
      features: ['Geometric Design', 'Luxury Materials', 'Statement Piece', 'Art Deco Style'],
      price: 'From $350'
    },
    {
      id: 6,
      title: 'Contemporary Clock',
      description: 'A sophisticated contemporary clock with innovative design and premium materials.',
      image: 'assets/images/clock-contemporary.jpg',
      material: 'Steel & Acrylic',
      style: 'Contemporary',
      color: 'Silver',
      type: 'Wall',
      features: ['Innovative Design', 'Premium Materials', 'Sophisticated Style', 'Modern Technology'],
      price: 'From $200'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  viewClock(clock: Clock): void {
    console.log('Viewing clock:', clock.title);
  }

  getQuote(clock: Clock): void {
    console.log('Getting quote for:', clock.title);
  }
}