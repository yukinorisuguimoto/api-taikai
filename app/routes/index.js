const noteRoutes = require('./note_routes');
const hookRoutes = require('./hook');
const categoriaRoutes = require('./categoria_routes');
module.exports = function(app, db) {
    categoriaRoutes(app, db);
    hookRoutes(app, db);
    // noteRoutes(app, db);  
    // Other route groups could go here, in the future
};