module.exports = (sequelize,DataTypes) => {
  const BookTable = sequelize.define('Book', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    author: DataTypes.STRING, 
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },{
    tableName: 'Books',
    underscored: true,
  });
  return BookTable;
};

