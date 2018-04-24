import { Injectable } from '@angular/core';

@Injectable()
export class SpaceManagementViewService {

  spaces = [{
    roomId: 1,
    roomName: 'Googly',
    roomType: 'Conference',
    buildingId: 11,
    buildingName: 'RMZ Centennial',
    location: 'Bangalore',
  }, {
    roomId: 2,
    roomName: 'NA',
    roomType: 'Reception',
    buildingId: 11,
    buildingName: 'RMZ Centennial',
    location: 'Bangalore',
  }, {
    roomId: 3,
    roomName: 'Cover Drive',
    roomType: 'Conference',
    buildingId: 11,
    buildingName: 'RMZ Centennial',
    location: 'Bangalore',
  }, {
    roomId: 4,
    roomName: 'Banyan',
    roomType: 'Conference',
    buildingId: 11,
    buildingName: 'RMZ Centennial',
    location: 'Bangalore',
  }, {
    roomId: 5,
    roomName: 'Neem',
    roomType: 'Conference',
    buildingId: 11,
    buildingName: 'RMZ Centennial',
    location: 'Bangalore',
  }, {
    roomId: 6,
    roomName: 'Vasu Cubicle',
    roomType: 'Cubicle',
    buildingId: 11,
    buildingName: 'RMZ Centennial',
    location: 'Bangalore',
  }, {
    roomId: 7,
    roomName: 'Jeet Cubicle',
    roomType: 'Cubicle',
    buildingId: 11,
    buildingName: 'RMZ Centennial',
    location: 'Bangalore',
  }, {
    roomId: 8,
    roomName: 'Lavatory Women',
    roomType: 'Lavatory',
    buildingId: 11,
    buildingName: 'RMZ Centennial',
    location: 'Bangalore',
  }, {
    roomId: 9,
    roomName: 'Lavatory Men',
    roomType: 'Lavatory',
    buildingId: 11,
    buildingName: 'RMZ Centennial',
    location: 'Bangalore',
  }, {
    roomId: 10,
    roomName: 'Pantry C Block',
    roomType: 'Pantry',
    buildingId: 11,
    buildingName: 'RMZ Centennial',
    location: 'Bangalore',
  }, {
    roomId: 11,
    roomName: 'Googly',
    roomType: 'Conference',
    buildingId: 11,
    buildingName: 'RMZ Centennial',
    location: 'Bangalore',
  }];

  getSpaces() {
    return this.spaces;
  }

}
