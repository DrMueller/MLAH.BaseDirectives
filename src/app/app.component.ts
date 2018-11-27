import { Component } from '@angular/core';

import { RelayCommand } from 'projects/drmueller/ng-base-directives/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showProgressSpinner: boolean;
  public canExecute = false;

  public get command(): RelayCommand {
    return new RelayCommand(this.doSomething, () => this.canExecute);
  }

  public toggleCanExecute(): void {
    this.canExecute = !this.canExecute;
  }

  public toggleProgressSpinner(): void {
    this.showProgressSpinner = !this.showProgressSpinner;
  }

  private doSomething(): void {
    console.log('Something');
  }
}
