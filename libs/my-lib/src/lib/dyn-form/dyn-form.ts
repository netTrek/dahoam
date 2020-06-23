import { FormControl } from '@angular/forms';

export interface DynForm {
  name: string;
  type: 'text'|'password'|'email'|'number';
  validators?: ('email'|'required')[];
  control?: FormControl;
}
