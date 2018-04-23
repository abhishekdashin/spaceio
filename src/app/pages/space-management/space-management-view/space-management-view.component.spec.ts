import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceManagementViewComponent } from './space-management-view.component';

describe('SpaceManagementViewComponent', () => {
  let component: SpaceManagementViewComponent;
  let fixture: ComponentFixture<SpaceManagementViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceManagementViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceManagementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
