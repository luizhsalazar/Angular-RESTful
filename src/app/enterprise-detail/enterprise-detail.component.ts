import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EnterpriseService } from '../enterprises/enterprise.service';

@Component({
  selector: 'app-enterprise-detail',
  templateUrl: './enterprise-detail.component.html',
  styleUrls: ['./enterprise-detail.component.css']
})
export class EnterpriseDetailComponent implements OnInit {

    private enterpriseId;
    private enterprise;

    constructor(private route: ActivatedRoute, private enterpriseService: EnterpriseService) { }

    ngOnInit() {
        this.route.params.forEach(
          (params: Params) => this.enterpriseId = params['id']
        );

        this.enterpriseService.getEnterprise(this.enterpriseId)
                              .subscribe(data => this.enterprise = data);
    }
}
