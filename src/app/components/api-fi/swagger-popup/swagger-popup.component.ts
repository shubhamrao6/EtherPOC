import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

declare const SwaggerUIBundle: any;

@Component({
  selector: 'app-swagger-popup',
  templateUrl: './swagger-popup.component.html',
  styleUrls: ['./swagger-popup.component.css']
})
export class SwaggerPopupComponent implements OnInit {

  constructor(public api: ApiService){}
  ngOnInit(): void {
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
      spec: this.api.openapiJson
    });
  }

}
