import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss']
})
export class BillboardComponent implements OnInit, AfterViewInit {
  swiper: Swiper | undefined;

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
      title: 'Commercial Spaces',
      subtitle: 'Professional Environments',
      description: 'Design inspiring workspaces that enhance productivity and reflect your brand',
      image: 'assets/images/billboard-3.jpg',
      buttonText: 'Get Quote',
      buttonLink: '/contact'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  private initSwiper(): void {
    this.swiper = new Swiper('.main-swiper', {
      speed: 500,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-arrow-next',
        prevEl: '.swiper-arrow-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  nextSlide(): void {
    this.swiper?.slideNext();
  }

  prevSlide(): void {
    this.swiper?.slidePrev();
  }
}
