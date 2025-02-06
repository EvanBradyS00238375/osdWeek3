import { Component } from '@angular/core';
import { MySignalService } from '../mysignal.service';
import { Child1Component } from './child1/child1.component'; 
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [Child1Component, Child2Component], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'osdWeek3';

  constructor(public signalService: MySignalService) {}

  increment() {
    this.signalService.increment();
  }

  decrement() {
    this.signalService.decrement();
  }
}
