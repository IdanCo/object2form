import {Transformer} from "./transformer";

export class AngularSemanticTransformer implements Transformer {
  name = 'Angular & Semantic';
  settings = [{
    key: 'validations',
    label: 'add Semantic validation classes',
    value: true
  }];

  getFormHeader(): string {
    return `<form class="ui form" (ngSubmit)="onSubmit(f)" #f="ngForm">
`;
  }

  getFormFooter(): string {
    return `
  <button type="submit" class="ui primary button">Submit</button>
</form>`;
  }

  getFormControl(key, value): string {
    const validations = this.settings.find( e => e.key === 'validations');
    let result;

    if (validations.value) {
      result = `
  <div class="field">
    <label for="${key}">${key}</label>
    <div class="ui input" [ngClass]="{'error': ${key}.invalid && ${key}.touched}">
      <input type="text" id="${key}"
        ngModel name="${key}" #${key}="ngModel"
        required>
    </div>
  </div>
    `;
    } else {
      result = `
  <div class="form-group">
    <label for="${key}">${key}</label>
    <div class="ui input">
      <input type="text" class="form-control" id="${key}"
        ngModel name="${key}" #${key}="ngModel"
        required>
    </div>
  </div>
    `;
    }

    return result;
  }

}
