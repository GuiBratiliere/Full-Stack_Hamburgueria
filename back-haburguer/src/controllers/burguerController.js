 // Certifique-se de que o caminho e o nome do arquivo estão corretos

import { burgers } from "../../burgures.js";
import { pedidos } from "../../pedidos.js";

export async function listarBurguer(req, res) {
    try {
        res.json(burgers); // Envia a resposta JSON ao cliente
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar burgers' });
    }
};

export async function listarPedidos(req, res) {
    try{
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar Pedidos' });
    }
};

export async function getIdBurguer (req, res) {
    const burguerId = req.params.id;

    const burger = burgers.find((burger) => burger.id === burguerId)

    return burger ? res.status(200).json(burger) 
    : res.status(404).json({message: 'lanche não encontrado!'})
};


