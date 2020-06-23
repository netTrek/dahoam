import { Component, EventEmitter, HostListener, Input, NgModule, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dahoamviernull-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit, OnDestroy {

  @Input() imgPath: string;
  @Output() selectedCat: EventEmitter<string> = new EventEmitter<string>();
  destroyed: Subject<boolean> = new Subject();

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click')
  clicked() {
    this.selectedCat.emit( this.imgPath );
  }

  ngOnDestroy (): void {
    this.destroyed.next( true );
    this.destroyed.complete();
  }

}

@NgModule(
  {
    declarations: [AvatarComponent],
    imports: [CommonModule]
  }
)
class MyModule { // unbeddingt ohne Export

}
