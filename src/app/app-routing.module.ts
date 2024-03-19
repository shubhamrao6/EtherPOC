import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { QwickCloudComponent } from './components/qwick-cloud/qwick-cloud.component';
import { CloudTrekComponent } from './components/cloud-trek/cloud-trek.component';
import { ApiFiComponent } from './components/api-fi/api-fi.component';
import { CashApiComponent } from './components/cash-api/cash-api.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'QwickCloud',
        component: QwickCloudComponent
      },
      {
        path: 'CloudTrek',
        component: CloudTrekComponent
      },
      {
        path: 'ApiFi',
        component: ApiFiComponent
      },
      {
        path: 'CashApi',
        component: CashApiComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
