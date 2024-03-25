import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-mais-projetos',
  templateUrl: './projetos-pessoais.component.html',
  styleUrls: ['./projetos-pessoais.component.scss']
})
export class ProjetosPessoaisComponent implements OnInit {

  constructor(
    private router: Router,
    public analyticsService: AnalyticsService
    ) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }

    redirect(rota: string, event) {
      const id = event.target.id;
      if(id == 'demoLink' || id == 'ghLink'){
        return
      }
      window.open(rota, '_blank');
    }

}
