import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerPaperCottonComponent } from './summer-paper-cotton.component';

describe('SummerPaperCottonComponent', () => {
  let component: SummerPaperCottonComponent;
  let fixture: ComponentFixture<SummerPaperCottonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummerPaperCottonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummerPaperCottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
