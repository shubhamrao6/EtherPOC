import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SampleDataService } from 'src/app/services/sample-data.service';
import { SwaggerPopupComponent } from './swagger-popup/swagger-popup.component';

declare const SwaggerUIBundle: any;

@Component({
  selector: 'app-api-fi',
  templateUrl: './api-fi.component.html',
  styleUrls: ['./api-fi.component.css']
})
export class ApiFiComponent implements OnInit {

  path = "/api/query/database/a8c4a7f1-4c6b-42c7-babb-71d16fadd2c3/table/ll3"

  apiTypes: any;
  selectedApiType = "";

  openapiJson: any;

  isDataFetched = true;

  constructor(private data: SampleDataService, private route: Router, public api: ApiService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.apiTypes = this.data.apiTypes;
    if (this.api.tableName != "" && this.api.provisionedResource.id != "") {
      this.isDataFetched = false;
      this.path = "/api/query/database/" + this.api.provisionedResource.id + "/table/" + this.api.tableName 
      this.api.AF_OpenapiTempelate().subscribe({
        next: (v) => {
          console.log(v);
          this.openapiJson = v;
          this.api.openapiJson = v;
        },
        error: (e) => console.error(e),
        complete: () => {
          this.isDataFetched = true;
          console.info('complete');
          // this.api.isApified = true;
          console.log(this.api.isApified);
          this.openapiJson['paths'][this.path] = this.openapiJson['paths']['path'];
          delete this.openapiJson['paths']['path'];
          console.log(this.openapiJson);
          // this.saveText( JSON.stringify(this.openapiJson), "./../../assets/oa.json" );
          const ui = SwaggerUIBundle({
            dom_id: '#swagger-ui',
            layout: 'BaseLayout',
            presets: [
              SwaggerUIBundle.presets.apis,
              SwaggerUIBundle.SwaggerUIStandalonePreset
            ],
            // url: './../../assets/openapi.json',
            docExpansion: 'none',
            operationsSorter: 'alpha',
            spec: this.openapiJson
          });
        } 
      }); 
    }
  }

  saveText(text:string, filename: string){
    var a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(text));
    a.setAttribute('download', filename);
    a.click()
  }

  openDialog() {
    const dialogRef = this.dialog.open(SwaggerPopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  apifi() {
    this.api.isApified = true;
    this.route.navigate(['home']);
  }

}
