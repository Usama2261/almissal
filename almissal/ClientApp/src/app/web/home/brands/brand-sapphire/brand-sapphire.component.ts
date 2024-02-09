import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base/base.component';

@Component({
  selector: 'app-brand-sapphire',
  templateUrl: './brand-sapphire.component.html',
  styleUrls: ['./brand-sapphire.component.css'],
})
export class BrandSapphireComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.commonService.breadCrumbPath = 'Brand Sapphire';
  }
}
