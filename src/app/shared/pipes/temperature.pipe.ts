import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'temperature', 
    standalone: true
})

export class TemperaturePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if(!args) {
            const result = (+value -32) * (5/9);
            return result.toFixed(2);
        }   
        return null;  
    }
}   

