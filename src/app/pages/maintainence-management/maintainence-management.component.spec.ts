import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainenceManagementComponent } from './maintainence-management.component';

describe('MaintainenceManagementComponent', () => {
  let component: MaintainenceManagementComponent;
  let fixture: ComponentFixture<MaintainenceManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainenceManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainenceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
