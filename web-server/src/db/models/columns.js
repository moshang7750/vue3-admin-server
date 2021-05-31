const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('columns', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    tree: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "节点JSON数据"
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "排序字段"
    },
    path: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "对应前端路由跳转路径  可以为空"
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "父节点id"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'columns',
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
