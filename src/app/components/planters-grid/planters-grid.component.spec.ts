import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantersGridComponent } from './planters-grid.component';

describe('PlantersGridComponent', () => {
  let component: PlantersGridComponent;
  let fixture: ComponentFixture<PlantersGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantersGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantersGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
