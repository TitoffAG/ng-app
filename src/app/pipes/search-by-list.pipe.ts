import { Pipe, PipeTransform } from '@angular/core';

import { HasTitle } from 'src/app/constants';

@Pipe({
  name: 'searchByList'
})
export class SearchByListPipe implements PipeTransform {
  transform<T extends HasTitle>(list: Array<T>, term: string): Array<T> {
    return list.filter(item => item.title.toLocaleLowerCase().includes(term));
  }
}