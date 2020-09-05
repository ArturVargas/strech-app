import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  testAreas = [
    { title: 'Espina Toracica',
      description: 'bla, bla, bla...'
   },
  //  {
  //   title: 'Pantorrillas',
  //   description: 'bla, bla, bla...'
  //  },
  //  {
  //   title: 'Tendones de la Corva',
  //   description: 'bla, bla, bla...'
  //  },
  //  {
  //   title: 'Abdomen',
  //   description: 'bla, bla, bla...'
  //  },
  //  {
  //   title: 'Flexores de Cadera',
  //   description: 'bla, bla, bla...'
  //  },
  //  {
  //   title: 'Rotadores de Cadera',
  //   description: 'bla, bla, bla...'
  //  },
  ]
  constructor() { }

  ngOnInit() {
  }

}
