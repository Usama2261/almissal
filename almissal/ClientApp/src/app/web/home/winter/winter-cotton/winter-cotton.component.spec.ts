import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterCottonComponent } from './winter-cotton.component';

describe('WinterCottonComponent', () => {
  let component: WinterCottonComponent;
  let fixture: ComponentFixture<WinterCottonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinterCottonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinterCottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
