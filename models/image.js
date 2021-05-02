var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    filename: String,
    originalName: String,
<<<<<<< HEAD
    desc: String,
    created: Date
});
=======
    desc: String
},
{ timestamps: true });
>>>>>>> 22ab6196c435d35ce8e87ed210f6dbc412ccac7d

module.exports = mongoose.model('Image', imageSchema);