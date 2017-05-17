import { Component } from '@angular/core';
import { Enterprise } from './enterprise';
import { EnterpriseService } from './enterprise.service';

@Component({
  selector: 'my-enterprises',
  templateUrl: './enterprise.component.html',
  styleUrls:['./enterprise.component.css']
})
export class EnterprisesComponent {
  heading = "Enterprise Angular App";
  cash = 10000;
  enterprises: Enterprise[];

  constructor(private enterpriseService: EnterpriseService) { }

  ngOnInit() {
    this.enterpriseService.getEnterprises()
        .subscribe(data => this.enterprises = data);
  }

  totalCost() {
    let sum = 0;
    // if (this.enterprises) {
    //   for (let enterprise of this.enterprises) {
    //     if (enterprise.isRacing) sum += enterprise.entryFee;
    //   }
    // }
    return sum;
  }

  castDate(date) {
    return new Date(date);
  }

  cashLeft() {
    return this.cash - this.totalCost();
  }

  enterEnterprise(enterprise) {
    // if (this.cashLeft() > enterprise.entryFee) {
    //   enterprise.isRacing = true;
    // } else {
    //   alert("You don't have enough cash");
    // }
  }

  cancelEnterprise(enterprise) {
    enterprise.isRacing = false;
  }

}
