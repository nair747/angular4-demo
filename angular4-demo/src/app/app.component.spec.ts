import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
describe("AppComponent", () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent]
      }).compileComponents();
    })
  );
  it(
    "should create the app",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );

  it(
    "should display the version number",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);

      const compiled = fixture.debugElement.nativeElement;
      let component = fixture.componentInstance;
      component.version = "2.0";
      fixture.detectChanges();
      expect(compiled.querySelector(".version-number").textContent).toContain(
        "2.0"
      );
    })
  );
});
