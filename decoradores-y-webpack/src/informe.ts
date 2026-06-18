import { isAuthenticated, medirPerformance } from "./decoradores"

export class Informe {
  constructor(
    public titulo: string,
    public contenido: string,
    public id: number,
  ) { }

  @isAuthenticated
  @medirPerformance
  getInformacion(): string {
    // Descomentar para ver que tarda mas en ejecutarse
    // new Array(2000).fill('abc').map(a => a.replace('b','6')+'!!!').join('-')
    
    return `
      <h3>${this.titulo}</h3>
      <p>${this.contenido}</p>
    `
  }
}

export type Informes = Array<Informe>