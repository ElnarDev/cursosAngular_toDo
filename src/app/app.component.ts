import { Component, VERSION } from '@angular/core';
import { RequiredValidator } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  arrToDos: string[] = [
    'Estudiar 2 horas enplatzi',
    'Tomar un descanso de 30 minutos',
    'Poner en practica lo aprendido',
  ];

  toDo: string = '';
  classLi: string = '';
  finish: boolean = false;

  addToDos(argumentToDo: string) {
    this.arrToDos.push(argumentToDo);
    this.toDo = '';

    console.log(
      'Si lograste cambiar el bg de html o body ayudame =(, mi twitter es : MooenzDev'
    );
  }

  deleteToDo(indice) {
    this.arrToDos.splice(indice, 1);
  }

  finishToDo(indice: number) {
    const indiceStr = indice.toString();
    const element = document.querySelector(`#id${indiceStr}`);
    element.classList.toggle('terminado');
  }
}
