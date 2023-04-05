//Programa de receita
//Load Modules
const prompt = require('prompt-read')
do{
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //Log de console
    console.clear()
    console.log('Bem vindo ao seu guia de receitas')
    console.log('Escolha uma receita:\n')
    console.log('1 - Bolo de cenoura')
    console.log('2 - Bolo de chocolate')
    console.log('3 - Bolo red velvet')
    console.log('4 - Sair\n')
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //Function
    function texto(string) {
        return confirma= prompt('deseja retornar ao inicio?(s/n)')
    }

    function apagar(string) {
        return console.clear()
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //Variaveis
    var option = prompt('Receita: ', 'number')
    var prefix = ('Você escolheu a receita: ')
    var confirma= ('s')

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //Switch
    apagar()
    switch (option) {
        case 1:
            apagar()
            console.log(prefix + 'Bolo de cenoura.\n Para fazer um bolo de cenoura você precisa')
            texto()            
            break;
        case 2:
            apagar()
            console.log(prefix + 'Bolo de chocolate.\n Para fazer um bolo de chocolate você precisa')
            texto()            
            break;
        case 3:
            apagar()
            console.log(prefix + 'Bolo red velvet.\n Para fazer um bolo red velvet você precisa')
            texto()            
            break;
        case 4:
            apagar()
            console.log('Você saiu')
            confirma = 'n'
            break;
        default:
            console.log('Código inválido')
            apagar()
    }
} while (confirma=='s')
apagar()