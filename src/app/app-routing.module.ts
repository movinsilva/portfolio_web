import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PortfolioWebComponent } from './project-pages/portfolio-web/portfolio-web.component';
import { TravelgoComponent } from './project-pages/travelgo/travelgo.component';
import { HrmsComponent } from './project-pages/hrms/hrms.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'portfolio-web', component: PortfolioWebComponent },
  { path: 'travelgo', component: TravelgoComponent},
  { path: 'hrms', component: HrmsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
