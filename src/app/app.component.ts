import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my first ng app';
  buttonText1="Click-Propery Binding"; 
  buttonText2="Click-Interpolation Binding"; 

  showall(arg:any):void{
    console.log(arg);
  } 
}
