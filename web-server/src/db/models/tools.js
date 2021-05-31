const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tools', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    toolName: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    toolType: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    toolTypeName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    toolRemark: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    richText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    publisher: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tools',
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
