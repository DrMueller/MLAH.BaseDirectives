import { SplitEnumPipe } from './split-enum.pipe';
import { IKeyValuePair } from '@drmueller/language-extensions';

enum TestEnum {
  Test1 = 0,
  Test2 = 1
}

describe('SplitEnumType', () => {
  let sut: SplitEnumPipe;

  beforeEach(() => {
    sut = new SplitEnumPipe();
  });

  it('is created', (() => {
    expect(sut).toBeTruthy();
  }));

  describe('splitting an Enum', () => {
    describe('with an actual Enum', () => {
      let actualSplittedEnum: IKeyValuePair<number, string>[];

      // Act
      beforeEach(() => {
        actualSplittedEnum = sut.transform(TestEnum, null);
      });

      it('splits into key value pairs', () => {
        expect(actualSplittedEnum).toBeTruthy();
      });

      it('splits into same amount of enum entries', () => {
        expect(actualSplittedEnum.length).toBe(2);
      });

      it('splits into correct values', () => {
        const expectedSplittedEnum: IKeyValuePair<number, string>[] = [
          <IKeyValuePair<number, string>>{
            key: 0,
            value: 'Test1'
          },
          <IKeyValuePair<number, string>>{
            key: 1,
            value: 'Test2'
          }
        ];

        expect(actualSplittedEnum).toEqual(expectedSplittedEnum);
      });
    });
  });
});
