import { IProduct } from './product';
import {PipeTransform,Pipe} from 'angular2/core';

@Pipe(
    {
        name:'productFilter'
    })

export class ProductFilterPipe implements PipeTransform
{
    transform(value:IProduct[],args:string[]):IProduct[]
    {
        let filter:string = args[0] ? args[0].toLocaleLowerCase():null;
        return filter?value.filter(
            (product:IProduct)=>
            {return product.productName.toLocaleLowerCase().indexOf(filter)!=-1}
        ):value;

    }
}
/*********Sir code **********/

/*
import { PipeTransform, Pipe } from 'angular2/core';
import { IProduct } from './product';
@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], args: string[]): 
IProduct[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}*/