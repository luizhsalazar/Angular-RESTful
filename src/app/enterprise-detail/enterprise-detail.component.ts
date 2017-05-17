import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-enterprise-detail',
  templateUrl: './enterprise-detail.component.html',
  styleUrls: ['./enterprise-detail.component.css']
})
export class EnterpriseDetailComponent implements OnInit {

    private enterpriseId;

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params.forEach(
          (params: Params) => this.enterpriseId = params['id']
        );
    }

}
