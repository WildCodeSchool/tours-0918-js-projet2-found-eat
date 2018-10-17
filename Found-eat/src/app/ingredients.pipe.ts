import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'ingredients'})

export class Ingredients implements PipeTransform {

	transform(value: string): string {
		const ingredientArray: string[] = value.split('.');
		const newStr = ingredientArray.join(', ');
		return newStr;
	}
}
