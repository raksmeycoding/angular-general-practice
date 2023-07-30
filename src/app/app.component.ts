import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputText: string = "default value"
  showThisElement: boolean = false;


  saveInputText(inputEle: HTMLInputElement): void {
    this.inputText = inputEle.value
  }



  // ngDoCheck(): void {
  //   //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //   //Add 'implements DoCheck' to the class.
  //   console.log("Inside parent doCheck")
  // }


}


