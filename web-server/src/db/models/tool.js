const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tool', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "文件上传后的相对路径"
    },
    toolsId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "关联 对应包Id"
    },
    isPay: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tool',
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
