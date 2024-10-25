import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, HomeComponent],
  template: `
    <main>
      <app-header></app-header>
      <section class="content">
        <!-- router-outlet generates content depending on the url routes defined in app.routes.ts -->
        <router-outlet></router-outlet>
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
  `,
})
export class AppComponent {
  title = 'homes';
}
