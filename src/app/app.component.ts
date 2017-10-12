import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TransformersService} from "./services/transformers.service";
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
    console.info(sourceObject);
    this.sourceObject = sourceObject;
  }

}
