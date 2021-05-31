const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('departure', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    memberId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "会员名"
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "留言内容"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "留言状态"
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "反馈用户"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    feedbackTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "反馈时间"
    }
  }, {
    sequelize,
    tableName: 'departure',
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
