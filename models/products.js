module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
    return sequelize.define('Products', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      sku: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isCombo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    }, {
      timestamps: false,  // No necesitamos campos de tiempo
    });
  };
  