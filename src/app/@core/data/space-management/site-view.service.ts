import { Injectable } from '@angular/core';

@Injectable()
export class SiteViewService {

  sites = [{
    siteId: 1,
    siteName: 'Mariott',
    siteCode: 'MAR_IR',
    city: 'Irvine',
    state: 'California',
    country: 'USA',
  }, {
    siteId: 2,
    siteName: 'Mariott Courtyard',
    siteCode: 'MAR_CO_IR',
    city: 'Irvine',
    state: 'California',
    country: 'USA',
  }];

  getSites() {
    return this.sites;
  }

}
