import { Injectable } from '@angular/core';

@Injectable()
export class AuthService
{
    verificarCredenciales(usuario: string, contraseña: string): boolean {
        // Lógica para verificar las credenciales
        // Aquí puedes realizar la validación con tu lógica personalizada, como consultar una API, una base de datos, etc.
    
        // Ejemplo de credenciales válidas
        const usuarioValido = 'admin';
        const contraseñaValida = 'password';
    
        // Verificar si las credenciales coinciden
        if (usuario === usuarioValido && contraseña === contraseñaValida) {
          return true; // Credenciales válidas
        } else {
          return false; // Credenciales inválidas
        }
      }   
}