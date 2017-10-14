import {Transformer} from "./transformer";

export class AngularBootstrap3Transformer implements Transformer {
  name = 'Angular & Bootstrap 3';
  settings = [{
    key: 'validations',
    label: 'add bootstrap 3 validation classes',
    value: true
  }];

  getFormHeader(): string {
    return `<form (ngSubmit)="onSubmit(f)" #f="ngForm">
`;
  }

  getFormFooter(): string {
    return `  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;
  }

  getFormControl(key, value): string {
    const validations = this.settings.find( e => e.key === 'validations');
    let result;

    if (validations.value) {
      result = `
  <div class="form-group" [ngClass]="{'has-error': ${key}.invalid && ${key}.touched}">
    <label for="${key}">${key}</label>
    <input type="text" class="form-control" id="${key}"
       ngModel name="${key}" #${key}="ngModel"
       required>
    <span class="help-block" *ngIf="${key}.invalid && ${key}.touched}">Invalid value</span>
  </div>
    `;
    } else {
      result = `
  <div class="form-group">
    <label for="${key}">${key}</label>
    <input type="text" class="form-control" id="${key}"
       ngModel name="${key}" #${key}="ngModel"
       required>
  </div>
    `;
    }

    return result;
  }

}