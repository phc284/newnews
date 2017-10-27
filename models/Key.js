const Mongoose = require('mongoose');

var keySchema = new Mongoose.Schema({
    key: { type: String, required: true },
    matching_results: Number,
    continent: String,
    crawl_date: String,
    article_ids: [{
      type: String, required: true }
    }]
});

var Key = Mongoose.model('key', keySchema);

module.exports = Key;
