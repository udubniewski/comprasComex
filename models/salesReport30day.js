module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
    return sequelize.define('SalesReport30day', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idProduct: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      "30daySales": {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stockForSale: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
  };
  