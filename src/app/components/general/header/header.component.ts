import { Component, OnInit, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {trigger, style, query, transition, stagger, animate } from '@angular/animations'
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { FormControl } from '@angular/forms';
import { LanguageService } from 'src/app/services/language/language.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    trigger("animateMenu",[
      transition(":enter",[
        query("*", [
          style({opacity: 0, transform: "translateY(-50%)"}),
          stagger(50,[
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({opacity: 1, transform: "none"}))
          ])
        ])
      ])
    ])
  ]
})



export class HeaderComponent implements OnInit {

  menuResponsivoShow: boolean = false;
  pageYPosition: number;
  linguaFormControl: FormControl= new FormControl();
  curriculo: string = "";

  constructor(private router: Router,
              public analyticsService: AnalyticsService,
              public languageService: LanguageService) { }

  ngOnInit(): void {
    this.linguaFormControl.valueChanges.subscribe(val => this.languageService.changeLingua(val))
    this.linguaFormControl.setValue(this.languageService.linguagem)
  }

  scroll(secao) {
    document.getElementById(secao) ? document.getElementById(secao).scrollIntoView({behavior: 'smooth'}) 
            : this.router.navigate(['/home']).then(()=> document.getElementById(secao).scrollIntoView({behavior: 'smooth'}) );
    this.menuResponsivoShow = false;
  }

  downloadCV(){
    this.languageService.translateService.get("Header.curriculo").subscribe(curr => {
      this.curriculo = curr
      let url = window.location.href;

      window.open(url + "/../assets/cv/" + this.curriculo, "_blank");
    })

  }

  @HostListener('window:scroll', ['getPosicaoScroll($event)'])
    getPosicaoScroll(event) {
        this.pageYPosition = window.pageYOffset;
    }

    changeLingua(language: string) {
      this.linguaFormControl.setValue(language);
    }
}
