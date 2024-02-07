import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerLawnComponent } from './summer-lawn.component';

describe('SummerLawnComponent', () => {
  let component: SummerLawnComponent;
  let fixture: ComponentFixture<SummerLawnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummerLawnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummerLawnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
