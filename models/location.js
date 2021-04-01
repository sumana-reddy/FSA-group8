'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Location.init({
    
     name: {
       type: String, 
       lowercase: true, 
       required: [true, "can't be blank"], 
       match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
       index: true
     },
     type: DataTypes.STRING,
    latitude: DataTypes.STRING,
     longitude: DataTypes.STRING
     
   /** name: {
      DataTypes.STRING,
    },
    type: {
      DataTypes.STRING,
    },
    latitude: {
      DataTypes.STRING,
    },
    longitude: {
      DataTypes.STRING
    },
    
     name: {
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true,
        unique: false,
    },

    longitude: {
        type: float,
       required: true,

    },
    latitude: {
        type: float,
        required: true,   
    }   
    **/
    
    
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};
