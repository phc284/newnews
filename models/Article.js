const Mongoose = require('mongoose');
Mongoose.Promise = global.Promise;

var articleSchema = new Mongoose.Schema({
    id: { type: String, unique: true, required: true },
    key: { type: String, required: true },
    score: Number,
    title: String,
    country: String,
    crawl_date: String,
    url: String,
    host: String,
    text: String,
    main_image_url: String,
    sentiment_score: Number,
    concepts: Mongoose.Schema.Types.Mixed,
    category: {
      score: Number,
      label: String
    }
});

articleSchema.statics.findOneOrCreate = function findOneOrCreate(condition, doc) {
  const self = this;

  return self.findOne(condition)
    .then((result) => {
      return result || self.create(doc);
    }).catch((err) => {
      return err;
    })
};

var Article = Mongoose.model('article', articleSchema);

module.exports = Article;
