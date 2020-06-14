import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyComponent } from './apply/apply.component';
import { LeavesComponent } from './leaves.component';
import { BalanceComponent } from './balance/balance.component';

const routes: Routes = [
  {
    path: '', component: LeavesComponent, children: [
      {path: 'apply', component: ApplyComponent},
      {path: 'balance', component: BalanceComponent},
      {path:'', redirectTo: 'balance', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeavesRoutingModule { }
