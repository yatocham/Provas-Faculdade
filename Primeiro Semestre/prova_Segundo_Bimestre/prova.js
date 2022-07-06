function prova() {
    let modelo = [];
    let estoque = [];
    let classificacao = [];
    let i;
    let classificacaoM, estoqueM;

    let encontrado = false
    let quantCompra

    //entrada de dados 
    for (i = 0; i < 2; i++) {
        modelo.push(prompt(`Qual o modelo do ${i + 1}º computador?`));

        // 
        estoqueM = Number(prompt('Qual a quantidade em estoque do modelo: ' + modelo[i]));
        while (estoqueM < 0) {
            alert(`Valor inválido`);
            estoqueM = Number(prompt('Qual a quantidade em estoque do modelo: ' + modelo[i]));
        }
        estoque.push(estoqueM);

        classificacaoM = prompt('Qual a classificação?(gamer,notebook,desktop)');
        while (classificacaoM != "gamer" && classificacaoM != "notebook" && classificacaoM != "desktop") {
            alert(`Classificação inválida`);
            classificacaoM = prompt('Qual a classificação?(gamer,notebook,desktop)');
        }
        classificacao.push(classificacaoM);

    }

    for (i = 0; i < 2; i++) {
        quantCompra = Number(prompt(`Qual a quantidade da compra do modelo: ` + modelo[i]));
        // quantidade de produtos para compra 
        if (quantCompra <= estoque[i]) {
            encontrado = true;


        } else {
            alert(`Modelo Inválido`);
            continue; // ele pula o codigo abaixo e vai para o a proxima interação o break para , o continua vai para a proxima
        }

        if (encontrado) {
            compra = (Number(prompt(`Qual a classificação você deseja:\nGamer\Notebook\Desktop`)))

            quant = (Number(prompt(`Informe a quantidade que deseja comprar: `)))

            alert(`A quantidade atual em estoque é: ${estoque[i]}`)
        }
        if (quant <= estoque[i]) { // se tiver em estoque ele executa
            //atualizar o estoque
            estoque[i] = estoque[i] - quant
            alert(`Compra realizada, o novo estoque é: ${estoque[i]}`) // atualiza o estoque
        }
        else {
            alert(`Quantidade insuficiente, compra cancelada.`) // se naõ tiver estoque , cancela.
        }
        if (classificacao[i] == "notebook") {

            alert(`O modelo ` + modelo[i] + ` está com ` + estoque[i] + ` unidades no estoque`);
        }


        alert(`O modelo: ${modelo[i]} do tipo ${classificacao[i]}  \n Foi comprado ${quant} unidades \n O estoque está com ${estoque[i]} unidades`)
    }
}


