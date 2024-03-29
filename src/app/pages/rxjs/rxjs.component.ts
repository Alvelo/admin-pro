import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, filter, interval, map, retry, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent implements OnDestroy {
  public intervalSubs: Subscription;
  constructor(){

    // this.returnobservable().pipe(
    //   retry()
    // )
    // .subscribe(
    //   valor => console.log('Subs: ', valor),
    //   error => console.warn('Error', error),
    //   () => console.info('Obs terminado')
    // );

   this.intervalSubs =  this.returnInterval().subscribe(console.log)
  }
  ngOnDestroy(): void {
    console.log('Unsubscribing');
    this.intervalSubs.unsubscribe();
  }

  returnInterval(): Observable<number>{
    return interval(100)
            .pipe(
              // take(10),
              map(valor => valor + 1),
              filter(valor => (valor % 2 ===0) ? true: false)
            )

    
  }

  returnobservable(): Observable<number>{
    let i = -1;
    return new Observable<number>( observer => {
      
     const intervalo = setInterval(() => {
        i++;
        observer.next(i);
      if (i==4){
        clearInterval(intervalo)
        observer.complete();
      }
      if(i ===2){
        
        observer.error('valor llego al num 2');
      }
      }, 1000)
    });

   
  }
}
