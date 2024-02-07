import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterVelvetComponent } from './winter-velvet.component';

describe('WinterVelvetComponent', () => {
  let component: WinterVelvetComponent;
  let fixture: ComponentFixture<WinterVelvetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinterVelvetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinterVelvetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
