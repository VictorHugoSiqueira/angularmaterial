import { usuario } from 'src/app/interfaces/usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  
  listUsuarios: usuario[] = [
    {usuario: 'vhugo', nome: 'Victor', sobrenome: 'Siqueira', sexo: 'Masculino'},
    {usuario: 'amanda', nome: 'Amanda', sobrenome: 'Barros', sexo: 'Feminino'},
    {usuario: 'gabe', nome: 'Gabriel', sobrenome: 'Goes', sexo: 'Masculino'},
    {usuario: 'arthurt', nome: 'Arthur', sobrenome: 'Tavares', sexo: 'Masculino'}
  ];
  
  constructor() { }

  getUsuario() {
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number) {
    this.listUsuarios.slice(index, 1);
  }

  adcionarUsuario(usuario: usuario) {
    this.listUsuarios.unshift(usuario)
  }
}
