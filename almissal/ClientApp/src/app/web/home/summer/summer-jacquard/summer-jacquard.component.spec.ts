import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerJacquardComponent } from './summer-jacquard.component';

describe('SummerJacquardComponent', () => {
  let component: SummerJacquardComponent;
  let fixture: ComponentFixture<SummerJacquardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummerJacquardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummerJacquardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
