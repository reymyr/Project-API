module.exports = (sequelize, DataTypes) => {
  const Developer = sequelize.define('developer', {
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          isEmail: true
        }
      },
      speciality: {
        type: DataTypes.STRING,
      }
    },
    {
      timestamps: false,
    }
  );

  return Developer;
}