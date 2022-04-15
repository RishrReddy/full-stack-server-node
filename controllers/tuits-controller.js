// import posts from "./tuits.js";
import mongoose from "mongoose";
import * as tuitsDao from "./tuits-dao.js";
// mongoose.connect('mongodb://localhost:27017/webdev');
// let tuits = posts;


const createTuit = async  (req, res) => {
    const newTuit = req.body;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

// const deleteTuit = (req, res) => {
//     const tuitdIdToDelete = req.params.tid;
//     tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
//     res.sendStatus(200);
// }

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.send(status);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.send(status);
}


// const updateTuit = (req, res) => {
//     const tuitdIdToUpdate = req.params.tid;
//     const updatedTuit = req.body;
//     console.log(updatedTuit.stats.likes)
//     console.log(updatedTuit.likes)
//     updatedTuit.stats.likes = updatedTuit.likes;
//     console.log(updatedTuit.stats.likes)
//     tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
//     res.sendStatus(200);
// }


export default (app) => {
    app.get('/', (req, res) => {
        res.send('Hello WORLD !! This is server end.')
    });
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

// const findAllTuits = (req, res) =>
//     res.json(tuits);

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits()
    res.json(tuits);
}
