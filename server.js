const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./Controllers");
const homeroutes = require("./Controllers/homeRoutes")
const draftroutes = require("./Controllers/api/draftRoutes")
const managerRoutes = require("./Controllers/api/managerRoutes")
const playRoutes = require("./Controllers/api/playRoutes")
const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 24 * 60 * 60 * 365 * 1000,
  },
  resave: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));


// all routes used
app.use(routes);
app.use(homeroutes)
app.use(draftroutes)
app.use(managerRoutes)
app.use(playRoutes)


// Inform Express.js on which template engine to use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
