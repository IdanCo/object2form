export interface Transformer {
  name: string;
  settings: Array<{
    key: string;
    label: string;
    value: boolean;
  }>;
  getFormHeader(): string;
  getFormFooter(): string;
  getFormControl(key, value): string;
}