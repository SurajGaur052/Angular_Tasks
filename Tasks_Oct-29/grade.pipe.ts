import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradepipe'
})
export class GradePipe implements PipeTransform {

  transform(input:number): string {
    let output="";
    if(input==1){output="Outstading"}
    else if(input==2){output="Excellent"}
    else if(input==3){output="Good"}
    else
    {output="Avarage"}

    return output;
  }

}
