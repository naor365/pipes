import { Component } from '@angular/core';
import {Trim} from '../pipes/trim.pipe';

@Component({
  selector: 'examples',
  pipes: [Trim],
  template:`
   <h1>{{ header| trim }}</h1>
   ` ,
})

export class Examples {
  header:string = "naor shlomo the king";
}
