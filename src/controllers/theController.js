import  theRepository  from "../repositories/cakesRepository.js";

export async function controller(req, res) {
 const { name } = req.body
    try {
        const { rowCount: ExampleName } = await theRepository.getExampleName(name); 
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}