module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    employeeId: {
      type: DataTypes.INTEGER,
      foreignKey: true,  
    },
  },
    {
      timestamps: false,
      tableName:'addresses',
      underscored: true,
    });

  Address.associate = (models) => {
    Address.belongsTo(models.Employee, 
      {
        foreignKey: 'employeeId', as: 'employees'
      });
  };

  return Address;
};