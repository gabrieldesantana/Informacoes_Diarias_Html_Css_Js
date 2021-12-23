// Variaveis para guardar as informacoes atualizadas
let agora = new Date()
let hora = agora.getHours()

// Variaveis para guardar as informacoes tradizadas pelo DOM

let texto_horario = document.getElementById('texto_horario')
let texto_data = document.getElementById('texto_data')
let texto_saudacao = document.getElementById('texto_saudacao')

// Variaveis para guardar dia, mes, ano

let dia = agora.getDate()
let mes = agora.getUTCMonth() + 1
let ano = agora.getFullYear()

// Variaveis para guardar as informacoes de IMG e Body

let image = document.getElementById('foto')
let corpo = document.getElementById('corpo')

// Condicao para validar o horario (dia)

if (hora >= 4 && hora <= 12){
    image.src = "./img/dia.gif"
    if (hora < 10){
        texto_horario.innerHTML = `Agora são 0${hora} horas.`
    } else{
        texto_horario.innerHTML = `Agora são ${hora} horas.`
    }

    corpo.style.background = '#F1D12F'

    if (dia < 10 || mes < 10){
        texto_data.innerHTML = `Estamos em 0${dia}/${mes}/${ano}`
    } else{
        texto_data.innerHTML = `Estamos em ${dia}/${mes}/${ano}`
    }

    texto_saudacao.innerHTML = "Bom dia!"

    texto_saudacao.style.background = '#F1D12F'
    texto_data.style.background = '#F1D12F'
    texto_horario.style.background = '#F1D12F'
}

// Condicao para validar o horario (tarde)

if (hora >= 13 && hora <= 17){
    image.src = "./img/tarde.gif"

    if (hora < 10){
        texto_horario.innerHTML = `Agora são 0${hora} horas.`
    } else{
        texto_horario.innerHTML = `Agora são ${hora} horas.`
    }

    corpo.style.background = 'orange'

    if (dia < 10 || mes < 10){
        texto_data.innerHTML = `Estamos em 0${dia}/${mes}/${ano}`
    } else{
        texto_data.innerHTML = `Estamos em ${dia}/${mes}/${ano}`
    }

    texto_saudacao.innerHTML = "Boa tarde!"
    texto_saudacao.style.background = 'rgb(231, 153, 8)'
    texto_data.style.background = 'rgb(231, 153, 8)'
    texto_horario.style.background = 'rgb(231, 153, 8)'
}

// Condicao para validar o horario (noite)

if (hora >= 18 && hora <= 22){
    image.src = "./img/noite.gif"

    if (hora < 10){
        texto_horario.innerHTML = `Agora são 0${hora} horas.`
    } else{
        texto_horario.innerHTML = `Agora são ${hora} horas.`
    }

    corpo.style.background = 'rgb(32,70,112)'

    if (dia < 10 || mes < 10){
        texto_data.innerHTML = `Estamos em 0${dia}/${mes}/${ano}`
    } else{
        texto_data.innerHTML = `Estamos em ${dia}/${mes}/${ano}`
    }

    texto_saudacao.innerHTML = "Boa noite!"
    texto_saudacao.style.background = 'rgb(32,70,112)'
    texto_data.style.background = 'rgb(32,70,112)'
    texto_horario.style.background = 'rgb(32,70,112)'
}

// Condicao para validar o horario (madrugada)

if (hora >= 23 || hora <= 3){
    image.src = "./img/madrugada.gif"
    if (hora < 10){
        texto_horario.innerHTML = `Agora são 0${hora} horas.`
    } else{
        texto_horario.innerHTML = `Agora são ${hora} horas.`
    }

    corpo.style.background = 'rgb(31, 62, 82)'

    if (dia < 10 || mes < 10){
        texto_data.innerHTML = `Estamos em 0${dia}/${mes}/${ano}`
    } else{
        texto_data.innerHTML = `Estamos em ${dia}/${mes}/${ano}`
    }

    texto_saudacao.innerHTML = "Boa madrugada!"
    texto_saudacao.style.background = 'rgb(31, 62, 82)'
    texto_data.style.background = 'rgb(31, 62, 82)'
    texto_horario.style.background = 'rgb(31, 62, 82)'
}
