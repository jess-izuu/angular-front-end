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

  tempFundList: any[][] = [];

  constructor(
    private route: ActivatedRoute,
    private fundService: FundService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const myid = +params['id'];
      this.fundService.getFund(myid).subscribe((payload) => {
        //console.log('Get Payload ', payload);
        this.fund = payload;

        for (const [key, value] of Object.entries(this.fund)) {
          const localArray = [key, value, false];
          this.tempFundList.push(localArray);
        }
      });
    });
  }

  update(): void {
    this.fundService.updateFund(this.fund).subscribe((payload) => {
      console.log('Update Payload', payload);
      if (payload) {
        this.router.navigateByUrl('/funds/' + this.fund.id);
      }
    });
  }

  makeEditable(index: number) {
    this.tempFundList[index][2] = true;
  }
}
