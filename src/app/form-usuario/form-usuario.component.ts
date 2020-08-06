import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario'
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  user: Usuario = new Usuario;
  confpws: string = "";

   constructor(
    protected userService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.user.ativo = true;
  }

  