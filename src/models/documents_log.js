"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Document_log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Document_log.init(
    {
      dl_user_id: DataTypes.STRING,
      dl_document_id: DataTypes.STRING,
      dl_content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Document_log",
    }
  );
  return Document_log;
};
