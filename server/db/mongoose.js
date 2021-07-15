var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;


//change the database with yours
mongoose.connect('mongodb+srv://admin:admin@cluster0.4ai8c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true
})

module.exports = {mongoose};
