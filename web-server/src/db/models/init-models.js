var DataTypes = require("sequelize").DataTypes;
var _active = require("./active");
var _active_examine = require("./active_examine");
var _apply_examine = require("./apply_examine");
var _columns = require("./columns");
var _data_dictionaries = require("./data_dictionaries");
var _departure = require("./departure");
var _field = require("./field");
var _jurisdiction = require("./jurisdiction");
var _means = require("./means");
var _means_examine = require("./means_examine");
var _member = require("./member");
var _message = require("./message");
var _news = require("./news");
var _news_examine = require("./news_examine");
var _role = require("./role");
var _server = require("./server");
var _tool = require("./tool");
var _tools = require("./tools");
var _user = require("./user");
var _user_collection = require("./user_collection");
var _user_group = require("./user_group");
var _user_role = require("./user_role");

function initModels(sequelize) {
  var active = _active(sequelize, DataTypes);
  var active_examine = _active_examine(sequelize, DataTypes);
  var apply_examine = _apply_examine(sequelize, DataTypes);
  var columns = _columns(sequelize, DataTypes);
  var data_dictionaries = _data_dictionaries(sequelize, DataTypes);
  var departure = _departure(sequelize, DataTypes);
  var field = _field(sequelize, DataTypes);
  var jurisdiction = _jurisdiction(sequelize, DataTypes);
  var means = _means(sequelize, DataTypes);
  var means_examine = _means_examine(sequelize, DataTypes);
  var member = _member(sequelize, DataTypes);
  var message = _message(sequelize, DataTypes);
  var news = _news(sequelize, DataTypes);
  var news_examine = _news_examine(sequelize, DataTypes);
  var role = _role(sequelize, DataTypes);
  var server = _server(sequelize, DataTypes);
  var tool = _tool(sequelize, DataTypes);
  var tools = _tools(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var user_collection = _user_collection(sequelize, DataTypes);
  var user_group = _user_group(sequelize, DataTypes);
  var user_role = _user_role(sequelize, DataTypes);


  return {
    active,
    active_examine,
    apply_examine,
    columns,
    data_dictionaries,
    departure,
    field,
    jurisdiction,
    means,
    means_examine,
    member,
    message,
    news,
    news_examine,
    role,
    server,
    tool,
    tools,
    user,
    user_collection,
    user_group,
    user_role,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
