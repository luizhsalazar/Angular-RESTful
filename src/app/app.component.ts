import { Component } from '@angular/core';

@Component({
  selector: 'enterprise-app',
  template: `
<header class="container">
  <h1>{{heading}}</h1>
</header>
<my-enterprises></my-enterprises>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading = "Enterpise App Angular"
}
