import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Swiper } from 'swiper';
import { Router } from '@angular/router';

export interface DesignProject {
  id: number;
  name: string;
  image: string;
  category: string;
  description: string;
  location: string;
  year: number;
}

@Component({
  selector: 'app-mobile-products',
  templateUrl: './mobile-products.component.html',
  styleUrls: ['./mobile-products.component.scss']
})
export class MobileProductsComponent implements OnInit, AfterViewInit {
  swiper: Swiper | undefined;
  featuredProjects: DesignProject[] = [
    {
      id: 1,
      name: 'Modern Living Room',
      image: 'assets/images/product-item1.jpg',
      category: 'residential',
      description: 'Contemporary living space with clean lines and warm tones',
      location: 'New York, NY',
      year: 2024
    },
    {
      id: 2,
      name: 'Executive Office',
      image: 'assets/images/product-item2.jpg',
      category: 'commercial',
      description: 'Professional workspace designed for productivity and comfort',
      location: 'San Francisco, CA',
      year: 2024
    },
    {
      id: 3,
      name: 'Cozy Bedroom',
      image: 'assets/images/product-item3.jpg',
      category: 'residential',
      description: 'Serene bedroom retreat with natural materials and soft lighting',
      location: 'Los Angeles, CA',
      year: 2024
    },
    {
      id: 4,
      name: 'Restaurant Interior',
      image: 'assets/images/product-item4.jpg',
      category: 'commercial',
      description: 'Elegant dining space with industrial and modern elements',
      location: 'Chicago, IL',
      year: 2024
    },
    {
      id: 5,
      name: 'Kitchen Renovation',
      image: 'assets/images/product-item5.jpg',
      category: 'residential',
      description: 'Complete kitchen transformation with custom cabinetry',
      location: 'Boston, MA',
      year: 2024
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadFeaturedProjects();
  }

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  private loadFeaturedProjects(): void {
    // Projects are already loaded in the array
  }

  private initSwiper(): void {
    setTimeout(() => {
      this.swiper = new Swiper('.mobile-products-swiper', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 20,
          }
        }
      });
    }, 100);
  }

  viewProject(project: DesignProject): void {
    this.router.navigate(['/portfolio', project.id]);
  }
}
