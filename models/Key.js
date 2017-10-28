const Mongoose = require('mongoose');

var keySchema = new Mongoose.Schema({
    key: { type: String, required: true },
    matching_results: Number,
    continent: String,
    query_date: String,
    article_ids: [{
      type: Mongoose.Schema.Types.ObjectId,
      ref: 'article'
    }]
});

var Key = Mongoose.model('key', keySchema);

module.exports = Key;
