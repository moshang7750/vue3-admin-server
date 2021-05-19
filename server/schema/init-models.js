var DataTypes = require("sequelize").DataTypes;
var _member = require("./member");
var _newsContent = require("./newsContent");

function initModels(sequelize) {
  var member = _member(sequelize, DataTypes);
  var newsContent = _newsContent(sequelize, DataTypes);


  return {
    member,
    newsContent,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
