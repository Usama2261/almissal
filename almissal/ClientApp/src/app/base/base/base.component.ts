import { Component, Injector } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-base',
  template: ` <p>base works!</p> `,
  styles: [],
})
export abstract class BaseComponent {
  commonService: CommonService;

  constructor(injector: Injector) {
    this.commonService = injector.get(CommonService);
  }
}
