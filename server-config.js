const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const serve = require('koa-static');
const sendfile = require('koa-sendfile')

const dbFetch = require('./requestHandlers/dbFetch');
const articleHandler = require('./requestHandlers/article-handler.js');
const Article = require('./models/Article.js');

const app = new Koa();
const router = new Router();

app.use( bodyParser() );
app.use( serve(__dirname + '/client') );

router
  .get('/articles', articleHandler.retrieveArticles)
  .get('/articles/:conceptId', articleHandler.retrieveByConcept)
  .get('/concepts', async (ctx, next) => {
    await dbFetch.getConceptsByContinent()
      .then(function(response) {
        ctx.body = {
          'concepts' : response,
        }
      })
  })
 .get('/headlines', async (ctx, next) => {
   await dbFetch.getHeadlines()
    .then(function(response) {
      ctx.body = {
        'headlines': response
      }
    })
    .catch((err) => {console.log(err)})
  })



app.use( router.routes() );

app.use(function* index() {
  yield send(this, '/client/index.html');
});
module.exports = app;


// const session = require('koa-session');
// const dbconfig = require('./dbconfig.js'); //uncomment when ready to connect to db
// const User = require('./models/user.js');
// const userHandler = require('./user-handler.js');

// //Sessions
// app.keys = ['connecting the dots'];
// /*
// const CONFIG = {
//   key: 'koa:sess',
//   maxAge: 86400000,
//   overwrite: true,
//   httpOnly: true,
//   signed: true,
//   rolling: false
// };
// app.use(session(CONFIG, app));
// */
// app.use( session(app) ); //using default CONFIG above


// .post('/login', userHandler.checkSession, userHandler.checkUsername, userHandler.login)
  //   // check session
  //   // check username in database
  //   // match password, assign session id
  // .post('/signup', userHandler.checkUsername, userHandler.signup)
  //   // check username in database
  //   // store username/password in database, assign session id
  // .get('/logout', userHandler.logout)
  //   // destroy session, redirect to home
    // retrieve pins from db, sends pins to client
  // .post('/new-pin', pinHandler.createPin)
  //   // check session
  //   // create pin


// app.use( router.allowedMethods());
