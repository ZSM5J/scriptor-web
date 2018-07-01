import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { Injectable } from "@angular/core";

@Injectable()
export class CustomIconsService {
 
 
  constructor(private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer
      ){
      }

  init() {
    this.matIconRegistry.addSvgIcon(
        "beer",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/beer.svg")
    );
    this.matIconRegistry.addSvgIcon(
        "script1",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/script1.svg")
    );
    this.matIconRegistry.addSvgIcon(
        "script2",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/script2.svg")
    );
    this.matIconRegistry.addSvgIcon(
        "database",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/database.svg")
    );
    this.matIconRegistry.addSvgIcon(
        "download",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/download.svg")
    );
    this.matIconRegistry.addSvgIcon(
        "cart",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/cart.svg")
    );
    this.matIconRegistry.addSvgIcon(
        "right-arrow",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/right-arrow.svg")
    );
    this.matIconRegistry.addSvgIcon(
        "logo",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/logo.svg")
    );
    this.matIconRegistry.addSvgIcon(
        "english",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/english.svg")
    );
    this.matIconRegistry.addSvgIcon(
        "russian",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/russian.svg")
    );
  }
}