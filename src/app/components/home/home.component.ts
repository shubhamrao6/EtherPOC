import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SampleDataService } from 'src/app/services/sample-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  provisioned = false;
  provisionedResourceIcon = "";
  migrated = false;
  apified = false;
  monetized = false;

  constructor(private router: Router, private data: SampleDataService, private api: ApiService) {}

  ngOnInit(): void {
    console.log(this.data.provisionedResource);
    if (this.data.provisionedResource.provider != "") {
      this.provisioned = !this.provisioned;
      this.provisionedResourceIcon = this.data.provisionedResource.icon;
    }
    if (this.api.uploadedData != null) {
      this.executeAction("CloudTrek");
    }
  }

  routeToComponent(component: string){
    this.router.navigate([component]);
  }

  executeAction(component: string){
    // if (component == "QwickCloud"){
    //   this.provisioned = !this.provisioned;
    // } 
    if (component == "CloudTrek"){
      this.migrated = !this.migrated;
    }
    else if (component == "ApiFi"){
      this.apified = !this.apified;
    }
    else if (component == "CashApi"){
      this.monetized = !this.monetized;
    }
  }

}
