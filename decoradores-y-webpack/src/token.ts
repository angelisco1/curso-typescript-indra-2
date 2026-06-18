const KeyToken = 'auth'

export class Token {
  static crearToken() {
    return Math.random().toString().slice(2)
  }

  static setToken(token: string) {
    localStorage.setItem(KeyToken, token)
  }

  static getToken(): string | null {
    return localStorage.getItem(KeyToken)
  }

  static removeToken(): void {
    localStorage.removeItem(KeyToken)
  }

}