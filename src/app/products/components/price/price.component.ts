import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges, Input } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()

  public price:number = 0;

  public interval$?: Subscription;

  constructor() {

  }

  ngOnInit(): void {
      console.log('PriceComponent ngOnInit');
      this.interval$ = interval(1000).subscribe( value => console.log(`i = ${value}`));
      
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log({ type: 'Price Onchanges', changes });
      
  }

  ngOnDestroy(): void {
      console.log('PriceComponent ngOnDestroy');
      this.interval$?.unsubscribe();
  }



}
