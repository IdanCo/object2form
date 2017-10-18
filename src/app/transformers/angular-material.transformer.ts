import { Transformer } from './transformer';

export class AngularMaterialTransformer implements Transformer {
    name = 'Angular & Angular Material';
    settings = [];

    getFormHeader(): string {
        return  `<form (ngSubmit)="onSubmit(f)" #f="ngForm">`;
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

        result = `
    <div>
        <mat-form-field>
            <input matInput placeholder="${key}" id="${key}"
            ngModel name="${key}" #${key}="ngModel" required>
        </mat-form-field>
    </div>`;

        return result;
    }

    renderBooleanControl(key) {
        let result;

        result = `

    <div>
        <mat-checkbox id="${key}"  ngModel name="${key}" #${key}="ngModel">
        ${key}
        </mat-checkbox>
    </div>`;

        return result;
    }
}
