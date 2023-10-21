import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <app-bar-chart/>
  
  <br><br><br>
  
  <app-line-chart/>
  
  <br><br><br>

  <app-art-bar-chart/>
  `,
})
export class AppComponent {}
