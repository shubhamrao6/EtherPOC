import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Injectable } from '../../assets/openapi.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = "https://ether-poc.azurewebsites.net/api/";

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
      return this.http.post(this.baseURL + dbId + "/" + dbName, file);
  }

  CT_Query_Db(dbName: String, dbId: String) {
    return this.http.get(this.baseURL + 'query/database/' + dbId + '/table/' + dbName);
  }

  // ApiFi Openapi Doc Template
  AF_OpenapiTempelate(){
    return this.http.get("./../../assets/openapi.json");
  }

}
