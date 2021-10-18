import { Router } from '@angular/router';
import { UsuarioService } from './../../../../services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/interfaces/usuario';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.css']
})
export class CriarUsuarioComponent implements OnInit {

  sexo: any[] = ['Masculino','Feminino'];
  form: FormGroup;

  constructor(private fb: FormBuilder, 
              private _usuarioService: UsuarioService,
              private router: Router,
              private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      sexo: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  
  }

  adcionarUsuario() {
    const user: usuario = {
      usuario: this.form.value.usuario,
      nome: this.form.value.usuario,
      sobrenome: this.form.value.usuario,
      sexo: this.form.value.usuario,
    }
    this._usuarioService.adcionarUsuario(user)
    this.router.navigate(['dashboard/usuarios'])

    this._snackBar.open('Usuário eliminado com sucesso', '', {
      duration:1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
    
  }
}