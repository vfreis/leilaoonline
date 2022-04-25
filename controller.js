const fs = require("fs");

// let usuarios = require('./Usuarios.json');

// console.log(usuarios);

const data = fs.readFileSync("./Usuarios.json", "utf-8");
const usuarios = JSON.parse(data);

export function verificaUsuario(Usuario) {
    for (let index = 0; index < usuarios.length; index++) {
        if (usuarios[index].nome == Usuario) {
            return true
        }
        
    }
     return false
    
}

export function adicionaUsuario(Usuario) {
  let id = usuarios.length + 1;

  let novoUsuario = {
    id: id,
    ...Usuario,
  };

  usuarios.push(novoUsuario);
  let valorFinal = JSON.stringify( usuarios );

  fs.writeFileSync("./Usuarios.json", valorFinal, "utf-8");
}




