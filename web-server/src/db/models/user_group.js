const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_group', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    groupName: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    userNums: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "用户个数"
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "创建人"
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_group',
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
