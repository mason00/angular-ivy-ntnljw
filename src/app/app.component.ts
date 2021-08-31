import { Component, OnInit, VERSION } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
ngOnInit(): void {
  of(2, 3, 4).subscribe(console.log);
}
  name = 'Angular ' + VERSION.major;
}
