import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: 'button[dahoamviernullDangerBtn], li[dahoamviernullDangerBtn]'
})
export class DangerBtnDirective {


  @Input()
  dahoamviernullDangerBtn = '';

  @Input()
  @HostBinding ('style.color')
  color = 'red';

  @Output() confirmed: EventEmitter<null> = new EventEmitter<null>();
  constructor() {
    console.log ( 'init' );
  }

  @HostListener('click')
  clicked () {
    if ( confirm( this.dahoamviernullDangerBtn === '' ? 'willst du das wirklich?' : this.dahoamviernullDangerBtn ) ) {
      this.confirmed.emit();
    }
  }
}
