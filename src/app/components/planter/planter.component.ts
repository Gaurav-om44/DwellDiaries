import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageModalService } from '../../services/image-modal.service';

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
  selector: 'app-planter',
  templateUrl: './planter.component.html',
  styleUrls: ['./planter.component.scss']
})
export class PlanterComponent implements OnInit {
  @Input() planter!: Planter;
  @Input() index!: number;

  constructor(
    private router: Router,
    private imageModalService: ImageModalService
  ) { }

  ngOnInit(): void {
  }

  viewPlanter(): void {
    console.log('Viewing planter:', this.planter.title);
    this.router.navigate(['/portfolio', this.planter.id]);
  }

  getQuote(): void {
    console.log('Getting quote for:', this.planter.title);
    this.router.navigate(['/contact'], { 
      queryParams: { 
        product: this.planter.id,
        title: this.planter.title,
        type: 'planter'
      } 
    });
  }

  openImageModal(): void {
    const imageSrc = this.planter.id === 1 
      ? 'assets/images/CONSOLE.png' 
      : this.planter.id === 2 
      ? 'assets/images/console2.png' 
      : this.planter.image;
    this.imageModalService.openModal(imageSrc, this.planter.title);
  }
}