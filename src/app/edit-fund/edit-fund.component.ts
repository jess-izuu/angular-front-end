import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FundService } from '../fund.service';
import { Fund } from '../fund/fund.model';

@Component({
  selector: 'app-edit-fund',
  templateUrl: './edit-fund.component.html',
  styleUrls: ['./edit-fund.component.scss'],
})
export class EditFundComponent implements OnInit {
  fund: Fund = {};

  constructor(
    private route: ActivatedRoute,
    private fundService: FundService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const myid = +params['id'];
      this.fundService.getFund(myid).subscribe((payload) => {
        console.log('Get Payload ', payload);
        this.fund = payload;
      });
    });
  }

  update(): void {
    this.fundService.updateFund(this.fund).subscribe((payload) => {
      console.log('Update Payload', payload);
    });
  }
}
