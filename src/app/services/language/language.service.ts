import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  linguagem: "pt" | "en";

  constructor(
    public translateService: TranslateService,
    private location: Location,
  ) {}

  initLanguage(){
    this.translateService.addLangs(["en", "pt"])
    let lingua = navigator.language || (navigator as any).userLanguage;
    lingua = "pt"
    this.translateService.setDefaultLang(lingua)
    this.location.go(lingua)

    this.linguagem = lingua
  }

  changeLingua(lingua){
    this.translateService.setDefaultLang(lingua)
    this.location.go(lingua)
    this.linguagem = lingua
  }
}
