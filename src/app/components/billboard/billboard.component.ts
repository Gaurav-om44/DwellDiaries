import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss']
})
export class BillboardComponent implements OnInit, OnDestroy {
  currentSlideIndex = 0;
  private autoSlideInterval: any;

  slides = [
    {
      id: 1,
      title: 'Interior Design Excellence',
      subtitle: 'Transform Your Space',
      description: 'Create beautiful, functional spaces that reflect your unique style and personality',
      image: 'assets/images/billboard-1.jpg',
      buttonText: 'View Portfolio',
      buttonLink: '/portfolio'
    },
    {
      id: 2,
      title: 'Residential Design',
      subtitle: 'Home Transformation',
      description: 'From concept to completion, we bring your dream home to life with expert design',
      image: 'assets/images/billboard-2.jpg',
      buttonText: 'Our Services',
      buttonLink: '/services'
    },

    {
      id: 3,
      title: 'Luxury Interiors',
      subtitle: 'Sophisticated Design',
      description: 'Crafting exceptional interior spaces that reflect your unique style and elevate your lifestyle',
      image: 'assets/images/billboard-4.jpg',
      buttonText: 'Learn More',
      buttonLink: '/about'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    this.resetAutoSlide();
  }

  prevSlide(): void {
    this.currentSlideIndex = this.currentSlideIndex === 0 
      ? this.slides.length - 1 
      : this.currentSlideIndex - 1;
    this.resetAutoSlide();
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
    this.resetAutoSlide();
  }

  private startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  private stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  private resetAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}
