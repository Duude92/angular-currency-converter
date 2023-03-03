import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noComma'
})
export class NoCommaPipe implements PipeTransform {

  transform(value: number | string | null): string {
    if (value === undefined || value === null) return '';
    return value.toString().replace(',', '');
  }

}
