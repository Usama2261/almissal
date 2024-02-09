import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base/base.component';

@Component({
  selector: 'app-brand-breeze',
  templateUrl: './brand-breeze.component.html',
  styleUrls: ['./brand-breeze.component.css'],
})
export class BrandBreezeComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.commonService.breadCrumbPath = 'Brand Breeze';
  }
}
