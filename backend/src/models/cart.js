'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.product, { foreignKey: 'id', sourceKey: 'productId' });
      this.hasOne(models.user, { foreignKey: 'id', sourceKey: 'userId' });
    }
  }
  cart.init(
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      progress: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'cart',
    }
  );
  return cart;
};