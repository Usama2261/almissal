import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base/base.component';

@Component({
  selector: 'app-brand-alkaram-studio',
  templateUrl: './brand-alkaram-studio.component.html',
  styleUrls: ['./brand-alkaram-studio.component.css'],
})
export class BrandAlkaramStudioComponent extends BaseComponent implements OnInit{

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.commonService.breadCrumbPath = 'Brand Alkaram Studio';
  }
}
