import { Component } from '@angular/core';
import { GuidService } from './services/guid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  guid: any;

  constructor(private guidSevice: GuidService) { 
  }

  newGuid(){
    this.guidSevice.getGuid().subscribe({
      next: g => { this.guid = g },
      error: e => { console.log(e) }
   });
  }

  getGuid() {
    return this.guid;
  }
}
