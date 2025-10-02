import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  selector: 'app-entryway-design',
  templateUrl: './entryway-design.component.html',
  styleUrls: ['./entryway-design.component.scss']
})
export class EntrywayDesignComponent implements OnInit {
  @Input() design!: EntrywayDesign;
  @Input() index!: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewDesign(): void {
    console.log('Viewing design:', this.design.title);
    // Navigate to design detail page
    this.router.navigate(['/portfolio', this.design.id]);
  }

  getQuote(): void {
    console.log('Getting quote for:', this.design.title);
    // Navigate to contact page with design pre-selected
    this.router.navigate(['/contact'], { 
      queryParams: { 
        design: this.design.id,
        title: this.design.title 
      } 
    });
  }
}