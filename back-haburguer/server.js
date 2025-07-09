import express from 'express';
import {v4 as uuid} from 'uuid'
import {burgers, crateBurguer, deleteBurguer, updateBurger} from './burgures.js';
import { cratePedido } from './pedidos.js';
import { getIdBurguer, listarBurguer, listarPedidos } from './src/controllers/burguerController.js';

const app = express();
const port = 8080;

app.use(express.json());

app.get('/cardapio', listarBurguer);

app.get('/cardapio/:id', getIdBurguer)

app.delete('/cardapio/:id', (req, res) => {
    const burguerId = req.params.id;
    const burger = burgers.find((burger) => burger.id === burguerId)
    if(!burger) {
        return res.status(404).json({message: 'lanche não encontrado'})
    }

    deleteBurguer(burguerId);
    
    return res.status(200).json({message: 'hamburguer deletado com sucesso!'})

})

app.put('/cardapio/:id', (req, res) => {
    const burguerId = req.params.id;
    const burger = burgers.find((burger) => burger.id === burguerId)

    
    if(!burger) {
        return res.status(404).json({message: 'lanche não encontrado'})
    }

    const {name, preco, ingredientes} = req.body;

    const updateburger = updateBurger(burguerId, {name, preco, ingredientes});

    return res.status(200).json(updateburger)

})

app.post('/cardapio', (req, res) => {
    // recebe dados
    const { name, preco, ingredientes} = req.body;

    // verifica se não está em branco
    if(!name || !preco || !ingredientes) {
        return res
        .status(400)
        .json({message:'nome, preco ou ingredientes requiridos!'})
    };

    // verifica se já existe
    if(burgers.some((burger) => burger.name === name)) {
        return res.status(401).json({message:'Hamburguer já inserido!'})
    };

    //cria lanche 
    const newBurguer = {
        id: uuid(),
        name,
        preco,
        ingredientes
    }
    crateBurguer(newBurguer);

    //mensagem que está concluído
    return res
    .status(201)
    .json({message:'sanduiche inserido com sucesso!'})
});

app.post('/pedido/:id', (req, res) => {
    const { name_sol, qtde } = req.body;
    const burguerId = req.params.id;
    const burger = burgers.find((burger) => burger.id === burguerId)
    if(!burger) {
        return res.status(404).json({message: 'lanche não encontrado'})
    }

    const newPedido = {
        id: uuid(),
        name: burger.name,
        preco: burger.preco * qtde,
        name_sol,
        qtde,
        id_burguer: burger.id
    };

    cratePedido(newPedido);

    return res.
    status(200).
    json({message:"Pedido criado com sucesso."})

});

app.get('/pedido', listarPedidos);


app.listen(port, () => {
    console.log('app rodando')
})
