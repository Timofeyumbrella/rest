const { development: config } = require("../config/database.js");

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
db.Role = require("./role.js")(sequelize, Sequelize.DataTypes);
db.Permission = require("./permission.js")(sequelize, Sequelize.DataTypes);

db.Event.belongsToMany(db.User, { through: db.Follow, foreignKey: "eventId" });
db.User.belongsToMany(db.Event, { through: db.Follow, foreignKey: "userId" });

db.Role.belongsToMany(db.Permission, {
  through: "Accesses",
  foreignKey: "roleId",
});

db.Permission.belongsToMany(db.Role, {
  through: "Accesses",
  foreignKey: "permissionId",
});

db.Role.hasMany(db.User, {
  foreignKey: "roleId",
});
db.User.belongsTo(db.Role, {
  foreignKey: "roleId",
});

module.exports = db;
