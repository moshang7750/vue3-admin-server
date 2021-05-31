const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('active_examine', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    activeType: {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: "活动类型"
    },
    activeName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "活动名称"
    },
    examineType: {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: "审核类型"
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    examineTime: {
      type: DataTypes.DATEONLY,
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
    tableName: 'active_examine',
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
