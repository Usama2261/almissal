import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base/base.component';

@Component({
  selector: 'app-brand-limelight',
  templateUrl: './brand-limelight.component.html',
  styleUrls: ['./brand-limelight.component.css'],
})
export class BrandLimelightComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.commonService.breadCrumbPath = 'Brand Limelight';
  }
}
