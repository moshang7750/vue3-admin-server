const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jurisdiction', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    path: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "拥有的权限数据"
    },
    roleId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "对应角色"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jurisdiction',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
