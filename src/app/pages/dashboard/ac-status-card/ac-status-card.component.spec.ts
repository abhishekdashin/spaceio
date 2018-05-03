import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcStatusCardComponent } from './ac-status-card.component';

describe('AcStatusCardComponent', () => {
  let component: AcStatusCardComponent;
  let fixture: ComponentFixture<AcStatusCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcStatusCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcStatusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
