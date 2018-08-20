import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceformat'
})
export class PriceformatPipe implements PipeTransform {

  transform(value: number, currency?: string): any {
  	let cur = "";
  	if(currency=="USD"){
  		cur = "$";
  	}

    return value-Math.floor(value)==0 ? cur+value.toLocaleString().split(/\s/).join(',') : cur+value.toFixed(2).toLocaleString().split(/\s/).join(',');
  }

}
