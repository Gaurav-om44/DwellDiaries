import { Component, OnInit } from '@angular/core';

export interface EntrywayDesign {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
  style: string;
  features: string[];
  price?: string;
}

@Component({
  selector: 'app-portfolio-grid',
  templateUrl: './portfolio-grid.component.html',
  styleUrls: ['./portfolio-grid.component.scss']
})
export class PortfolioGridComponent implements OnInit {
  
  entrywayDesigns: EntrywayDesign[] = [
    {
      id: 1,
      title: 'Warm Beige Entryway',
      description: 'A minimalist entryway with warm beige walls and elegant paneled door, featuring a large oval mirror and floating console.',
      image: 'assets/images/entryway-beige.jpg',
      color: 'Warm Beige',
      style: 'Minimalist',
      features: ['Oval Mirror', 'Floating Console', 'Pampas Grass', 'Ottoman Seating'],
      price: 'From $2,500'
    },
    {
      id: 2,
      title: 'Dramatic Dark Entryway',
      description: 'A luxurious dark entryway with dramatic black walls, arched mirror with backlighting, and checkered tile flooring.',
      image: 'assets/images/entryway-dark.jpg',
      color: 'Dramatic Black',
      style: 'Luxury',
      features: ['Arched Mirror', 'Backlighting', 'Checkered Floor', 'Luxury Materials'],
      price: 'From $4,200'
    },
    {
      id: 3,
      title: 'Serene Green Entryway',
      description: 'A calming sage green entryway with octagonal mirror and natural wood flooring for a refreshing atmosphere.',
      image: 'assets/images/entryway-green.jpg',
      color: 'Sage Green',
      style: 'Natural',
      features: ['Octagonal Mirror', 'Natural Wood', 'Sage Green Walls', 'Organic Feel'],
      price: 'From $2,800'
    },
    {
      id: 4,
      title: 'Bright White Entryway',
      description: 'A bright and airy white entryway with integrated LED lighting strips and modern minimalist design.',
      image: 'assets/images/entryway-white.jpg',
      color: 'Crisp White',
      style: 'Modern',
      features: ['LED Lighting', 'Clean Lines', 'Modern Mirror', 'Bright Atmosphere'],
      price: 'From $3,100'
    },
    {
      id: 5,
      title: 'Luxurious Dark Green Entryway',
      description: 'A sophisticated dark green entryway with ornate gold-framed mirror and rich, luxurious materials.',
      image: 'assets/images/entryway-dark-green.jpg',
      color: 'Dark Green',
      style: 'Sophisticated',
      features: ['Gold Frame', 'Ornate Mirror', 'Rich Materials', 'Luxury Finish'],
      price: 'From $5,500'
    },
    {
      id: 6,
      title: 'Contemporary Peach Entryway',
      description: 'A warm and contemporary peach-toned entryway with irregularly shaped mirror and integrated lighting.',
      image: 'assets/images/entryway-peach.jpg',
      color: 'Peach/Nude',
      style: 'Contemporary',
      features: ['Irregular Mirror', 'Integrated Lighting', 'Warm Tones', 'Modern Design'],
      price: 'From $2,900'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  viewDesign(design: EntrywayDesign): void {
    console.log('Viewing design:', design.title);
    // Navigate to design detail page
  }

  getQuote(design: EntrywayDesign): void {
    console.log('Getting quote for:', design.title);
    // Navigate to contact page with design pre-selected
  }
}