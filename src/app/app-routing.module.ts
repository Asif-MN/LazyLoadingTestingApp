import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: FooterComponent, outlet: "footer-area"},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'leaves', loadChildren: () => import('./leaves/leaves.module').then(m => m.LeavesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
