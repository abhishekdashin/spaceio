import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WOManagementComponent } from './workorder-management.component';

describe('WOManagementComponent', () => {
  let component: WOManagementComponent;
  let fixture: ComponentFixture<WOManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WOManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WOManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
