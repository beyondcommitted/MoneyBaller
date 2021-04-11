const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./Controllers");
const helpers = require("./utils/helpers");
const { Team } = require("./models");
const Manager = require("./models/Manager");
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
//routes

app.use(session(sess));

app.get("/", function (req, res) {
  res.render("login");
});
app.get("/teampage", function (req, res) {
  res.render("teampage", { Manager });
});

app.get("/newTeam", function (req, res) {
  res.render("newTeam");
});
app.get("/draft", function (req, res) {
  res.render("draft");
});
app.get("/play", function (req, res) {
  res.render("play", { players: Team });
});
// Inform Express.js on which template engine to use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
