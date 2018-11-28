import { RelayCommand } from './relay.command';
import { Func } from '@drmueller/language-extensions';

describe('RelayCommand', () => {

  it('is created', (() => {
    const expectedRelayCommand = new RelayCommand(null);
    expect(expectedRelayCommand).toBeTruthy();
  }));

  describe('creating a RelayCommand', () => {
    // Arrange
    let sut: RelayCommand;

    describe('without a canExecute callback', () => {

      // Act
      beforeEach(() => {
        sut = new RelayCommand(null);
      });

      // Assert
      it('creates a RelayCommand', () => {
        expect(sut).toBeTruthy();
      });

      // Assert
      it('evaluates to canExecute=true', () => {
        expect(sut.canExecute).toBe(true);
      });
    });

    describe('with a canExecute callback', () => {
      let canExecuteCallback: Func<boolean>;

      describe('with evaluating to false', () => {
        beforeEach(() => {
          canExecuteCallback = () => false;
          sut = new RelayCommand(null, canExecuteCallback);
        });

        it('evaluates to canExecute=false', () => {
          expect(sut.canExecute).toBe(false);
        });
      });

      describe('with evaluating to true', () => {
        beforeEach(() => {
          canExecuteCallback = () => true;
          sut = new RelayCommand(null, canExecuteCallback);
        });

        it('evaluates to canExecute=true', () => {
          expect(sut.canExecute).toBe(true);
        });
      });
    });
  });
});
