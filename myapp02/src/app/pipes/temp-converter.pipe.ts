import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter'
})
export class TempConverterPipe implements PipeTransform {

  transform(temperature: number, paramConv:string, truFal?:boolean): string {
    var tempResult;
    if(paramConv === "C2F" && truFal == true){
      tempResult = (Math.round((temperature * (9/5)) + 32)).toString();
      return tempResult + " deg F";     
    }
    else if(paramConv === "F2C" && truFal == true){
      tempResult = (Math.round((temperature - 32) * (9/5))).toString();
      if(truFal === true){
        return tempResult + " deg C";
      }      
    }
    else{
      return temperature.toString();
    }    
}

}
