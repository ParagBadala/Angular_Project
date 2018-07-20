//importing Component class from angular2/core which will provide basic component to our app Component
import {Component} from 'angular2/core';
//importing productListComponent and we need to tell AppComponent by writing Directives attribuite
import{ProductListComponent} from './products/product-list.component';

//defining the attribute of component like selector and template 
@Component(
    {
        selector:'pm-app',   //giving name to the app and in template writing the html code
        template:'<pm-products></pm-products>',
        directives:[ProductListComponent]  //ProductListComponent is the name of the class in product-list-component
    })

//here we are exporting AppComponent class to our index.html and AppComponent name is used for understanding go in
//main.ts file 
export class AppComponent{
    pageTitle: string = "Acme Product Management";
}