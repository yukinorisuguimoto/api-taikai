var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
    app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('notes').findOne(details, (err, item) => {
        if (err) {
            res.send({'error':'An error has occurred'});
        } else {
            res.send(item);
        } 
        });
    });

    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('notes').remove(details, (err, item) => {
        if (err) {
            res.send({'error':'An error has occurred'});
        } else {
            res.send('Note ' + id + ' deleted!');
        } 
        });
    });

    app.put('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const note = { text: req.body.body, title: req.body.title };
        db.collection('notes').update(details, note, (err, result) => {
        if (err) {
            res.send({'error':'An error has occurred'});
        } else {
            res.send(note);
        } 
        });
    });

    app.post('/categorias', (req, res) => {
        const categoria = {
            nome: req.body.nome,
            ordem: parseInt(req.body.ordem)
        }
        db.collection('categoria').insert(categoria, (err, result) => {
            if (err) { 
                res.send({ 'error': 'An error has occurred inserting new category' }); 
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.get('/categorias', (req, res) => {
        db.collection('categoria').find({}).toArray((err, result) => {
            if (err) { 
                res.send({ 'error': 'An error has occurred' }); 
            } else {
                res.send(result);
            }
        });
    })
};