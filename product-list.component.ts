//importing Component class from angular2/core which will provide basic component to our ProductListComponent and OnInit for implement interface
import {Component,OnInit} from 'angular2/core';
//importing Component class from product.ts file which will provide basic component to our ProductListComponent as data type to products array
import {IProduct} from './product';

import {ProductFilterPipe} from './product-filter.pipe';

import {StarComponent} from '../shared/star.component';

//defining the attribute of component like selector and template 
@Component(
    {
        selector:'pm-products',   //giving name to the app and in template writing the html code
        templateUrl:'app/products/product-list.component.html',  //adding html file to the component
        styleUrls:['app/products/product-list.component.css'], //adding css file to the component
        pipes:[ProductFilterPipe],
        directives:[StarComponent]
    })

//here we are exporting AppComponent class to our index.html and AppComponent name is used for understanding go in
//main.ts file 
export class ProductListComponent implements OnInit{  //OnInit interface implements which have one method ngOnInit which will be fired as the page loads  
    pageTitle:string="Product List";
    imageWidth:number=60;
    imageMargin:number=10;
    showImage:boolean=false;
    listFilter:string='';
    ngOnInit():void{
        console.log("on Init fired!!");
        $.get("app/products/product.json",function(data,status){
            console.log(data);
        })
    }
    toggleImage():void{
        this.showImage=!this.showImage;
    }

    onRatingClicked(message:string):void{
        this.pageTitle = 'Product List: '+message;
    }

//as we need the data of IProduct type as IProduct is the interface which contain all the key
    products:IProduct[]=[      
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://www.gstatic.com/webp/gallery3/1.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "https://www.gstatic.com/webp/gallery3/2.png"
        }

    ];
    
}
