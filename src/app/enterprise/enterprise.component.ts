import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {

    // Communication between components: Enterprises and Enterprise.
    @Input() enterprise;

    constructor() { }

    ngOnInit() {
    }

}
