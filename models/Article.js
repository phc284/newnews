const Mongoose = require('mongoose');

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
    concepts: [{
      text: { type: String, required: true },
      relevance: Number,
      dbpedia_resource: String
    }],
    category: {
      score: Number,
      label: String
    }
}, {_id: false});

// articleSchema.pre('save', (next) => {
//   return pHash(this.password, null, null).bind(this)
//     .then( function(hashed){
//       console.log(`hashed pass: ${hashed}`);
//       this.password = hashed;
//       next();
//     });
// });

var Article = Mongoose.model('article', articleSchema);

module.exports = Article;
