const { development: config } = require("../config/config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    logging: false,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Event = require("./event.js")(sequelize, Sequelize.DataTypes);
db.User = require("./user.js")(sequelize, Sequelize.DataTypes);
db.Follow = require("./follow.js")(sequelize, Sequelize.DataTypes);

db.Event.belongsToMany(db.User, { through: db.Follow, foreignKey: "EventId" });
db.User.belongsToMany(db.Event, { through: db.Follow, foreignKey: "UserId" });

module.exports = db;
