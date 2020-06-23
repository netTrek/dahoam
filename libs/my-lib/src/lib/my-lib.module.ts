import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DangerBtnDirective } from './danger-btn/danger-btn.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DangerBtnDirective],
  exports: [DangerBtnDirective],
})
export class MyLibModule {}
