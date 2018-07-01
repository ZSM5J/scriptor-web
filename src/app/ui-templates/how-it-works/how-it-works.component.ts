import { Component, OnInit } from '@angular/core';
import { LanguageService } from "../../services/language.service";

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }

}
