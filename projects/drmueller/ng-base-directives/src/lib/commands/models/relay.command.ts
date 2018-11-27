import { Action, Func, } from '@drmueller/language-extensions';

export class RelayCommand {
  public constructor(public action: Action, public canExecuteCallback: Func<boolean>) {
  }

  // public constructor(public action: Action, public canExecute$: Observable<boolean>) {
  // }
}
