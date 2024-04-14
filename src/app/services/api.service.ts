import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Injectable } from '../../assets/openapi.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = "https://ether-poc.azurewebsites.net/api/";

  // QwickCloud
  provisionedResource: any = {
    "id": "a8c4a7f1-4c6b-42c7-babb-71d16fadd2c3",
    "type": "",
    "displayName": "",
    "description": "",
    "workspaceId": ""
  };
  provisionedResourceDetails: any = {
    "id": "",
    "type": "",
    "displayName": "",
    "description": "",
    "workspaceId": "",
    "properties": {
        "oneLakeTablesPath": "",
        "oneLakeFilesPath": "",
        "sqlEndpointProperties": {
            "connectionString": "",
            "id": "",
            "provisioningStatus": ""
        }
    }
  };

  // CloudTrek
  fileUploadResponse: any = {
    "value": "",
    "Check-After": ""
  };

  uploadedData: any;
  columnsToDisplay: any;

  // Apifi
  openapiJson: any;

  constructor(private http: HttpClient) { }

  // QwickCloud DB Provisioning
  QC_Resource_Provisioning(dbName: String) {
      const body = {
        "itemName": dbName
      }

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      };

      return this.http.post(this.baseURL + 'resource-provisioning', JSON.stringify(body), httpOptions);
  }

  QC_Resource_Properties(dbId: String){
      return this.http.get(this.baseURL + 'resource-properties/' + dbId);
  }

  // CloudTrek CSV Upload
  CT_Migrate_CSV(file: File, dbName: String, dbId: String){
      return this.http.post(this.baseURL + "/migrate-data/" + dbId + "/" + dbName, file);
  }

  CT_Query_Db(dbName: String, dbId: String) {
    return this.http.get(this.baseURL + 'query/database/' + dbId + '/table/' + dbName);
  }

  // ApiFi Openapi Doc Template
  AF_OpenapiTempelate(){
    return this.http.get("./../../assets/openapi.json");
  }

}
