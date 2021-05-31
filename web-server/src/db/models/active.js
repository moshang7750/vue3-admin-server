const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('active', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    activeName: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    activeType: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    activeTypeName: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    activeDate: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    activeAddress: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    filePhotoList: {
      type: DataTypes.JSON,
      allowNull: true
    },
    richText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    publisher: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    creatrTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'active',
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
