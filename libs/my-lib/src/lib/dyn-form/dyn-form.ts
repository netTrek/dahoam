import { FormControl } from '@angular/forms';

export interface DynForm {
  name: string;
  type: 'text'|'password'|'email';
  validators?: ('email'|'required')[];
  control?: FormControl;
}
