import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() {
    const url = localStorage.getItem('theme url') || './assets/css/colors/purple-dark.css';
    this.linkTheme?.setAttribute('href',url);
   }

   changeTheme(theme:string) {
    const url = `./assets/css/colors/${theme}.css`;
    // this attribute is part of vanillajavascript
    this.linkTheme?.setAttribute('href',url); 
    localStorage.setItem('theme url', url);
    this.checkCurrentTheme();  
  }


  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');
    links.forEach(element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href')

      if (btnThemeUrl === currentTheme){
        element.classList.add('working');

      }
    })
    
  }
}
