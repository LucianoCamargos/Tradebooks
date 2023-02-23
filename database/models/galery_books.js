module.exports = (sequelize, DataTypes) => {
    const Galery_Books = sequelize.define(
      "Galery_Books",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        image: {
          type: DataTypes.STRING,
        },
        book_id: {
          type: DataTypes.INTEGER,
        }
  
      },
      {
        tableName: "galery_books",
        timestamps: false,
      }
    );

    Galery_Books.associate = function (models) {
        Galery_Books.belongsTo(models.Books, {
          as: "tb_books",
          foreignKey: "book_id",
        });
      };
    
    return Galery_Books;
  };
  