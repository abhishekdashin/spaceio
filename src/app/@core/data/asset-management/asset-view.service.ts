import { Injectable } from '@angular/core';

@Injectable()
export class AssetViewService {

    assets = [{
    assetId: 1,
    assetType: 'Camera',
    status: 'Active',
    floorNo: 1,
    buildingNo: 1,
    buildingName: 'RMZ',
  }, {
    assetId: 2,
    assetType: 'Lights',
    status: 'Active',
    floorNo: 1,
    buildingNo: 1,
    buildingName: 'RMZ',
  }, {
    assetId: 3,
    assetType: 'Air Conditioner',
    status: 'Active',
    floorNo: 1,
    buildingNo: 1,
    buildingName: 'RMZ',
  }, {
    assetId: 4,
    assetType: 'BumbleBee',
    status: 'Active',
    floorNo: 1,
    buildingNo: 1,
    buildingName: 'RMZ',
  }, {
    assetId: 5,
    assetType: 'Blinds',
    status: 'Active',
    floorNo: 1,
    buildingNo: 1,
    buildingName: 'RMZ',
  }];

  getAssets() {
    return this.assets;
  }

}
