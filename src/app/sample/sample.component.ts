import { Component } from '@angular/core';

@Component({
    'selector':'app-sample',
    'template':`<div>{{product.name}} <br>
                 {{product.price}}   
                </div>`
})
export class SampleComponent{

    product={
        name:"Dell",
        price:34000
    } 
    
}