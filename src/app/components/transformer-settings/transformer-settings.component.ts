import { Component, OnInit } from '@angular/core';
import {TransformersService} from "../../services/transformers.service";
import {Transformer} from "../../transformers/transformer";

@Component({
  selector: 'app-transformer-settings',
  templateUrl: './transformer-settings.component.html',
  styleUrls: ['./transformer-settings.component.scss']
})
export class TransformerSettingsComponent implements OnInit {
  transformer: Transformer;

  constructor(private transformersService: TransformersService) { }

  ngOnInit() {
    this.transformersService.getCurrentTransformer().subscribe(
      (transformer) => this.transformer = transformer
    );
  }

  updateSettings() {
    this.transformersService.setCurrentTransformer(this.transformer);
  }

}
