import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-editor-tiny-mce',
   template: `
    <ngx-tiny-mce></ngx-tiny-mce>
  `,
  styleUrls: ['./editor-tiny-mce.component.scss'],
})
export class EditorTinyMceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
