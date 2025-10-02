import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  selector: 'app-accent-chair',
  templateUrl: './accent-chair.component.html',
  styleUrls: ['./accent-chair.component.scss']
})
export class AccentChairComponent implements OnInit {
  @Input() chair!: AccentChair;
  @Input() index!: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewChair(): void {
    console.log('Viewing chair:', this.chair.title);
    this.router.navigate(['/portfolio', this.chair.id]);
  }

  getQuote(): void {
    console.log('Getting quote for:', this.chair.title);
    this.router.navigate(['/contact'], { 
      queryParams: { 
        product: this.chair.id,
        title: this.chair.title,
        type: 'chair'
      } 
    });
  }
}