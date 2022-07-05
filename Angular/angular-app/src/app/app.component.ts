import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Application';
  names = [
    {
      name: 'Felipe Saadi',
      age: 23
    },
    {
      name: 'Rafael Cardoso',
      age: 32
    },
    {
      name: 'Beatriz Viana',
      age: 27
    },
    {
      name: 'Fernando Paiva',
      age: 18
    },
    {
      name: 'Patrícia Haron',
      age: 25
    }
  ]
  mainName = this.names[0];

}
