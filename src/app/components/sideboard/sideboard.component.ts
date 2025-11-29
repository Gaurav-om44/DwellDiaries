import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageModalService } from '../../services/image-modal.service';

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
  selector: 'app-sideboard',
  templateUrl: './sideboard.component.html',
  styleUrls: ['./sideboard.component.scss']
})
export class SideboardComponent implements OnInit {
  @Input() sideboard!: Sideboard;
  @Input() index!: number;

  constructor(
    private router: Router,
    private imageModalService: ImageModalService
  ) { }

  ngOnInit(): void {
  }

  viewSideboard(): void {
    console.log('Viewing sideboard:', this.sideboard.title);
    this.router.navigate(['/portfolio', this.sideboard.id]);
  }

  getQuote(): void {
    console.log('Getting quote for:', this.sideboard.title);
    this.router.navigate(['/contact'], { 
      queryParams: { 
        product: this.sideboard.id,
        title: this.sideboard.title,
        type: 'sideboard'
      } 
    });
  }

  openImageModal(): void {
    this.imageModalService.openModal(this.sideboard.image, this.sideboard.title);
  }
}


