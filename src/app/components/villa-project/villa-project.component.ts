import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-villa-project',
  templateUrl: './villa-project.component.html',
  styleUrls: ['./villa-project.component.scss']
})
export class VillaProjectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getQuote(): void {
    this.router.navigate(['/contact']);
  }
}