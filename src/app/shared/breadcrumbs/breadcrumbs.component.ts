import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: ``
})
export class BreadcrumbsComponent implements OnDestroy {
  public titulo: string = '';
  public tituloSubs$ = this.getArgumentosRuta();

  constructor(private router: Router,private titleCore: Title){
  
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta() {
   return  this.router.events.pipe(
            filter((event:ActivationEnd | any) => event instanceof ActivationEnd && event.snapshot.firstChild === null),
            map((event:ActivationEnd) => event.snapshot.data)
          ).subscribe(({title}) => {
            this.titulo = title
            this.titleCore.setTitle(`Admin-Pro ${title}`)
          })
  }


}
