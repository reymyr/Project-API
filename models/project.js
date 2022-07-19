module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('project', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      deadline: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    {
      timestamps: false,
    }
  );

  return Project;
}