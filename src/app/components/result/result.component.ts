import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {TransformersService} from "../../services/transformers.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnChanges {
  @Input() sourceObject;
  result = '';

  constructor(private transformersService: TransformersService) { }

  ngOnInit() {
    this.transformersService.getCurrentTransformer().subscribe(
      () => this.renderResult()
    );
  }

  ngOnChanges() {
    this.renderResult();
  }

  renderResult() {
    if (this.sourceObject) {
      this.result = this.transformersService.processObject(this.sourceObject);
    } else {
      this.result = 'Please use a valid object';
    }
  }

}
