import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { SampleDataService } from 'src/app/services/sample-data.service';
import { CsvTableComponent } from './csv-table/csv-table.component';

@Component({
  selector: 'app-cloud-trek',
  templateUrl: './cloud-trek.component.html',
  styleUrls: ['./cloud-trek.component.css']
})
export class CloudTrekComponent implements OnInit {

  dataSources: any;
  currentSource = {
    "source": "",
    "icon": "",
    "tableName": ""
  };

  columnsToDisplay: any;

  fileToUpload: File | null = null;

  constructor(private data: SampleDataService, private route: Router, public api: ApiService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSources = this.data.data_ct;
    this.api.CT_Query_Db("test212", "a8c4a7f1-4c6b-42c7-babb-71d16fadd2c3").subscribe({
      next: (v:any) => {
        console.log(v)
        this.columnsToDisplay = Object.keys(v.value[0]);
        this.api.uploadedData = v;
        this.api.columnsToDisplay = Object.keys(v.value[0]);
      },
      error: (e) => console.error(e),
      complete: () => {
        console.info('complete')
        console.log(this.columnsToDisplay);
      } 
    });
  }

  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
    this.fileToUpload = fileInputEvent.target.files[0];
  }

  migrateCSV(){
    if (this.fileToUpload != null)
    this.api.CT_Migrate_CSV(this.fileToUpload, this.api.provisionedResourceDetails.displayName, this.api.provisionedResourceDetails.id).subscribe({
      next: (v) => {
        this.api.fileUploadResponse = v;
        console.log(v);
      },
      error: (e) => console.error(e),
      complete: () => {

      } 
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(CsvTableComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
