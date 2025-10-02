import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  @Input() clock!: Clock;
  @Input() index!: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewClock(): void {
    console.log('Viewing clock:', this.clock.title);
    this.router.navigate(['/portfolio', this.clock.id]);
  }

  getQuote(): void {
    console.log('Getting quote for:', this.clock.title);
    this.router.navigate(['/contact'], { 
      queryParams: { 
        product: this.clock.id,
        title: this.clock.title,
        type: 'clock'
      } 
    });
  }
}