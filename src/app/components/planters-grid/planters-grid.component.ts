import { Component, OnInit } from '@angular/core';

export interface Planter {
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
  selector: 'app-planters-grid',
  templateUrl: './planters-grid.component.html',
  styleUrls: ['./planters-grid.component.scss']
})
export class PlantersGridComponent implements OnInit {
  
  planters: Planter[] = [
    {
      id: 1,
      title: 'Ceramic Planter',
      description: 'A beautiful ceramic planter with glazed finish and modern design, perfect for indoor plants.',
      image: 'assets/images/planter-ceramic.jpg',
      material: 'Ceramic',
      style: 'Modern',
      color: 'White',
      size: 'Medium',
      features: ['Glazed Finish', 'Drainage Holes', 'Modern Design', 'Indoor Use'],
      price: 'From $45'
    },
    {
      id: 2,
      title: 'Hanging Planter',
      description: 'An elegant hanging planter with macrame hanger and bohemian style for vertical gardens.',
      image: 'assets/images/planter-hanging.jpg',
      material: 'Ceramic & Macrame',
      style: 'Bohemian',
      color: 'Natural',
      size: 'Small',
      features: ['Macrame Hanger', 'Bohemian Style', 'Vertical Garden', 'Handmade'],
      price: 'From $35'
    },
    {
      id: 3,
      title: 'Terracotta Planter',
      description: 'A classic terracotta planter with natural clay finish and traditional Mediterranean style.',
      image: 'assets/images/planter-terracotta.jpg',
      material: 'Terracotta',
      style: 'Traditional',
      color: 'Terracotta',
      size: 'Large',
      features: ['Natural Clay', 'Traditional Style', 'Breathable Material', 'Outdoor Safe'],
      price: 'From $25'
    },
    {
      id: 4,
      title: 'Modern Planter',
      description: 'A sleek contemporary planter with geometric design and premium materials for modern spaces.',
      image: 'assets/images/planter-modern.jpg',
      material: 'Concrete & Metal',
      style: 'Contemporary',
      color: 'Gray',
      size: 'Medium',
      features: ['Geometric Design', 'Premium Materials', 'Contemporary Style', 'Minimalist'],
      price: 'From $65'
    },
    {
      id: 5,
      title: 'Vintage Planter',
      description: 'A charming vintage planter with distressed finish and antique styling for nostalgic appeal.',
      image: 'assets/images/planter-vintage.jpg',
      material: 'Metal & Ceramic',
      style: 'Vintage',
      color: 'Antique',
      size: 'Medium',
      features: ['Distressed Finish', 'Antique Styling', 'Vintage Appeal', 'Unique Character'],
      price: 'From $55'
    },
    {
      id: 6,
      title: 'Contemporary Planter',
      description: 'A sophisticated contemporary planter with innovative design and sustainable materials.',
      image: 'assets/images/planter-contemporary.jpg',
      material: 'Recycled Materials',
      style: 'Contemporary',
      color: 'Black',
      size: 'Large',
      features: ['Sustainable Materials', 'Innovative Design', 'Contemporary Style', 'Eco-Friendly'],
      price: 'From $75'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  viewPlanter(planter: Planter): void {
    console.log('Viewing planter:', planter.title);
  }

  getQuote(planter: Planter): void {
    console.log('Getting quote for:', planter.title);
  }
}