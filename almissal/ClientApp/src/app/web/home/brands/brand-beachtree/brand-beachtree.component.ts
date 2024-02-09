import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base/base.component';

@Component({
  selector: 'app-brand-beachtree',
  templateUrl: './brand-beachtree.component.html',
  styleUrls: ['./brand-beachtree.component.css'],
})
export class BrandBeachtreeComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.commonService.breadCrumbPath = 'Brand Beachtree';
  }
}
