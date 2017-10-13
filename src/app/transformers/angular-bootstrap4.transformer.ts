import {Transformer} from "./transformer";

export class AngularBootstrap4Transformer implements Transformer {
  name = 'Angular & Bootstrap 4';
  settings = [{
    key: 'validations',
    label: 'add bootstrap validation classes',
    value: true
  }];

  getFormHeader(): string {
    let result = `
<form (ngSubmit)="onSubmit(f)" #f="ngForm">
`;
    return result;
  }

  getFormFooter(): string {
    return `  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;
  }

  getFormControl(key, value): string {
    return `
  <div class="form-group">
    <label for="${key}">${key}</label>
    <input type="text" class="form-control" id="${key}"
       ngModel name="${key}" #${key}="ngModel"
       [ngClass]="{'is-invalid': id.invalid && id.touched}"
       required>
    <div class="invalid-feedback">Invalid value</div>
  </div>
`;
  }

}
