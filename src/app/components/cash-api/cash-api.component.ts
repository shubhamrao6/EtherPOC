import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SampleDataService } from 'src/app/services/sample-data.service';

@Component({
  selector: 'app-cash-api',
  templateUrl: './cash-api.component.html',
  styleUrls: ['./cash-api.component.css']
})
export class CashApiComponent implements OnInit {

  selectedAPI = "";
  paymentGateways: any;
  selectedGateway = "";
  isDataFetched = true;

  constructor(public data: SampleDataService, public api: ApiService, private route: Router){}

  ngOnInit(): void {
    this.paymentGateways = this.data.paymentGateways;
    if (this.api.isApified){
      this.selectedAPI = this.api.tableName + " " + "REST API"
    }
  }

  monetizeAPI(){
    console.log(this.selectedAPI, this.selectedGateway, this.api.provisionedResource.id, this.api.tableName)
    this.isDataFetched = false;
    this.api.CA_MonetizeAPI(this.api.provisionedResourceDetails.id, this.api.tableName).subscribe({
      next: (v) => {
        this.api.monetizeAPIResponse = v;
        console.log(v);
      },
      error: (e) => console.error(e),
      complete: () => {
        this.isDataFetched = true;
        this.api.isMonetized = true;
        this.route.navigate(['home']);
        
      } 
    });
  }

}
