const noteRoutes = require('./note_routes');
const categoriaRoutes = require('./categoria_routes');
module.exports = function(app, db) {
    categoriaRoutes(app, db);
    // noteRoutes(app, db);  
    // Other route groups could go here, in the future
};