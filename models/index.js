const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.User = require('./user')(sequelize, Sequelize);
db.Project = require('./project')(sequelize, Sequelize);
db.Developer = require('./developer')(sequelize, Sequelize);

db.ProjectDevs = sequelize.define('project_devs', {}, { timestamps: false });

db.Project.belongsToMany(db.Developer, { 
  through: db.ProjectDevs,
  as: 'developers',
  foreignKey: 'projectId',
});

db.Developer.belongsToMany(db.Project, { 
  through: db.ProjectDevs,
  as: 'projects',
  foreignKey: 'developerId',
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
