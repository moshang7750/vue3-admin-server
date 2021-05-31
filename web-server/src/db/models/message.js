const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('message', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    '	logoUrl': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "logo url地址"
    },
    banner: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: "首页轮播图地址JSON"
    },
    agreementUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "协议地址"
    },
    clauseUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "条款地址"
    },
    graphical: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "是否开启图形验证码"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'message',
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
