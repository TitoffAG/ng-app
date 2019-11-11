import { Component } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  faPlayCircle = faPlayCircle;
}
