const Mongoose = require('mongoose');
Mongoose.Promise = global.Promise;

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

keySchema.statics.findOneOrCreate = function findOneOrCreate(condition, doc) {
  const self = this;

  return self.findOne(condition)
    .then((result) => {
      return result || self.create(doc);
    }).catch((err) => {
      return err;
    })
};

var Key = Mongoose.model('key', keySchema);

module.exports = Key;