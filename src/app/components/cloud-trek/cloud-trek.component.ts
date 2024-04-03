import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private data: SampleDataService, private route: Router) {}

  ngOnInit(): void {
    this.dataSources = this.data.data_ct;
  }

}
