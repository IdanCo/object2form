import { Transformer } from './transformer';

export class AngularJsBootstrap3Transformer implements Transformer {

  name = 'AngularJS & Bootstrap 3';
  settings = [
    {
      key: 'validations',
      label: 'Add Bootstrap 3 validation classes',
      value: true,
    },
    {
      key: 'required',
      label: 'Require all form inputs',
      value: true,
    },
  ];

  getFormHeader(): string {
    return `<form name="form" ng-submit="onSubmit()" novalidate>
`;
  }

  getFormFooter(): string {
    return `
  <button type="submit" class="btn btn-primary">Submit</button>

</form>`;
  }

  getFormControl(key, value): string {
    if (typeof value === 'boolean') {
      return this.renderCheckboxInput(key);
    }
    if (typeof value === 'number') {
      return this.renderInput(key, 'number');
    }
    return this.renderInput(key, 'text');
  }

  private renderCheckboxInput(key): string {
    return `
  <div class="checkbox"${ this.isUsingSetting('validations')
    ? ` ng-class="{ 'has-error': (form.${key}.$touched || form.$submitted) && form.${key}.$invalid }"`
    : `` }>
    <label>
      <input type="checkbox" name="${key}" ng-model="${key}"${ this.isUsingSetting('required')
        ? ` required`
        : `` }> ${key}
    </label>
  </div>
`;
  }

  private renderInput(key, type: 'number' | 'text'): string {
    return `
  <div class="form-group"${ this.isUsingSetting('validations')
    ? ` ng-class="{ 'has-error': (form.${key}.$touched || form.$submitted) && form.${key}.$invalid }"`
    : `` }>
    <label>
      ${key}
      <input type="${type}" name="${key}" class="form-control" ng-model="${key}"${ this.isUsingSetting('required')
        ? ` required`
        : `` }>
    </label>
  </div>
`;
  }

  private isUsingSetting(key): boolean {
    return this.settings.find(s => s.key === key).value;
  }

}
