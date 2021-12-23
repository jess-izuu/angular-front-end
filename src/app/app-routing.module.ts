import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFundComponent } from './edit-fund/edit-fund.component';
import { FundComponent } from './fund/fund.component';
import { FundsComponent } from './funds/funds.component';
import { AddfundComponent } from './addfund/addfund.component';

const routes: Routes = [
  { path: 'funds', component: FundsComponent },
  { path: 'funds/:id', component: FundComponent },
  { path: 'funds/:id/edit', component: EditFundComponent },
  { path: 'funds/:id/add', component: AddfundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
