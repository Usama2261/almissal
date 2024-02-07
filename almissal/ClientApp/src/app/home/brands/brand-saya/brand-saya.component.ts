import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base/base.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-brand-saya',
  templateUrl: './brand-saya.component.html',
  styleUrls: ['./brand-saya.component.css']
})
export class BrandSayaComponent extends BaseComponent implements OnInit {

  constructor(injector: Injector){
    super(injector);
  }

  ngOnInit() {
    this.commonService.breadCrumbPath = 'Brand Saya';
  }
  arr: number[] = [1,2,1,11,1,1,1,1,1,1,1,];
}
