import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: ``
})
  export class AccountSettingComponent implements OnInit {
    
  constructor(private settingServices: SettingsService){}
  ngOnInit(): void {
    this.settingServices.checkCurrentTheme()  
  }

  changeTheme(theme:string) {

    this.settingServices.changeTheme(theme);
    

  }

 
}
