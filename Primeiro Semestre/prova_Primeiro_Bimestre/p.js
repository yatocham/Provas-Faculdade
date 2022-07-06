function calcular(){
    // entrada de dados
    let ex = Number(document.getElementById("ex").value) // experiencia em anos
    let li = Number(document.getElementById("li").value) // linguagem na qual você tem experiência
    let indicacao
    let bonus
    let salario
    let salariofinal // salario + bônus
    let indi = Number(document.getElementById("indi").value) // Indicação

    if ( ex >= 0){ // Se a experiência for maior que 0 faça: 
        if( ex < 5){
            switch(li){ // dependendo da condição o salário vai ser : 
                case 1: salario = 3000
                break;
                case 2: salario = 5000
                break;
                case 3: salario = 4000
                default:
            }
        }
        else{
            switch(li){
                case 1: salario = 6000
                break;
                case 2: salario = 8000
                break;
                case 3: salario = 7000
                default:
            }
        }
        if ( li == 3 || indi == 2){ // para o bônus de 30% 
            bonus = ((salario * 30) / 100)
            salariofinal = bonus + salario
        }
        else if (indi == 1){ // para o bônus de 15% 
            bonus = ((salario * 15) / 100)
            salariofinal = bonus + salario
        }
        else if ( salario <= -1 ){ // para salario negativo : Valor inválido
            document.getElementById("negativo").innerHTML = `Número Inválido`
        }
        else{
            bonus = `Sem bônus `
            salariofinal = salario
        }
        if (salariofinal < 4500){ // se o salário for < 4500 a indicação é: 
            indicacao = `Alta`
        }
        else if (salariofinal > 4500 && salariofinal <= 6000){ // se o salário for entre 4500 e 6000 a indicação é: 
            indicacao = "Média"
        }
        else{
            indicacao = `Baixa` // se o salário for maior que 6000 a indicação é:
        }
        ( ex >= 0 ) // para experiência maior que 0
                document.getElementById("resultado").innerHTML = `O salário extimado é ${salario} <br/> O Bônus extimado é: ${bonus} <br/>
                Logo, o Salário total extimado é ${salariofinal} <br/>A Indicação é: ${indicacao}`
                document.getElementById("negativo").innerHTML = ``
    }
    else{ // para experiência menor que 0 
        document.getElementById("negativo").innerHTML = `Valor Inválido.`
        document.getElementById("resultado").innerHTML = ``
    }
}