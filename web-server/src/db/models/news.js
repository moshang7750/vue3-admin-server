const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    typeName: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    publisher: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fileList: {
      type: DataTypes.JSON,
      allowNull: true
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
    tableName: 'news',
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
