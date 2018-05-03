import { Injectable } from '@angular/core';

@Injectable()
export class AssetViewService {

    assets = [{
    assetId: 'Lights1_MAR_F1',
    assetType: 'Lights',
    status: 'Active',
    state: 'ON',
    spaceName: 'GROOV I',
    integrator: 'TIS',
  }, {
    assetId: 'Lights2_MAR_F1',
    assetType: 'Lights',
    status: 'Active',
    state: 'ON',
    spaceName: 'GROOV I',
    integrator: 'TIS',
  }, {
    assetId: 'Blinds1_MAR_F1',
    assetType: 'Blinds',
    status: 'Active',
    state: 'OPEN',
    spaceName: 'GROOV I',
    integrator: 'TIS',
  }, {
    assetId: 'AC1_MAR_F1',
    assetType: 'Air Conditioner',
    status: 'Active',
    state: 'COOLING',
    spaceName: 'GROOV I',
    integrator: 'TIS',
  }, {
    assetId: 'CoffeeMaker1_MAR_F1',
    assetType: 'Coffee Maker',
    status: 'Active',
    state: 'OFF',
    spaceName: 'GROOV I',
    integrator: 'TIS',
  }, {
    assetId: 'BumbleBee1_MAR_F1',
    assetType: 'BumbleBee',
    status: 'Active',
    state: 'ON',
    spaceName: 'GROOV I',
    integrator: 'TIS',
  }, {
    assetId: 'Camera1_MAR_F1',
    assetType: 'Camera',
    status: 'Active',
    state: 'OFF',
    spaceName: 'GROOV I',
    integrator: 'TIS',
  }];

  getAssets() {
    return this.assets;
  }

}
