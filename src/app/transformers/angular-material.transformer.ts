import { Transformer } from './transformer';

export class AngularMaterialTransformer implements Transformer {
    name = 'Angular & Angular Material';
    settings = [{
        key: 'validations',
        label: 'add material validation',
        value: true
    }];

    getFormHeader(): string {
        return `<form (ngSubmit)="onSubmit(f)" #f="ngForm">`;
    }

    getFormFooter(): string {
        return `

    <button mat-button type="submit">Submit</button>
</form>`;
    }

    getFormControl(key, value): string {
        let result;

        switch (typeof (value)) {
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
        const validations = this.settings.find(e => e.key === 'validations');

        if (validations.value) {

            result = `
    <div>
        <mat-form-field>
            <input matInput placeholder="${key}" id="${key}"
            [(ngModel)]="${key}" name="${key}"  [formControl]="${key}FormControl">
            <mat-error *ngIf="${key}FormControl.invalid">
                Invalid value.
            </mat-error>
        </mat-form-field>
    </div>`;

        } else {
            result = `

        <div>
            <mat-form-field>
                <input matInput placeholder="${key}" id="${key}"
                [(ngModel)]="${key}" name="${key}" required>
            </mat-form-field>
        </div>`;
        }

        return result;
    }

    renderBooleanControl(key) {
        let result;

        result = `

    <div>
        <mat-checkbox id="${key}" [(ngModel)]="${key}" name="${key}">
        ${key}
        </mat-checkbox>
    </div>`;

        return result;
    }
}
