import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainenceViewComponent } from './maintainence-view.component';

describe('MaintainenceViewComponent', () => {
  let component: MaintainenceViewComponent;
  let fixture: ComponentFixture<MaintainenceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainenceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainenceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
