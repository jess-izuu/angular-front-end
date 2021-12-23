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
  fund: any = {};

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
          if (key != 'id') {
            const localArray = [key, value, false];
            this.tempFundList.push(localArray);
          }
        }
      });
    });
  }

  reconstructFund(): void {
    // const reconstructedFund: any = {};
    this.tempFundList.forEach((item) => {
      this.fund[item[0]] = item[1];
    });
  }

  update(): void {
    this.reconstructFund();
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

  makeStatic(index: number) {
    console.log('hi');
    this.tempFundList[index][2] = false;
  }
}
