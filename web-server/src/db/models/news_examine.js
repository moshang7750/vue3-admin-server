const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news_examine', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(2),
      allowNull: false,
      comment: "新闻类型"
    },
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "新闻标题"
    },
    examineType: {
      type: DataTypes.STRING(2),
      allowNull: true,
      comment: "审核类型\r\n\r\n1 上架审核\r\n\r\n0 下架审核"
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "审核人"
    },
    examineTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "审核时间"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "审核状态"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'news_examine',
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
