import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent

  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log(`constructor`, "Standard JavaScript class constructor . Runs when Angular instantiates the component.");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked", "Runs every time this component content has been checked for changes.");

  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit", "Runs once after the component's content has been initialized.");

  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked", "Runs every time the component's view has been checked for changes.");

  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit", "Runs once after the component's view has been initialized.");

  }

  ngDoCheck(): void {
    console.log("ngDoCheck", "Runs every time this component is checked for changes.");

  }

  ngOnChanges(): void {
    console.log("ngOnChanges", "Runs every time the component's inputs have changed.");

  }

  ngOnInit(): void {
    console.log("ngOnInit", "Runs once after Angular has initialized all the component's inputs.");

  }

  ngOnDestroy(): void {
    console.log("ngOnInit", "Runs once before the component is destroyed.");
  }

}
