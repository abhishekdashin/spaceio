import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorTinyMceComponent } from './editor-tiny-mce.component';

describe('EditorTinyMceComponent', () => {
  let component: EditorTinyMceComponent;
  let fixture: ComponentFixture<EditorTinyMceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorTinyMceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorTinyMceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
