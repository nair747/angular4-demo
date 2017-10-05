import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public arrayOfObjects: any = [];
  public version: string = "1.0";
  public colorful: boolean = false; //true- display Hellow world text in orange color.

  constructor() {
    //initialize array with some data
    this.arrayOfObjects = [
      {
        name: "Nishanth-Nair",
        city: "Austin"
      },
      {
        name: "Secure-Works",
        city: "Atlanta"
      },
      {
        name: "Dell",
        city: "Round Rock"
      }
    ];
  }

  replaceHyphenWithSlash() {
    this.arrayOfObjects.map(item => {
      item.name = item.name.replace("-", "/");
    });
  }
}
