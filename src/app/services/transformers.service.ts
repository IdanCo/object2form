import { Injectable } from '@angular/core';
import {Transformer} from "../transformers/transformer";
import {AngularBootstrap4Transformer} from "../transformers/angular-bootstrap4.transformer";
import {Observable} from "rxjs/Observable";
import {AngularBootstrap3Transformer} from "../transformers/angular-bootstrap3.transformer";
import {ReplaySubject} from "rxjs/ReplaySubject";

@Injectable()
export class TransformersService {
  private transformers: Array<Transformer> = [];
  private currentTransformer = new ReplaySubject<Transformer>();

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
    this.currentTransformer.next(transformer);
  }

  getCurrentTransformer(): Observable<Transformer> {
    return this.currentTransformer.asObservable();
  }

}
