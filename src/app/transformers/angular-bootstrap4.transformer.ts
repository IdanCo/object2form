import {Transformer} from "./transformer";

export class AngularBootstrap4Transformer implements Transformer {
  name = 'Angular & Bootstrap 4';
  settings = [{
    key: 'validations',
    label: 'add bootstrap 4 validation classes',
    value: true
  }];

  getFormHeader(): string {
    let result = `<form (ngSubmit)="onSubmit(f)" #f="ngForm">
`;
    return result;
  }

  getFormFooter(): string {
    return `  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;
  }

  getFormControl(key, value): string {
    let result;

    switch(typeof(value)) {
      case 'boolean':
        result = this.renderBooleanControl(key);
        break;
      default:
        result = this.renderTextControl(key);
    }

    return result;
  }

  renderTextControl(key) {
    let result;
    const validations = this.settings.find( e => e.key === 'validations');

    if (validations.value) {
      result = `
  <div class="form-group">
    <label for="${key}">${key}</label>
    <input type="text" class="form-control" id="${key}"
       ngModel name="${key}" #${key}="ngModel" required
       [ngClass]="{'is-invalid': ${key}.invalid && ${key}.touched}">
    <div class="invalid-feedback">Invalid value</div>
  </div>
`;
    } else {
      result = `
  <div class="form-group">
    <label for="${key}">${key}</label>
    <input type="text" class="form-control" id="${key}"
       ngModel name="${key}" #${key}="ngModel" required>
  </div>
`;
    }
    return result;
  }

  renderBooleanControl(key) {
    let result;

    result = `
  <div class="form-check">
    <label class="form-check-label">
      <input type="checkbox" class="form-check-input" id="${key}"
       ngModel name="${key}" #${key}="ngModel"
       [ngClass]="{'is-invalid': ${key}.invalid && ${key}.touched}">
      ${key}
    </label>
  </div>
`;

    return result;
  }


}
