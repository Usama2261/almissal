import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base/base.component';

@Component({
  selector: 'app-brand-sana-safinaz',
  templateUrl: './brand-sana-safinaz.component.html',
  styleUrls: ['./brand-sana-safinaz.component.css'],
})
export class BrandSanaSafinazComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.commonService.breadCrumbPath = 'Brand Sana Safinaz';
  }
}
