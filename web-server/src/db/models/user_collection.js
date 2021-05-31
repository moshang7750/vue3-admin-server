const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_collection', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    memberId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "会员收藏Id"
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1 收藏的服务\r\n2 收藏的工具\r\n3 收藏的研究领域"
    },
    collectionId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "对应资料的id"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_collection',
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
