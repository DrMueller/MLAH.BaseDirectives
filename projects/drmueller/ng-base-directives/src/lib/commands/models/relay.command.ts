import { Action, Func } from '@drmueller/language-extensions';

import { ICommand } from './command.interface';

export class RelayCommand implements ICommand {
  public constructor(private action: Action, private canExecuteCallback: Func<boolean> | null = null) {
  }

  public get canExecute(): boolean {
    if (!this.canExecuteCallback) {
      return true;
    }

    return this.canExecuteCallback();
  }
  public execute(): void {
    this.action();
  }
}
