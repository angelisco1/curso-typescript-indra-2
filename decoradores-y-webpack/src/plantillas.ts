import { Informe, type Informes } from "./informe"
import { Token } from "./token"
import { Usuario, type Usuarios } from "./usuario"

const INFORMES: Informes = [
  new Informe('El caballo blanco de Santiago no era blanco', 'Durante años se ha repetido la idea de que el famoso caballo de Santiago era completamente blanco, pero distintos estudios y representaciones históricas sugieren que su color y apariencia pudieron variar según la época, la interpretación artística y las restauraciones posteriores. Este informe analiza el origen de la creencia, las fuentes disponibles y cómo se construyó una imagen simbólica que no siempre coincide con la realidad histórica.', 1),
  new Informe('El niño vampiro sale de la cueva 18 años después', 'Tras permanecer oculto durante 18 años, el llamado niño vampiro finalmente salió de la cueva donde había vivido gran parte de su infancia. Su historia ha despertado interés por las circunstancias extremas en las que creció, así como por el impacto físico y psicológico de tantos años de aislamiento. El informe repasa su caso, la adaptación al exterior y las dudas que aún rodean su vida.', 2),
]

const USUARIOS: Usuarios = [
  new Usuario('cfalco@gmail.com', 'cfalco', 'Charly Falco', 1)
]

export enum Vistas {
  Home,
  Login,
}


export const getHome = (mensaje: string): string => {
  const informesItems = INFORMES.map((informe: Informe) => {
    return `<li>
      ${informe.titulo}
      <button id="${informe.id}">Ver detalle</button>
    </li>`
  }).join('')
  
  return `
    <div>
      <h2>Inicio</h2>
      <button type="button" id="btn-logout">Logout</button>
      <ul id="lista-informes">
        ${informesItems}
      </ul>

      <hr>

      <div id="informe-detalle"></div>
    </div>
  `
}

const initHomeListeners = () => {
  const buttons = document.querySelectorAll('#lista-informes li button')

  buttons.forEach(btn => {
    btn.addEventListener('click', (event: Event) => {
      const idInforme = Number((event.target as HTMLButtonElement).id)

      const informe = INFORMES.find(inf => inf.id === idInforme)
      console.log('informe: ', informe)

      if (informe) {
        const infoDetailContainer: HTMLDivElement | null = document.querySelector('#informe-detalle')
        if (infoDetailContainer) {
          try {
            infoDetailContainer.innerHTML = informe.getInformacion()
          } catch (err: any) {
            alert(err.message)
            logout()
          }
        }
      }
    })
  })


  document.getElementById('btn-logout')?.addEventListener('click', () => {
    logout()
  })
}

export const getLogin = (): string => {
  return `
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label for="email">Email:</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button type="button" id="btn-login">Login</button>
      </form>
    </div>
  `
}

const initLoginListeners = () => {
  document.getElementById('btn-login')?.addEventListener('click', () => {
    const emailInput: HTMLInputElement | null = document.querySelector('#email')
    const pwInput: HTMLInputElement | null = document.querySelector('#password')

    const usuario = {
      email: emailInput?.value,
      password: pwInput?.value,
    }

    const existeUsuario = USUARIOS.find(u => u.email === usuario.email && u.password === usuario.password)

    if (existeUsuario) {
      login()
    }

  })
}

const login = () => {
  // Crear y guardar token
  const token = Token.crearToken()
  Token.setToken(token)
  setVista(Vistas.Home)
}

const logout = () => {
  // Eliminar token
  Token.removeToken()
  setVista(Vistas.Login)
}


export const setVista = (vista: Vistas = Vistas.Login): void => {
  const contenedor: HTMLDivElement = document.querySelector('#root')!

  if (vista === Vistas.Login) {
    const plantillaLogin: string = getLogin()
    contenedor.innerHTML = plantillaLogin
    initLoginListeners()
    
  } else {
    const plantillaHome: string = getHome('')
    contenedor.innerHTML = plantillaHome
    initHomeListeners()

  }
}