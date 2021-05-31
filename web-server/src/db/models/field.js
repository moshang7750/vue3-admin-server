const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('field', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    fieldType: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    fieldName: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fileList: {
      type: DataTypes.JSON,
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
      type: DataTypes.DATE(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'field',
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
