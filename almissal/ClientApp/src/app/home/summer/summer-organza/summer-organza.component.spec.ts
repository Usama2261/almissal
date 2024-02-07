import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerOrganzaComponent } from './summer-organza.component';

describe('SummerOrganzaComponent', () => {
  let component: SummerOrganzaComponent;
  let fixture: ComponentFixture<SummerOrganzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummerOrganzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummerOrganzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
