import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccentChairsGridComponent } from './accent-chairs-grid.component';

describe('AccentChairsGridComponent', () => {
  let component: AccentChairsGridComponent;
  let fixture: ComponentFixture<AccentChairsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccentChairsGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccentChairsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
