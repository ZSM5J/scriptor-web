import { Component } from '@angular/core';
import { CustomIconsService } from './services/custom-icons.service';
import { LanguageService } from "./services/language.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private iconsService: CustomIconsService, private languageService: LanguageService) {
    this.iconsService.init();
    this.languageService.init();
  }

}
