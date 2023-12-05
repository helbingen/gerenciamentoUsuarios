import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IHttpUsuario } from '../shared/models/IHttpUsuario';
import { environment } from '../environments/environments';
import { IHttpResponseUsuario } from '../shared/models/IHttpResponseUsuario';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  // Deixei as tipagens das promises como any por não saber o que irá retornar o servidor, mas o ideal é sempre tipar.

  public criarUsuario(body: IHttpUsuario): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.api + '/criarUsuarios', body)
        .subscribe({
          next: (data) => {
            resolve(data);
          },
          error: (error) => {
            this.toastr.error('Falha ao criar usuário');
            reject(error);
          }
        });
    });
  }

  public listarUsuarios(): Promise<IHttpResponseUsuario[]> {
    return new Promise((resolve, reject) => {
      this.http.get<IHttpResponseUsuario[]>(environment.api + '/listarUsuarios')
        .subscribe({
          next: (data) => {
            resolve(data);
          },
          error: (error) => {
            this.toastr.error('Falha ao listar usuário');
            reject(error);
          }
        });
    });
  }

  public editarUsuario(body: IHttpUsuario, idUsuario: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(environment.api + '/editarUsuario/' + idUsuario, body)
        .subscribe({
          next: (data) => {
            resolve(data);
          },
          error: (error) => {
            this.toastr.error('Falha ao editar usuário');
            reject(error);
          }
        });
    });
  }

  public excluirUsuario(idUsuario: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(environment.api + '/excluirUsuario', idUsuario)
        .subscribe({
          next: (data) => {
            resolve(data);
          },
          error: (error) => {
            this.toastr.error('Falha ao excluir usuário');
            reject(error);
          }
        });
    });
  }
}
