import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { LanguageService } from "../../services/language.service";

@Component({
  selector: 'app-promo-menu',
  templateUrl: './promo-menu.component.html',
  styleUrls: ['./promo-menu.component.scss']
})
export class PromoMenuComponent implements OnInit {
  private languageSelect = {show: false, left: '0px', top: '0px'};
  @ViewChild('language') languageElement: ElementRef;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }

  showSelect() {
    event.stopPropagation();
    this.languageSelect.left = this.languageElement.nativeElement.offsetLeft + 'px';
    this.languageSelect.top = this.languageElement.nativeElement.offsetTop + 36 + 'px';
    this.languageService.showSelect = !this.languageService.showSelect;
  }

  stopPropagation() {
    event.stopPropagation();
  }

  changeLanguage(index) {
    this.languageService.choosenLanguage = this.languageService.languageList[index];
    this.languageService.showSelect = !this.languageService.showSelect;
  }

}
