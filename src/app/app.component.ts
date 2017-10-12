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
  transformers: Array<Transformer>;
  transformer: Transformer;

  constructor(private transformersService: TransformersService) {}

  ngOnInit() {
    this.transformers = this.transformersService.getTransformers();
  }

  setTransformer(transformer: Transformer) {
    this.transformer = transformer;
  }

}
