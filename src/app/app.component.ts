import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <nav>
        <h1>
          {{title}}
        </h1>
      </nav>    
    </div>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Static - music you can feel';
}