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
  }
}