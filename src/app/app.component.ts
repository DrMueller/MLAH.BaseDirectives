import { Component } from '@angular/core';

import { RelayCommand } from 'projects/drmueller/ng-base-directives/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showProgressSpinner: boolean;

  private _canExecute = false;

  public get command(): RelayCommand {
    return new RelayCommand(this.doSomething, () => this._canExecute);
  }

  public toggleCanExecute(): void {
    this._canExecute = !this._canExecute;
  }

  public toggleProgressSpinner(): void {
    this.showProgressSpinner = !this.showProgressSpinner;
  }

  private doSomething(): void {
    console.log('Something');
  }
}
