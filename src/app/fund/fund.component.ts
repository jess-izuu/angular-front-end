import { Component, OnInit } from '@angular/core';
import { FundService } from '../fund.service';
import { ActivatedRoute } from '@angular/router';
import { Fund } from './fund.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss'],
})
export class FundComponent implements OnInit {
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
        console.log('Payload ', payload);
        this.fund = payload;
      });
    });
  }

  edit(): void {
    this.router.navigateByUrl(`/funds/${this.fund.id}/edit`);
  }
}
