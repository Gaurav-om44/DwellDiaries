import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss']
})
export class BillboardComponent implements OnInit {

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
}
