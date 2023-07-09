const usuarios = [
    {
        login: 'developer', 
        pass:  '17052012'
    },

    {
        login: 'danilo.araujo',
        pass:  'webdesign2012'
    },

    {
        login: 'visitante',
        pass:  'webdesign2019'
    }
]

let botao = document.getElementById('btnlogar');

botao.addEventListener('click', function logar(){
    let pegaUsuario = document.getElementById('username').value
    let pegaSenha = document.getElementById('password').value
    let validaLogin = false

    for(let i in usuarios){
        
        if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass){
            validaLogin = true
            break
        }

    }

        if(validaLogin == true){
        location.href = 'index.html'
        alert('Logado com Sucesso!')
        }

        else{
        alert('Usuário ou Senha Inválido')
    }

})
