import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-services',
  templateUrl: './company-services.component.html',
  styleUrls: ['./company-services.component.scss']
})
export class CompanyServicesComponent implements OnInit {

  services = [
    {
      icon: 'truck',
      title: 'Free Shipping',
      description: 'Free shipping on all orders over $50'
    },
    {
      icon: 'shield-check',
      title: 'Secure Payment',
      description: '100% secure payment processing'
    },
    {
      icon: 'headphones',
      title: '24/7 Support',
      description: 'Round-the-clock customer support'
    },
    {
      icon: 'refresh-cw',
      title: 'Easy Returns',
      description: '30-day hassle-free returns'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
