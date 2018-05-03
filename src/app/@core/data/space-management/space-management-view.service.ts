import { Injectable } from '@angular/core';

@Injectable()
export class SpaceManagementViewService {

  spaces = [{
    spaceId: 1,
    spaceName: 'GROOV I',
    spaceType: 'Conference',
    siteCode: 'MAR_IR',
    floorNo: 1,
  }, {
    spaceId: 2,
    spaceName: 'GROOV II',
    spaceType: 'Conference',
    siteCode: 'MAR_IR',
    floorNo: 1,
  }, {
    spaceId: 3,
    spaceName: 'Reception',
    spaceType: 'Reception',
    siteCode: 'MAR_IR',
    floorNo: 1,
  }, {
    spaceId: 4,
    spaceName: 'Heirloom',
    spaceType: 'Restaurant',
    siteCode: 'MAR_IR',
    floorNo: 1,
  }];

  getSpaces() {
    return this.spaces;
  }

}
