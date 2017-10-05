import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  //Write a JavaScript program to take a source array of objects and
  //change all names with ‘-’ to contain ‘/’ instead.
  public arrayOfObjects: any = [];
  public version: string = "1.0";
  public colorful: boolean = false;

  constructor() {
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
