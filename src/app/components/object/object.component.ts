import {Component, EventEmitter, OnInit, Output} from '@angular/core';
const DEFAULT_SOURCE_OBJECT =
`{
  name: "John Smith",
  registered: true,
  age: 32
}`;

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {
  @Output() sourceObjectChanged = new EventEmitter();
  rawSourceObject = '';
  isObjectValid = true;

  constructor() { }

  ngOnInit() {
    this.rawSourceObject = DEFAULT_SOURCE_OBJECT;
    this.updateSourceObject();
  }

  updateSourceObject() {
    let sourceObject;

    // const sourceObject = JSON.parse(this.rawSourceObject);
    try {
      sourceObject = JSON.parse(JSON.stringify(eval('(' + this.rawSourceObject + ')')));
      this.isObjectValid = true;
    } catch (e) {
      this.isObjectValid = false;
    }

    this.sourceObjectChanged.emit(sourceObject);
  }

}
