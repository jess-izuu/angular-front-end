import { Component, OnInit } from '@angular/core';
import { FundService } from '../fund.service';
import { Fund } from '../fund/fund.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddfundComponent } from '../addfund/addfund.component';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss'],
})
export class FundsComponent implements OnInit {
  constructor(
    private fundService: FundService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  funds: Fund[] = [];
  displayedColumns: string[] = [
    'name',
    'ticker',
    'price',
    'risk_level',
    'buttons',
  ];

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

  add(): void {
    // this.router.navigateByUrl(`/funds/${9}/add`);
    //const dialogConfig = new MatDialogConfig();
    this.dialog.open(AddfundComponent);
  }
}
