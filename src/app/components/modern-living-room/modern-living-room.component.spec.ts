import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernLivingRoomComponent } from './modern-living-room.component';

describe('ModernLivingRoomComponent', () => {
  let component: ModernLivingRoomComponent;
  let fixture: ComponentFixture<ModernLivingRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModernLivingRoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModernLivingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
