import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterJacquardComponent } from './winter-jacquard.component';

describe('WinterJacquardComponent', () => {
  let component: WinterJacquardComponent;
  let fixture: ComponentFixture<WinterJacquardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinterJacquardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinterJacquardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
