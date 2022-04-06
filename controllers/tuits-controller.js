import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.Dislikes = 0;
    newTuit.postedBy = {username : 'Rish'};
    newTuit.handle = "spacex";
    newTuit.stats = {comments:0, likes: 0, retuits:0};
    newTuit.logo = "/images/elonmusk.jpg";
    tuits.push(newTuit);
    res.json(newTuit);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    console.log(updatedTuit.stats.likes)
    console.log(updatedTuit.likes)
    updatedTuit.stats.likes = updatedTuit.likes;
    console.log(updatedTuit.stats.likes)
    tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const findAllTuits = (req, res) =>
    res.json(tuits);