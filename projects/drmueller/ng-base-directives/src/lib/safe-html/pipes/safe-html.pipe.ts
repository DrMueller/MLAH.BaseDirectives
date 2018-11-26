import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})

export class SafeHtmlPipe implements PipeTransform {
  public transform(value: any) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }

  constructor(private sanitized: DomSanitizer) { }
}
