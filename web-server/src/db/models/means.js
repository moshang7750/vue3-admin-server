const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('means', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    '	meansName': {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    meansType: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    meansTypeName: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    fileDocList: {
      type: DataTypes.JSON,
      allowNull: true
    },
    richText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: " 0 研究领域  1 服务列表"
    },
    fieldId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "研究领域 或 服务列表 Id "
    },
    isPay: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jurisdiction: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: " 0 免费下载 1申请权限"
    },
    publisher: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'means',
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
