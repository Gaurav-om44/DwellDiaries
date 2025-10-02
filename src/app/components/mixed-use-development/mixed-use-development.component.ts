import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mixed-use-development',
  templateUrl: './mixed-use-development.component.html',
  styleUrls: ['./mixed-use-development.component.scss']
})
export class MixedUseDevelopmentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getQuote(): void {
    this.router.navigate(['/contact']);
  }
}