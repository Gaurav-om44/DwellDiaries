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
  selector: 'app-wall-clocks-grid',
  templateUrl: './wall-clocks-grid.component.html',
  styleUrls: ['./wall-clocks-grid.component.scss']
})
export class WallClocksGridComponent implements OnInit {
  
  wallClocks: Clock[] = [
    {
      id: 1,
      title: 'Industrial Wall Clock',
      description: 'A bold industrial wall clock with modern design and robust construction, perfect for contemporary spaces.',
      image: 'assets/images/Clocks/WallClock_Industrial_2.png',
      material: 'Metal & Glass',
      style: 'Industrial',
      color: 'Black',
      type: 'Wall',
      features: ['Industrial Design', 'Robust Construction', 'Modern Style', 'Easy Installation'],
      price: 'From $180'
    },
    {
      id: 2,
      title: 'Roti Clock',
      description: 'A unique roti-inspired clock design with traditional aesthetics and modern functionality.',
      image: 'assets/images/Clocks/RotiClock.jpg',
      material: 'Wood & Metal',
      style: 'Traditional',
      color: 'Natural',
      type: 'Wall',
      features: ['Traditional Design', 'Unique Aesthetic', 'Wood & Metal', 'Functional'],
      price: 'From $150'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  viewWallClock(wallClock: Clock): void {
    console.log('Viewing wall clock:', wallClock.title);
  }

  getQuote(wallClock: Clock): void {
    console.log('Getting quote for:', wallClock.title);
  }
}

