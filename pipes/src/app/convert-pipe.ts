import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  // This is the function that will be called when the pipe is used: 
  transform(value: number, targetUnits: string): any {
    console.log(value.toFixed(0));
    if (!value) {
      return ''; 
    }

    //Now we can write logic based on the target units:

    switch (targetUnits) {
      case "kilometers":
        value = value * 1.60934;
        value = parseFloat(value.toFixed(0));
        console.log("Converted Value: ", value);
        return value;
    
        case "meters":
          value = value * 1609.34;
          value = parseFloat(value.toFixed(0));
          return value;

      default:
        break;
    }
    console.log("Value outside of switch: ",value, targetUnits);

  }

}
