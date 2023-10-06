import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'body';

  jsHeader = 'http://localhost:8080/header.js';
  jsBrTextarea = 'http://localhost:8080/br-textarea.js';
}
