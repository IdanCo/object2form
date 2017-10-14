import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Transformer} from "../../transformers/transformer";
import {TransformersService} from "../../transformers/transformers.service";

@Component({
  selector: 'app-transformer',
  templateUrl: './transformer.component.html',
  styleUrls: ['./transformer.component.scss']
})
export class TransformerComponent implements OnInit {
  transformers: Array<Transformer>;
  // @Output() transformerChosen: EventEmitter<Transformer> = new EventEmitter<Transformer>();
  // @Output() transformerChosen = new EventEmitter();
  chosenTransformer: Transformer;

  constructor(private transformersService: TransformersService) { }

  ngOnInit() {
    this.transformers = this.transformersService.getTransformers();
    this.setTransformer(this.transformers[0]);
  }

  setTransformer(transformer: Transformer) {
    this.chosenTransformer = transformer;
    this.transformersService.setCurrentTransformer(transformer);
  }

}
