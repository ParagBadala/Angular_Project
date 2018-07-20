/**creating another component for star rating which will be in ProductListComponent as it will take input from html
 * file and give output again to the ProductListComponent html file
 */
import {Component,Input,Output,EventEmitter, OnChanges} from 'angular2/core';

@Component(
    {
        selector:'ai-star',
        templateUrl:'app/shared/star.component.html',
        styleUrls:['app/shared/star.component.css']
    })
export class StarComponent implements OnChanges {
    @Input() rating:number;                        /**as it will be a input so @Input() */
    starWidth:number;
    @Output() ratingClicked:EventEmitter<string>=new EventEmitter<string>();    /**it will be an event of ratingClicked name */

    onClick(){
        this.ratingClicked.emit("rating was clicked"+this.rating);
    }

    ngOnChanges():void{
        this.starWidth = this.rating*86/5;
    }
}
