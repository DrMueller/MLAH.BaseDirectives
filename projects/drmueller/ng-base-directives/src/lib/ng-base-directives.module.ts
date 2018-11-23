import { NgModule } from '@angular/core';
import * as pipes from './pipes';

@NgModule({
  imports: [
  ],
  declarations: [
    pipes.SplitEnumPipe
  ],
  exports: [
    pipes.SplitEnumPipe
  ]
})
export class NgBaseDirectivesModule { }
