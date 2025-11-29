import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageModalService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  private imageSourceSubject = new BehaviorSubject<string>('');
  private imageAltSubject = new BehaviorSubject<string>('');

  isOpen$ = this.isOpenSubject.asObservable();
  imageSource$ = this.imageSourceSubject.asObservable();
  imageAlt$ = this.imageAltSubject.asObservable();

  openModal(imageSrc: string, imageAlt: string = ''): void {
    this.imageSourceSubject.next(imageSrc);
    this.imageAltSubject.next(imageAlt);
    this.isOpenSubject.next(true);
    document.body.style.overflow = 'hidden'; // Prevent body scroll
  }

  closeModal(): void {
    this.isOpenSubject.next(false);
    document.body.style.overflow = ''; // Restore body scroll
  }
}


