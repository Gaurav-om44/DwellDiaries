import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClocksGridComponent } from './clocks-grid.component';

describe('ClocksGridComponent', () => {
  let component: ClocksGridComponent;
  let fixture: ComponentFixture<ClocksGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClocksGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClocksGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
