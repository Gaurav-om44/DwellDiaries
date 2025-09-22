import { Component, EventEmitter, Output, OnInit, OnDestroy, HostListener } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-popup',
  templateUrl: './search-popup.component.html',
  styleUrls: ['./search-popup.component.scss']
})
export class SearchPopupComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter<void>();
  
  searchForm: FormGroup;
  searchResults: Product[] = [];
  isSearching = false;
  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.searchForm = this.fb.group({
      query: ['']
    });
  }

  ngOnInit(): void {
    this.searchForm.get('query')?.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(query => {
        if (query && query.length > 2) {
          this.searchProducts(query);
        } else {
          this.searchResults = [];
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    this.closeSearch();
  }

  searchProducts(query: string): void {
    this.isSearching = true;
    this.searchResults = this.productService.searchProducts(query);
    this.isSearching = false;
  }

  selectProduct(product: Product): void {
    this.router.navigate(['/product', product.id]);
    this.closeSearch();
  }

  closeSearch(): void {
    this.close.emit();
  }

  onBackdropClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.closeSearch();
    }
  }
}
