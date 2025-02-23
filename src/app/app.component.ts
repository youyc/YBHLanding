import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppTopToolbarComponent } from '@config/component/app-top-toolbar/app-top-toolbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppTopToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'LandingPage';
}
