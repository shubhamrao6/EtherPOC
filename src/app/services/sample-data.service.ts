import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleDataService {

  constructor() { }

  // QwickCloud sample
  data_qc = [
    {
    "provider": "Azure",
    "icon": "../../assets/icons/icons8-azure-144.png",
    "url": "",
    "pricingTier": ["Free"],
    "region": ["Ireland"]
    },
    {
      "provider": "AWS",
      "icon": "../../assets/icons/icons8-amazon-web-services-144.png",
      "url": "",
      "pricingTier": ["Free"],
      "region": ["Ireland"]
    },
    {
      "provider": "Google Cloud",
      "icon": "../../assets/icons/icons8-google-cloud-144.png",
      "url": "",
      "pricingTier": ["Free"],
      "region": ["Ireland"]
    }
];
  provisionedResource = {
    "provider": "",
    "icon": "../../assets/icons/icons8-azure-144.png",
    "urls": [],
    "tier":"Free",
    "region":"Ireland",
    "databaseName": ""
  };

  // CloudTrek Sample
  data_ct = [
    {
    "source": "CSV",
    "icon": "../../assets/icons/csv.896x1024.png",
    "tableName": ""
    },
    {
      "source": "JSON",
      "icon": "../../assets/icons/json-file.png",
      "tableName": ""
    },
    {
      "source": "Excel",
      "icon": "../../assets/icons/icons8-excel-240.png",
      "tableName": ""
    },
    {
      "source": "Mongo",
      "icon": "../../assets/icons/pngwing.com.png",
      "tableName": ""
    },
    {
      "source": "MS SQL Server",
      "icon": "../../assets/icons/mssqlserver.png",
      "tableName": ""
    },
    {
      "source": "PostgreSQL",
      "icon": "../../assets/icons/icons8-postgresql-240.png",
      "tableName": ""
    }
  ];

  // ApiFi Sample
  apiTypes = [
    {
      "name": "REST",
      "icon": "../../assets/icons/1679583758253.png"
    },
    {
      "name": "GraphQL",
      "icon": "../../assets/icons/icons8-graphql-an-open-source-data-query-and-manipulation-language-for-api-96.png"
    },
    {
      "name": "RestAPI",
      "icon": "../../assets/icons/icon-soap.png"
    },
  ];

}
