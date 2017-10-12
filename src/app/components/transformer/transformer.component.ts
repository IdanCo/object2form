import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Transformer} from "../../transformers/transformer";

@Component({
  selector: 'app-transformer',
  templateUrl: './transformer.component.html',
  styleUrls: ['./transformer.component.scss']
})
export class TransformerComponent implements OnInit {
  @Input()
  transformers: Array<Transformer>;
  // @Output() transformerChosen: EventEmitter<Transformer> = new EventEmitter<Transformer>();
  @Output() transformerChosen = new EventEmitter();

  chosenTransformer: Transformer;

  constructor() { }

  ngOnInit() {
    this.chosenTransformer = this.transformers[0];
    this.transformerChosen.emit(this.chosenTransformer);
  }

}
