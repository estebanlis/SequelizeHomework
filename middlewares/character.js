const { Router } = require('express');
const { Op, Character, Role } = require('../db');
const router = Router();

 router.post('/', async (req,res) =>{

     const {code,name,age,race,hp,mana,date_added} = req.body;
     if(!code || !name || !hp || !mana) {
         return res.status(404).send("Falta enviar datos obligatorios");}

    try{
        const newCharacter = await Character.create({
            code,name,age,race,hp,mana,date_added
        });

        res.json(newCharacter);
    }catch(e){
        res.status(404).send("Error en alguno de los datos provistos");
    }
 

}); 

router.get('/',async(req,res) =>{

    let {code,name,age,race,hp,mana,date_added} = req.query;
    const condition = {};
    const where = {};
    if(code || name || age || race || hp || mana ||date_added)
    {   code ? where.code = code : where;
        name ? where.name = name : where;
        age ? where.age = age : where;
        race ? where.race = race : where;
        hp ? where.hp = hp : where;
        mana ? where.mana = mana : where;
        date_added ? where.hdate_addedp = date_added : where;

    }
    condition.where = where;
    
    try {
        const characters = await Character.findAll(condition);
        res.json(characters)
    } catch (error) {
        res.status(404).send(error.message);
    }
})

module.exports = router;