import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SampleDataService } from 'src/app/services/sample-data.service';

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

  constructor(private data: SampleDataService, private route: Router, private api: ApiService) {}

  ngOnInit(): void {
    this.dataSources = this.data.data_ct;
    this.api.CT_Query_Db("test212", "a8c4a7f1-4c6b-42c7-babb-71d16fadd2c3").subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    });
  }

}
