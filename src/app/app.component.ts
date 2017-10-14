import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TransformersService} from "./transformers/transformers.service";
import {Transformer} from "./transformers/transformer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  sourceObject = {};

  constructor() {}

  ngOnInit() {
  }

  setSourceObject(sourceObject) {
    this.sourceObject = sourceObject;
  }

}
