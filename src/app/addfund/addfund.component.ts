import { Component, Inject, OnInit } from '@angular/core';
import { FundService } from '../fund.service';
import { Fund } from '../fund/fund.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addfund',
  templateUrl: './addfund.component.html',
  styleUrls: ['./addfund.component.scss'],
})
export class AddfundComponent implements OnInit {
  newFund: Fund = {};
  funds: Fund[] = [];
  name: string;
  ticker: string;
  asset_class: string;
  risk_level: string;
  expense_ratio: string;
  investment_min: string;
  price: string;
  change_price: string;
  summary: string;
  id: number;
  form: FormGroup;

  constructor(
    private fundService: FundService,
    private router: Router,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddfundComponent>
  ) {
    this.name = '';
    this.ticker = '';
    this.asset_class = '';
    this.risk_level = '';
    this.expense_ratio = '';
    this.investment_min = '';
    this.price = '';
    this.change_price = '';
    this.summary = '';
    this.id = 0;
    this.form = formBuilder.group({
      name: this.name,
      ticker: this.ticker,
      asset_class: this.asset_class,
      risk_level: this.risk_level,
      expense_ratio: this.expense_ratio,
      investment_min: this.investment_min,
      price: this.price,
      change_price: this.change_price,
      summary: this.summary,
      id: this.id,
    });
  }

  ngOnInit(): void {}

  add() {
    //Add new ETF Fund
    this.newFund = {
      name: this.name,
      ticker: this.ticker,
      asset_class: this.asset_class,
      risk_level: this.risk_level,
      expense_ratio: this.expense_ratio,
      investment_min: this.investment_min,
      price: this.price,
      change_price: this.change_price,
      summary: this.summary,
      id: this.id,
    };

    console.log('New Fund ', this.newFund);
    this.fundService.addFund(this.newFund).subscribe();
    this.dialogRef.close();
    this.router.navigateByUrl(`/funds`);
  }
}
