const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Ability', {
    name :{
      type: DataTypes.STRING,
      allowNull: false,
      unique : 'combNameManaCost'
    },
    description :{
      type: DataTypes.TEXT,
      
    },
    mana_cost :{
      type: DataTypes.FLOAT,
      allowNull: false,
      unique : 'combNameManaCost'
    },

  })
}