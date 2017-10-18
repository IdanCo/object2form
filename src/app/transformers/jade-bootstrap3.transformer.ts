import {Transformer} from "./transformer";

export class JadeBootstrap3Transformer implements Transformer {
  name = 'Jade & Bootstrap 3';
  settings = [{
    key: 'validations',
    label: 'add bootstrap 3 validation classes',
    value: true
  }];

  getFormHeader(): string {
    return `
.row
  .col-md-12.col-sm-6.col-xs-12
    .panel.panel-default
      .panel-heading.clearfix
        i.icon-calendar
        h3.panel-title Title
      .panel-body
        form.form-horizontal.row-border(action='#')`;
  }

  getFormFooter(): string {
    return `
          .form-group
            button.btn.btn-primary(type='submit') Submit`;
  }

  getFormControl(key, value): string {
    //const validations = this.settings.find( e => e.key === 'validations');
    let result;
    let a = typeof(value);
    if (a === "boolean"){
      result = `
          .form-group
            .input-group
              span.input-group-addon
                input(type='checkbox')
              input#${key}.form-control(type='text')
    `;
  } else {
    if (value == "***"){
    result = `
          .form-group
              label.col-md-2.control-label ${key}
              .col-md-10
                input#${key}.form-control(name='${key}', type='password')
      `;
      }else{
      result = `
          .form-group
            label.col-md-2.control-label ${key}
            .col-md-10
              input#${key}.form-control(name='${key}', placeholder='${key}', type='text')
    `;
  }
    }

    return result;
  }

}
