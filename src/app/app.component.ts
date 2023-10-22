import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h2>Our Insurance Charts</h2>
  <p style="color: purple;">Use the interactive charts below to explore the dataset</p>
  <app-bar-chart/>
  `,
})
export class AppComponent {}
