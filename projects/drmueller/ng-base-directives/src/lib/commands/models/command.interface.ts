export interface ICommand {
  canExecute: boolean;
  execute(): void;
}
