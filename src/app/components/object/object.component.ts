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
  rawSourceObject: string = '';

  constructor() { }

  ngOnInit() {
    this.rawSourceObject = DEFAULT_SOURCE_OBJECT;
  }

  updateSourceObject() {
    // const sourceObject = JSON.parse(this.rawSourceObject);
    const sourceObject = JSON.parse(JSON.stringify(eval('(' + this.rawSourceObject + ')')));
    this.sourceObjectChanged.emit(sourceObject);
  }

}
