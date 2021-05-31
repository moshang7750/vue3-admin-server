const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('server', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    serverName: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    serverType: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    serverTypeName: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    filePhotoList: {
      type: DataTypes.JSON,
      allowNull: true
    },
    richText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    '	publisher': {
      type: DataTypes.BIGINT,
      allowNull: true
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
    tableName: 'server',
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
