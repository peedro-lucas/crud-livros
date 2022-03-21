import { response } from "express"
import livros from "../models/Livro.js"

class LivroController{

    static listarLivros = (req, res) => {
        livros.find((err, livros)=>{
            res.status(200).json(livros)
    })
    }
    static listarLivroPorId = (req, res) =>{
        const id = req.params.id;
        livros.findById(id, (err, livros)=>{
            if(err){
                res.status(400).send({message: err.message + 'id do livro não localizado'})
            }else{
                res.status(200).send(livros)
            }
        })
    }
    static cadastrarLivro = (req, res) =>{
        try{
            let livro = new livros(req.body)

            livro.save()
            return res.status(201).json(livro)
        }
        catch(e){
            return res.status(500).json('Error')
        }
        
    }
    static atualizarLivro = (req, res)=>{
        const id = req.params.id

        livros.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: 'Livro atualizado com sucesso!'})
            }else{
                res.status(500).send({message: err.message})

            }
        })
    }
    static excluirLivro = (req,res) =>{
        const id = req.params.id

        livros.findByIdAndDelete(id,(err)=>{
            if(err){
                res.status(400).send({message: err.message})
            }else{
                res.status(200).send({message: 'Livro removido com sucesso!'})
            }

        })
        

        }
    
}

export default LivroController;