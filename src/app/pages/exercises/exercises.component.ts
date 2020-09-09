import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {
  timeOff: number = 10;
  timeStrech: number = 45;
  time = 0;
  roundCounter = 0;
  constructor() { }

  ngOnInit() {
  }

  setTimer(time) {
    console.log(time);
    this.time = time;
    if(time == this.timeStrech) {
      this.roundCounter ++;
    }
    return new Promise((resolve) => {
      let counter = setInterval(() => {
        this.time --;
        if(this.time == 0) {
          clearInterval(counter);
          resolve();
          return;
        }
      }, 1000);
    });
  }

  // El boton debe deshabilitarse hasta que se termine de ejecutar el ciclo.
  // El ciclo se puede simplificar de tal manera que el codigo no sea tan redundante.

  async startTimer() {
    await this.setTimer(this.timeOff);
    await this.setTimer(this.timeStrech);
    await this.setTimer(this.timeOff);
    await this.setTimer(this.timeStrech);
    await this.setTimer(this.timeOff);
    await this.setTimer(this.timeStrech);
  }
}
