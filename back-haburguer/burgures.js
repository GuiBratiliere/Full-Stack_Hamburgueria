// Array de hambúrgueres com um hambúrguer inicial
export const burgers = [{
    id: '1',                       // Identificador único do hambúrguer (string)
    name: 'burguer 1',              // Nome do hambúrguer (string)
    preco: 18.90,                   // Preço do hambúrguer (número de ponto flutuante)
    ingredientes: ["tomate", "hamburguer 120g", "alface", "bacon"] // Ingredientes do hambúrguer (array de strings)
}]

// Função para adicionar um novo hambúrguer à lista
export const crateBurguer = (burger) => {
    // A função recebe um objeto 'burger' e o adiciona ao array 'burgers'
    burgers.push(burger); // 'push()' adiciona o item no final do array
}

// Função para remover um hambúrguer da lista baseado no 'id'
export const deleteBurguer = (burgerId) => {
    // A função utiliza 'filter()' para criar um novo array sem o hambúrguer cujo 'id' corresponde a 'burgerId'
    // **Nota importante**: o método 'filter()' retorna um novo array, mas não modifica o array original
    // O código abaixo não altera o array 'burgers' porque o resultado do 'filter()' não é armazenado
    burgers.filter((burger) => burger.id !== burgerId);
    // Para corrigir isso, seria necessário reatribuir o resultado do 'filter()' à variável 'burgers'
    // Exemplo de correção:
    // burgers = burgers.filter((burger) => burger.id !== burgerId);
}

// Função para atualizar um hambúrguer na lista com base no 'id'
export const updateBurger = (burgerId, updates) => {
    // A função encontra o índice do hambúrguer no array 'burgers' que possui o 'id' correspondente
    const burgerIndex = burgers.findIndex((burger) => burger.id === burgerId);
    
    // Se o hambúrguer for encontrado (i.e., 'burgerIndex' não for -1), atualizamos as suas propriedades
    // '...' é o operador de espalhamento, que combina as propriedades do hambúrguer existente com as novas
    burgers[burgerIndex] = {...burgers[burgerIndex], ...updates};
    
    // A função retorna o hambúrguer atualizado
    return burgers[burgerIndex];
    // **Nota**: a função não lida com o caso em que o 'id' não é encontrado, o que pode gerar um erro
    // Caso o 'burgerIndex' seja -1, é importante adicionar uma verificação e tratar a falha de forma adequada:
    // Exemplo de correção:
    // if (burgerIndex === -1) {
    //   throw new Error("Hamburguer não encontrado.");
    // }
    // Caso contrário, o código acima irá falhar quando tentar acessar o índice -1.
}