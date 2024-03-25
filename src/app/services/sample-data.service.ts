import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleDataService {

  constructor() { }

  // QwickCloud sample
  data_qc = [{
    "provider": "OutSystems",
    "icon": "../../assets/icons/os.png",
    "url": "personal-qszqefsv.outsystemscloud.com",
    "pricingTier": ["Free"],
    "region": ["Ireland"]
  }];
  provisionedResource = {
    "provider": "",
    "icon": "",
    "url": "personal-qszqefsv.outsystemscloud.com",
    "tier":"",
    "region":""
  };
}
