import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: ``
})
export class IncrementComponent implements OnInit {
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`
  }
  @Input('value') progress: number = 40;
  @Input() btnClass:string = 'btn-primary'



  @Output('outputValue') outputValue: EventEmitter<number> = new EventEmitter()

  get getPorcentaje(){
    return `${this.progress}%`
  }

  changeValue(value: number) {
    
    if (this.progress >= 100 && value >= 0) {
      this.outputValue.emit(100);
      return this.progress = 100;
    }else if (this.progress < 0 ){
      this.outputValue.emit(0);
      return this.progress = 0;
    } else {
      this.progress = this.progress + value
      return this.outputValue.emit(this.progress);
      
    }

    
  }
}
