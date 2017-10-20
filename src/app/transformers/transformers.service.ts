import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Transformer } from './transformer';
import { AngularBootstrap4Transformer } from './angular-bootstrap4.transformer';
import { AngularBootstrap3Transformer } from './angular-bootstrap3.transformer';
import { AngularMaterialTransformer } from './angular-material.transformer';
import { AngularSemanticTransformer } from './angular-semantic.transformer';

@Injectable()
export class TransformersService {
  private transformers: Array<Transformer> = [];
  private transformer: Transformer;
  private currentTransformerSubject = new ReplaySubject<Transformer>();

  constructor() {
    this.registerTransformer(new AngularBootstrap4Transformer());
    this.registerTransformer(new AngularBootstrap3Transformer());
    this.registerTransformer(new AngularMaterialTransformer());
    this.registerTransformer(new AngularSemanticTransformer());
  }

  registerTransformer(transformer) {
    this.transformers.push(transformer);
  }

  getTransformers(): Array<Transformer> {
    return this.transformers;
  }

  setCurrentTransformer(transformer: Transformer) {
    this.transformer = transformer;
    this.currentTransformerSubject.next(transformer);
  }

  getCurrentTransformer(): Observable<Transformer> {
    return this.currentTransformerSubject.asObservable();
  }

  processObject(sourceObject) {
    let result: string;

    result = this.transformer.getFormHeader();
    for (const key in sourceObject) {
      result = result + this.transformer.getFormControl(key, sourceObject[key]);
    }
    result = result + this.transformer.getFormFooter();

    return result;
  }

}
