import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppTopToolbarComponent } from '@config/component/app-top-toolbar/app-top-toolbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppTopToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'LandingPage';
}
