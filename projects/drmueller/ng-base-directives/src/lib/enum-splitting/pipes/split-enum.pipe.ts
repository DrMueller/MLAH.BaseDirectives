import { Pipe, PipeTransform } from '@angular/core';
import { IKeyValuePair } from '@drmueller/language-extensions';

@Pipe({ name: 'splitEnum' })
export class SplitEnumPipe implements PipeTransform {
  public transform(value: any, _: string[]): IKeyValuePair<number, string>[] {
    const result: IKeyValuePair<number, string>[] = [];

    const enumKeys = Object.keys(value);
    enumKeys.forEach(ek => {
      const parsedKey = parseInt(ek, 2);
      if (!isNaN(parsedKey)) {
        result.push({ key: parsedKey, value: value[ek] });
      }
    });

    return result;
  }
}
