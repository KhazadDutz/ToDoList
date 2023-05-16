const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Task = sequelize.define('task', 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
    },
  },
  {
    tableName: 'Tasks'
  }
);

Task.associate = (models) => {
  Task.belongsTo(models.User, { foreignKey: 'userId' });
};

module.exports = User;
