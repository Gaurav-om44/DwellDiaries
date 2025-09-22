import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSearchOpen = false;
  cartItemCount$: Observable<number>;

  constructor(
    private router: Router,
    private cartService: CartService
  ) {
    this.cartItemCount$ = this.cartService.getCartItemCount();
  }

  ngOnInit(): void {
  }

  toggleSearch(): void {
    this.isSearchOpen = !this.isSearchOpen;
  }

  closeSearch(): void {
    this.isSearchOpen = false;
  }

  navigateToCart(): void {
    this.router.navigate(['/cart']);
  }

  navigateToShop(): void {
    this.router.navigate(['/shop']);
  }
}
