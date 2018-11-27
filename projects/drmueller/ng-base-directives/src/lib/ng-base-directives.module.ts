import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatProgressSpinnerModule } from '@angular/material';

import { CommandButtonDirective } from './commands/directives/command-button.directive';
import * as enumSplitting from './enum-splitting';
import {
    ProgressSpinnerButtonComponent
} from './progress-spinning/components/progress-spinner-button/progress-spinner-button.component';
import {
    ProgressSpinnerComponent
} from './progress-spinning/components/progress-spinner/progress-spinner.component';
import {
    ProgressSpinnerDirective
} from './progress-spinning/directives/progress-spinner.directive';

@NgModule({
  imports: [
    MatProgressSpinnerModule,
    CommonModule,
    MatButtonModule
  ],
  entryComponents: [
    ProgressSpinnerComponent
  ],
  declarations: [
    enumSplitting.SplitEnumPipe,
    ProgressSpinnerComponent,
    ProgressSpinnerDirective,
    ProgressSpinnerButtonComponent,
    CommandButtonDirective
  ],
  exports: [
    enumSplitting.SplitEnumPipe,
    ProgressSpinnerDirective,
    ProgressSpinnerButtonComponent,
    CommandButtonDirective
  ]
})

export class NgBaseDirectivesModule { }
