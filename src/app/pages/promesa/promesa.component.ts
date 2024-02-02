import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styleUrl: './promesa.component.css'
})
export class PromesaComponent implements OnInit {
  ngOnInit(): void {
    const promesa = new Promise( (resolve, reject) => {
      if(false){
        resolve('resolvido');
      } else {
        reject('Ocurrio un error');
      }
    });
  
    promesa.then((data) => {
      console.log(data);
      console.log('Hey Termine');
    }).catch(error => console.log('error en la promesa: ',error));

    console.log('Fin del Init');
  }

}
