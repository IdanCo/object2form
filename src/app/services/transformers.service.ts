import { Injectable } from '@angular/core';
import {Transformer} from "../transformers/transformer";
import {AngularBootstrapTransformer} from "../transformers/angular-bootstrap.transformer";

@Injectable()
export class TransformersService {
  private transformers: Array<Transformer> = [];

  constructor() {
    this.registerTransformer(new AngularBootstrapTransformer());
  }

  registerTransformer(transformer) {
    this.transformers.push(transformer);
  }

  getTransformers() {
    return this.transformers;
  }

}
