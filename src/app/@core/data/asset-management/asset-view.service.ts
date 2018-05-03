import { Injectable } from '@angular/core';

@Injectable()
export class AssetViewService {

    assets = [{
    assetId: 1,
    assetType: 'Camera',
    status: 'Active',
    state: 'ON',
    floorNo: 1,
    buildingNo: 1,
    buildingName: 'RMZ',
    integrator: 'TIS',
  }, {
    assetId: 2,
    assetType: 'Lights',
    status: 'Active',
    state: 'ON',
    floorNo: 1,
    buildingNo: 1,
    buildingName: 'RMZ',
    integrator: 'TIS',
  }, {
    assetId: 3,
    assetType: 'Air Conditioner',
    status: 'Active',
    state: 'OFF',
    floorNo: 1,
    buildingNo: 1,
    buildingName: 'RMZ',
    integrator: 'TIS',
  }, {
    assetId: 4,
    assetType: 'BumbleBee',
    status: 'Active',
    state: 'ON',
    floorNo: 1,
    buildingNo: 1,
    buildingName: 'RMZ',
    integrator: 'TIS',
  }, {
    assetId: 5,
    assetType: 'Blinds',
    status: 'Active',
    state: 'OPEN',
    floorNo: 1,
    buildingNo: 1,
    buildingName: 'RMZ',
    integrator: 'TIS',
  }];

  getAssets() {
    return this.assets;
  }

}
