import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WOViewComponent } from './view-wo.component';

describe('AssetViewComponent', () => {
  let component: WOViewComponent;
  let fixture: ComponentFixture<WOViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WOViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WOViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
