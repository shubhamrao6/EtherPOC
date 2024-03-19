import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  provisioned = false;
  migrated = false;
  apified = false;
  monetized = false;

  constructor(private router: Router) {}

  routeToComponent(component: string){
    this.router.navigate([component]);
  }

  executeAction(component: string){
    if (component == "QwickCloud"){
      this.provisioned = !this.provisioned;
    } 
    else if (component == "CloudTrek"){
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
