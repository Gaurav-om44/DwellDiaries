import { Component, OnInit } from '@angular/core';

export interface Sideboard {
  id: number;
  title: string;
  description: string;
  image: string;
  material: string;
  style: string;
  features: string[];
  price?: string;
  color: string;
  size: string;
}

@Component({
  selector: 'app-sideboard-grid',
  templateUrl: './sideboard-grid.component.html',
  styleUrls: ['./sideboard-grid.component.scss']
})
export class SideboardGridComponent implements OnInit {
  
  sideboards: Sideboard[] = [
    {
      id: 1,
      title: 'Modern Sideboard',
      description: 'A sleek modern sideboard with clean lines and premium materials, perfect for dining rooms and living spaces.',
      image: 'assets/images/sideboard1.jpg',
      material: 'Wood & Metal',
      style: 'Modern',
      color: 'White',
      size: 'Large',
      features: ['Premium Materials', 'Modern Design', 'Spacious Storage', 'Versatile'],
      price: 'From $450'
    },
    {
      id: 2,
      title: 'Classic Sideboard',
      description: 'A timeless classic sideboard with traditional craftsmanship and elegant design for sophisticated interiors.',
      image: 'assets/images/sideboard2.jpg',
      material: 'Solid Wood',
      style: 'Classic',
      color: 'Brown',
      size: 'Large',
      features: ['Solid Wood', 'Classic Design', 'Durable Construction', 'Timeless Appeal'],
      price: 'From $550'
    },
    {
      id: 3,
      title: 'Contemporary Sideboard',
      description: 'A contemporary sideboard with innovative design and functional storage solutions for modern homes.',
      image: 'assets/images/CONSOLE.png',
      material: 'MDF & Veneer',
      style: 'Contemporary',
      color: 'Gray',
      size: 'Medium',
      features: ['Contemporary Style', 'Functional Design', 'Easy Maintenance', 'Affordable'],
      price: 'From $350'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  viewSideboard(sideboard: Sideboard): void {
    console.log('Viewing sideboard:', sideboard.title);
  }

  getQuote(sideboard: Sideboard): void {
    console.log('Getting quote for:', sideboard.title);
  }
}

