import { Directive, ElementRef, HostListener, Input, Renderer2, DoCheck } from '@angular/core';
import { ICommand } from '../models/command.interface';

@Directive({
  selector: '[drmCommandButton]'
})
export class CommandButtonDirective implements DoCheck {
  private _command: ICommand;

  public constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  @HostListener('click') public onClick() {
    this._command.execute();
  }

  @Input() public set command(command: ICommand) {
    this._command = command;
    console.log('In Command');
    this.adjustDisabledOnElement();
  }

  public ngDoCheck(): void {
    this.adjustDisabledOnElement();
  }

  private adjustDisabledOnElement() {
    console.log('In adjustDisabledOnElement');
    const attributes: NamedNodeMap = this.elementRef.nativeElement.attributes;
    const disabledAttribute = attributes.getNamedItem('disabled');

    console.log('In adjustDisabledOnElement');

    const canExecute = this._command.canExecute;
    console.log(disabledAttribute);
    console.log(canExecute);

    if (!canExecute && !disabledAttribute) {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', '');
    } else if (this._command.canExecute && disabledAttribute) {
      this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
    }
  }
}
