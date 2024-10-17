import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent,
    RouterOutlet
  ],
  template: `
    <main>
      <app-header></app-header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styles: `
    :host {
      --content-padding: 10px;
    }

    .content {
      padding: var(--content-padding);
    }
  `
})
export class AppComponent {
  title = 'homes';
}
