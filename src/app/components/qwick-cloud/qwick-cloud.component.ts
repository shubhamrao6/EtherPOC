import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SampleDataService } from 'src/app/services/sample-data.service';

@Component({
  selector: 'app-qwick-cloud',
  templateUrl: './qwick-cloud.component.html',
  styleUrls: ['./qwick-cloud.component.css']
})
export class QwickCloudComponent implements OnInit {

  cloudProviders: any;
  currentProvider = {
    "provider": "",
    "icon":"",
    "url": "",
    "pricingTier": [] as string[],
    "region": [] as string[]
  };
  selectedPricingTier = "";
  selectedRegion = "";
  databaseName = "";

  provisionedResources = [] as any[];

  constructor(private data: SampleDataService, private route: Router, private api: ApiService) {}

  ngOnInit(): void {
    this.cloudProviders = this.data.data_qc;
    console.log(this.data.data_qc);
    console.log(this.data.provisionedResource);
    if (this.data.provisionedResource.provider != ""){
      this.provisionedResources.push(this.data.provisionedResource);
    }
    console.log("Provisioned Resource", this.provisionedResources);
    this.api.QC_Resource_Properties("a8c4a7f1-4c6b-42c7-babb-71d16fadd2c3").subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    });
  }

  provisionResource(){
    console.log(this.currentProvider);
    console.log(this.selectedPricingTier, this.selectedRegion);
    this.data.provisionedResource.provider = this.currentProvider.provider;
    this.data.provisionedResource.icon = this.currentProvider.icon;
    this.data.provisionedResource.tier = this.selectedPricingTier;
    this.data.provisionedResource.region = this.selectedRegion;
    this.data.provisionedResource.databaseName = this.databaseName;
    this.route.navigate(['home']);
  }

}
