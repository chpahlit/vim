import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

@Component({
  standalone: true,
  imports: [RouterModule, WelcomepageComponent],
  selector: 'vim-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'vim-frontend';
}
