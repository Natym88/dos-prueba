import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(size: number): any {
    return (size / (1024 * 1024)).toFixed(2) + 'MB';
  }

}
