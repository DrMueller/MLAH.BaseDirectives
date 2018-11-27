import { Directive, ElementRef, HostListener, Input, Renderer2, DoCheck } from '@angular/core';

import { RelayCommand } from '../models/relay.command';

@Directive({
  selector: '[drmCommandButton]'
})
export class CommandButtonDirective implements DoCheck {
  private _canExecute: boolean;
  private _command: RelayCommand;

  public constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  @HostListener('click') public onClick() {
    this._command.action();
  }

  @Input() public set command(command: RelayCommand) {
    this._command = command;
  }

  public ngDoCheck(): void {
    const canExecute = this._command.canExecuteCallback();
    if (canExecute !== this._canExecute) {
      this._canExecute = canExecute;
      this.adjustDisabledOnElement();
    }
  }

  private adjustDisabledOnElement() {
    const attributes: NamedNodeMap = this.elementRef.nativeElement.attributes;
    const disabledAttribute = attributes.getNamedItem('disabled');

    if (!this._canExecute && !disabledAttribute) {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', '');
    } else if (this._canExecute && disabledAttribute) {
      this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
    }
  }
}
