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

    constructor(private _enterpriseService: EnterpriseService) { }

    ngOnInit() {
        this._enterpriseService.getEnterprises()
            .subscribe(data => this.enterprises = data);
    }

    totalCost() {
        let sum = 0;
        return sum;
    }

    castDate(date) {
        return new Date(date);
    }

    cashLeft() {
        return this.cash - this.totalCost();
    }
}
