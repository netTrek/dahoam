import { Component, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dahoam-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private _checked = true;

  @Input()
  title = 'wizzard';

  @Output()
  checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener('click')
  clicked() {
    this._checked = !this._checked;
    this.checked.emit( this._checked );
  }
}
