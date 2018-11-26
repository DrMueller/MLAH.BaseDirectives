import { Action, } from '@drmueller/language-extensions';
import { Observable } from 'rxjs';

export class RelayCommand {
  public constructor(public action: Action, public canExecute$: Observable<boolean>) {
  }
}
