import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaProjectComponent } from './villa-project.component';

describe('VillaProjectComponent', () => {
  let component: VillaProjectComponent;
  let fixture: ComponentFixture<VillaProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillaProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VillaProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
