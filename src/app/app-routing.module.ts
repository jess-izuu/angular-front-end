import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFundComponent } from './edit-fund/edit-fund.component';
import { FundComponent } from './fund/fund.component';
import { FundsComponent } from './funds/funds.component';

const routes: Routes = [
  { path: 'funds', component: FundsComponent },
  { path: 'funds/:id', component: FundComponent },
  { path: 'funds/:id/edit', component: EditFundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
