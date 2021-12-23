import { Component, OnInit } from '@angular/core';
import { FundService } from '../fund.service';
import { Fund } from '../fund/fund.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss'],
})
export class FundsComponent implements OnInit {
  constructor(private fundService: FundService, private router: Router) {}

  funds: Fund[] = [];

  ngOnInit(): void {
    this.fundService.getFunds().subscribe((payload) => {
      this.funds = payload;
    });
  }

  edit(id: any): void {
    this.router.navigateByUrl(`/funds/${id}/edit`);
  }

  delete(fund: any): void {
    this.fundService.deleteFund(fund.id).subscribe((fund) => {
      this.fundService.getFunds().subscribe((payload) => {
        this.funds = payload;
      });
    });
  }

  add(fund: any): void {
    this.fundService.addFund(fund).subscribe((payload) => {
      console.log(payload);
    });
  }
}
