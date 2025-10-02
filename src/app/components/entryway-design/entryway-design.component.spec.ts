import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrywayDesignComponent } from './entryway-design.component';

describe('EntrywayDesignComponent', () => {
  let component: EntrywayDesignComponent;
  let fixture: ComponentFixture<EntrywayDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrywayDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntrywayDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
