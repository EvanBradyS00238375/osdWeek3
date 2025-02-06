import { Component } from '@angular/core';
import { MySignalService } from '../../mysignal.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  constructor(private signalService: MySignalService) {}

  getCount() {
    return this.signalService.getCount();
  }
}
