export const pedidos = [{
    id: "",
    name: "",
    preco: "",
    name_sol: "",
    qtde: "",
    id_burguer: ""
}];

export const cratePedido = (pedido) => {
    // A função recebe um objeto 'burger' e o adiciona ao array 'burgers'
    pedidos.push(pedido); // 'push()' adiciona o item no final do array
};