import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterKhaddarComponent } from './winter-khaddar.component';

describe('WinterKhaddarComponent', () => {
  let component: WinterKhaddarComponent;
  let fixture: ComponentFixture<WinterKhaddarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinterKhaddarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinterKhaddarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
