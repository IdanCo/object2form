import { Injectable } from '@angular/core';
import {TransformersService} from "./transformers.service";

@Injectable()
export class TransformerService {
  private transformer;

  constructor(private transformersService: TransformersService) {
  }

  register() {
    this.transformersService.registerTransformer(this.transformer);
  }

}
