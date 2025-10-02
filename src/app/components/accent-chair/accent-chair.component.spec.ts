import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccentChairComponent } from './accent-chair.component';

describe('AccentChairComponent', () => {
  let component: AccentChairComponent;
  let fixture: ComponentFixture<AccentChairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccentChairComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccentChairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
