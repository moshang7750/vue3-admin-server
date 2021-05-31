const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('means_examine', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    meansType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "资料类型"
    },
    meansName: {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: "资料名称"
    },
    examineType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "审核类型  1 上架审核  0 下架审核"
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "审核用户"
    },
    examineTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "审核时间"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "审核状态  1 审核通过  0 审核不通过"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'means_examine',
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
