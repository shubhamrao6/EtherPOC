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

  constructor(public data: SampleDataService, private route: Router, public api: ApiService) {}

  ngOnInit(): void {
    this.cloudProviders = this.data.data_qc;
    // console.log(this.data.data_qc);
    // console.log(this.data.provisionedResource);
    if (this.data.provisionedResource.provider != ""){
      this.provisionedResources.push(this.data.provisionedResource);
    }
    // console.log("Provisioned Resource", this.provisionedResources);
    if (this.api.provisionedResource.id != "") {
      this.api.QC_Resource_Properties(this.api.provisionedResource.id).subscribe({
        next: (v) => {
          this.api.provisionedResourceDetails = v;
          this.currentProvider.provider = "Azure"
          this.data.provisionedResource.provider = "Azure";
          this.currentProvider.icon = this.data.provisionedResource.icon;
          this.selectedPricingTier = this.data.provisionedResource.tier
          this.databaseName = this.api.provisionedResourceDetails.displayName;
          this.data.provisionedResource.databaseName = this.api.provisionedResourceDetails.displayName;

          console.log("Provisioned Resource Details: ", v);
        },
        error: (e) => console.error(e),
        complete: () => {
          this.databaseName = this.api.provisionedResourceDetails.displayName;
          this.provisionedResources.push(this.data.provisionedResource);
          console.log(this.provisionResource);

        } 
      });
    }
  }

  provisionResource(){
    // console.log(this.currentProvider);
    // console.log(this.databaseName);
    this.api.QC_Resource_Provisioning(this.databaseName).subscribe({
      next: (pr) => {
        this.api.provisionedResource = pr;
        console.log("Provisioned Resource: ", pr);
      },
      error: (e) => console.error(e),
      complete: () => {
        this.api.QC_Resource_Properties(this.api.provisionedResource.id).subscribe({
          next: (v) => {
            this.api.provisionedResourceDetails = v;
            console.log("Provisioned Resource Details: ", v);
          },
          error: (e) => console.error(e),
          complete: () => {
            this.data.provisionedResource.provider = this.currentProvider.provider;
            this.data.provisionedResource.icon = this.currentProvider.icon;
            this.data.provisionedResource.tier = this.selectedPricingTier;
            this.data.provisionedResource.region = this.selectedRegion;
            this.data.provisionedResource.databaseName = this.databaseName;
            this.route.navigate(['home']);
          } 
        });
      } 
    });
    // console.log(this.selectedPricingTier, this.selectedRegion);
  }

}
