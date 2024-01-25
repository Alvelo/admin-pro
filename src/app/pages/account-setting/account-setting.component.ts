import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: ``
})
  export class AccountSettingComponent implements OnInit {
    public linkTheme = document.querySelector('#theme');
    public links!: NodeListOf<Element>;
  
    constructor(){}
  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.checkCurrentTheme();
    
  }

  changeTheme(theme:string) {

   
    const url = `./assets/css/colors/${theme}.css`;
    // this attribute is part of vanilla javascript
    this.linkTheme?.setAttribute('href',url);

    localStorage.setItem('theme url', url);
    
    this.checkCurrentTheme()

  }

  checkCurrentTheme() {

    this.links.forEach(element => {
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
