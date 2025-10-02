import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modern-living-room',
  templateUrl: './modern-living-room.component.html',
  styleUrls: ['./modern-living-room.component.scss']
})
export class ModernLivingRoomComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getQuote(): void {
    this.router.navigate(['/contact']);
  }
}