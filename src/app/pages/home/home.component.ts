import { AfterContentChecked, AfterContentInit, afterNextRender, afterRender, AfterViewChecked, AfterViewInit, Component, DoCheck, effect, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { log } from '../../utils';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent

  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    log(`constructor`, "Standard JavaScript class constructor . Runs when Angular instantiates the component.");
  }

  basicEffect = effect(( onCleanup ) => {
    log('effect', 'Disparar efectos secundarios');
    onCleanup(() => {
      log('onCleanup', 'Se ejecuta cuando el efecto se va a destruir');
    });
  });

  ngAfterContentChecked(): void {
    log("ngAfterContentChecked", "Runs every time this component content has been checked for changes.");

  }

  ngAfterContentInit(): void {
    log("ngAfterContentInit", "Runs once after the component's content has been initialized.");

  }

  ngAfterViewChecked(): void {
    log("ngAfterViewChecked", "Runs every time the component's view has been checked for changes.");

  }

  ngAfterViewInit(): void {
    log("ngAfterViewInit", "Runs once after the component's view has been initialized.");

  }

  ngDoCheck(): void {
    log("ngDoCheck", "Runs every time this component is checked for changes.");

  }

  ngOnChanges(): void {
    log("ngOnChanges", "Runs every time the component's inputs have changed.");

  }

  ngOnInit(): void {
    log("ngOnInit", "Runs once after Angular has initialized all the component's inputs.");

  }

  ngOnDestroy(): void {
    log("ngOnInit", "Runs once before the component is destroyed.");
  }

  afterNextRenderEffect = afterNextRender(() => {
    log('afterNextRender', 'Runs once the next time that all components have been rendered to the DOM.');
  });

  afterRender = afterRender(() => {
    log('afterRender', 'Runs every time all components have been rendered to the DOM.');
  });

}
