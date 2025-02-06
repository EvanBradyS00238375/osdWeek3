import { Component } from '@angular/core';
import { MySignalService } from '../../mysignal.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  constructor(private signalService: MySignalService) {}

  getDoubleCount() {
    return this.signalService.getDoubleCount();
  }
}
