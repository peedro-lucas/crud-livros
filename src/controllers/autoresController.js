import autores from "../models/Autor.js"

class AutorController{

    static listarAutores = (req, res) => {
        autores.find((err, autores)=>{
            res.status(200).json(autores)
    })
    }
    
    static listarAutorPorId = (req, res) =>{
        const id = req.params.id;
        autores.findById(id, (err, autores)=>{
            if(err){
                res.status(400).send({message: err.message + 'id do autor não localizado'})
            }else{
                res.status(200).send(autores)
            }
        })
    }

    static cadastrarAutor = (req, res) =>{
        try{
            let autor = new autores(req.body)
            autor.save()
            return res.status(201).json(autor)
        }
        catch(e){
            return res.status(500).json('Error')
        }
    }

    static atualizarAutor = (req, res)=>{
        const id = req.params.id

        autores.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: 'autor atualizado com sucesso!'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirAutor = (req,res) =>{
        const id = req.params.id

        autores.findByIdAndDelete(id,(err)=>{
            if(err){
                res.status(400).send({message: err.message})
            }else{
                res.status(200).send({message: 'autor removido com sucesso!'})
            }
        })
        }
    
}

export default AutorController;