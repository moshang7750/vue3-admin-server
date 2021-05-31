const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('role', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    roleName: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    menus: {
      type: DataTypes.JSON,
      allowNull: false,
      comment: "拥有菜单权限的JSON"
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'role',
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
