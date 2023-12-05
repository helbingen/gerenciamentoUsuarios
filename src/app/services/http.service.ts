import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IHttpUsuario } from '../shared/models/IHttpUsuario';
import { environment } from '../environments/environments';
import { IHttpResponseUsuario } from '../shared/models/IHttpResponseUsuario';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // Deixei as tipagens das promises como any por não saber o que irá retornar o servidor, mas o ideal é sempre tipar.

  public criarUsuario(body: IHttpUsuario): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.api + '/criarUsuarios', body)
        .subscribe({
          next: (data) => {
            // Sucesso na requisição
            resolve(data);
          },
          error: (error) => {
            // Erro na requisição
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
            // Sucesso na requisição
            resolve(data);
          },
          error: (error) => {
            // Erro na requisição
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
            // Sucesso na requisição
            resolve(data);
          },
          error: (error) => {
            // Erro na requisição
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
            // Sucesso na requisição
            resolve(data);
          },
          error: (error) => {
            // Erro na requisição
            reject(error);
          }
        });
    });
  }
}
