import { Injectable } from '@angular/core';
import {Transformer} from "../transformers/transformer";
import {AngularBootstrap4Transformer} from "../transformers/angular-bootstrap4.transformer";
import {Observable} from "rxjs/Observable";
import {AngularBootstrap3Transformer} from "../transformers/angular-bootstrap3.transformer";
import {ReplaySubject} from "rxjs/ReplaySubject";

@Injectable()
export class TransformersService {
  private transformers: Array<Transformer> = [];
  private transformer: Transformer;
  private currentTransformerSubject = new ReplaySubject<Transformer>();

  constructor() {
    this.registerTransformer(new AngularBootstrap4Transformer());
    this.registerTransformer(new AngularBootstrap3Transformer());
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

    console.info('with', this.transformer);

    result = this.transformer.getFormHeader();
    for (const key in sourceObject) {
      result = result + this.transformer.getFormControl(key, sourceObject[key]);
    }
    result = result + this.transformer.getFormFooter();

    return result;
  }

}
