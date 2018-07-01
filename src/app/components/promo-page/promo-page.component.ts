import { Component, OnInit, HostListener } from '@angular/core';
import { LanguageService } from "../../services/language.service";

@Component({
  selector: 'app-promo-page',
  templateUrl: './promo-page.component.html',
  styleUrls: ['./promo-page.component.scss']
})
export class PromoPageComponent implements OnInit {

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      if (this.languageService.showSelect) {
        this.languageService.showSelect = false;
      } 
    }

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }

  closeModal() {
    if (this.languageService.showSelect) {
      this.languageService.showSelect = false;
    } 
  }

}
