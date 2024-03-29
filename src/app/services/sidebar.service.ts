import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Pricipal',
      icon: 'mdi mdi-gauge',
      submenu: [
        {title: 'Main', url: '/'},
        {title: 'ProgressBar', url: 'progress'},
        {title: 'Graficas', url: 'grafics1'},
        {title: 'Promesas', url: 'promesa'},
        {title: 'RXJS', url: 'rxjs'}
      ]
    }
  ]

  constructor() { }
}
