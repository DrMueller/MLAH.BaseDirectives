import { Directive, Input, ElementRef, Renderer, HostListener } from '@angular/core';
import { RelayCommand } from '../models/relay.command';

@Directive({
  selector: '[drmCommandButton]'
})
export class CommandButtonDirective {
  private _command: RelayCommand;
  private _canExecute: boolean;

  @HostListener('click') onClick() {
    this._command.action();
  }

  @Input() public set command(command: RelayCommand) {
    this._command = command;
    this._command.canExecute$.subscribe(f => {
      this._canExecute = f;
      this.adjustDisabledOnElement();
    });
  }

  private adjustDisabledOnElement() {
    const elementValue = this._canExecute ? '' : null; // NULL removes the attribute
    this.renderer.setElementAttribute(this.elementRef.nativeElement, 'disabled', elementValue);
  }

  constructor(private renderer: Renderer, private elementRef: ElementRef) { }
}
