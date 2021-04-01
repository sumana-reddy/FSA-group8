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
       type: DataTypes.STRING(30),
      unique: true,
      required: true,
      allowNull: false,
      validate: {
        is: {
          args: /^([a-zA-Z]+\s)*[a-zA-Z]+$/i  ,
          msg:
            'Name accepts alphabets, neither numbers nor special characters.',
        },
        max: {
          args: [30],
          msg: 'Name is too long.',
        },
        min: {
          args: [5],
          msg: 'Name should have minimum 5 characters.',
        },
      },
    },
    
    latitude: {
      type: DataTypes.DECIMAL(10, 8),
      allowNull: false,
      validate: {
        min: {
          args: -90,
          msg: 'Latitude must be -90 degrees or more.',
        },
        max: {
          args: 90,
          msg: 'Latitude must be 90 degrees or less.'
        },
      },
    },
    
     longitude: {
       type: DataTypes.DECIMAL(11, 8),
      allowNull: false,
      unique: true,
      validate: {
        min: {
          args: -180,
          msg: 'Latitude must be -180 degrees or more.',
        },
        max: {
          args: 180,
          msg: 'Latitude must be 180 degrees or less.',
        },

      }
    },
    
      type: DataTypes.STRING
    
   /** name: {
   // ^[a-zA-Z0-9]+$
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
