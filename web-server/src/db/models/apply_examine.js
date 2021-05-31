const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('apply_examine', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    memberId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "会员申请Id"
    },
    examineType: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "申请类型\r\n\r\n1 账号升级\r\n\r\n2 资料申请\r\n\r\n3 工具申请"
    },
    affairName: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "事务名"
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "审核用户"
    },
    examineTime: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "审核时间"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "审核状态 0 不通过 1 待审核  2 审核通过"
    },
    createTime: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'apply_examine',
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
