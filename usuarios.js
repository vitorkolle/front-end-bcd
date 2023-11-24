'use strict'

async function listarUsuarios(){
    const url = 'http://10.107.140.2:8080/usuarios/'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function cadastrarUsuarios(usuario){
    const url = 'http://10.107.140.2:8080/usuarios/'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }
    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok
}

async function atualizarUsuarios(usuario){
    const url = `http://10.107.140.2:8080/usuarios/${usuario.id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(usuario)
    }

    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok

}

async function deletarUsuario(id){
    const url = `http://10.107.140.2:8080/usuarios/${id}`
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok
}


// Área de teste
//listarUsuarios()


//const usuarioAtualizado = {
   // id: 30,
//nome: 'Kolle',
    //email: 'kolle@gmail.com'
//}
//atualizarUsuarios(usuarioAtualizado)


//const novoUsuario = {
 //   nome: 'Vitor',
  //  email: 'vitor@gmail.com'
//}
//cadastrarUsuarios(novoUsuario)

deletarUsuario(30)

