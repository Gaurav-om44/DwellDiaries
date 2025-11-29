import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageModalService } from '../../services/image-modal.service';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit, OnDestroy {
  isOpen = false;
  imageSource = '';
  imageAlt = '';
  private subscriptions: Subscription[] = [];

  constructor(private imageModalService: ImageModalService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.imageModalService.isOpen$.subscribe(isOpen => {
        this.isOpen = isOpen;
      })
    );
    this.subscriptions.push(
      this.imageModalService.imageSource$.subscribe(src => {
        this.imageSource = src;
      })
    );
    this.subscriptions.push(
      this.imageModalService.imageAlt$.subscribe(alt => {
        this.imageAlt = alt;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  closeModal(): void {
    this.imageModalService.closeModal();
  }

  onBackdropClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }
}


