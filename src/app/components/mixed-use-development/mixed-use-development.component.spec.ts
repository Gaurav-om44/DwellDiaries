import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedUseDevelopmentComponent } from './mixed-use-development.component';

describe('MixedUseDevelopmentComponent', () => {
  let component: MixedUseDevelopmentComponent;
  let fixture: ComponentFixture<MixedUseDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixedUseDevelopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MixedUseDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
