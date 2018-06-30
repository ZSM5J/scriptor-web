import { Component } from '@angular/core';
import { CustomIconsService } from './services/custom-icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private iconsService: CustomIconsService) {
    this.iconsService.init();
  }

}
