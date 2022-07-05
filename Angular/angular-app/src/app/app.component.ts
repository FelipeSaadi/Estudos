import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Application';
  names = ['Felipe Saadi', 'Ricardo Peixoto', 'Fernando Cardoso', 'Thaís Mello', 'Patrícia Kanvar'];
  mainName = this.names[0];
}
