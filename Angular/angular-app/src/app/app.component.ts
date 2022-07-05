import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Application';
  
  names = [
    new Person(1, 'Felipe Saadi', 23),
    new Person(2, 'Paulo', 28),
    new Person(3, 'Ana', 19),
    new Person(4, 'Flávia', 35),
    new Person(5, 'João', 56),
    new Person(6, 'Maria', 13)
  ]

  mainName = this.names[0];
  showAlert = true;
  alertMessage = "Este é um aviso."
}
