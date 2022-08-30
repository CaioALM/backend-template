import connection from "../../database.js";

async function createExample(name, price, image, description) {
    return connection.query(`
    INSERT INTO table (name, price, image, description) 
    VALUES ($1, $2, $3, $4)`, 
    [name, price, image, description]);
}

async function getExampleName(name){
    return connection.query(`
    SELECT * FROM table 
    WHERE name = $1`, 
    [name]);
}

const theRepository = {
    createExample,
    getExampleName
}

export default theRepository;
