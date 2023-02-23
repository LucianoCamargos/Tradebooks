module.exports = (sequelize, DataTypes) => {
    const Books = sequelize.define(
      "Books",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        TITLE_BOOK: {
          type: DataTypes.STRING,
        },
        PRICE: {
          type: DataTypes.DOUBLE,
        },
        DESCRIPTION_BOOK: {
          type: DataTypes.STRING,
        },
        CATEGORY: {
          type: DataTypes.STRING,
        },
        TIPO: {
          type: DataTypes.STRING,
        },
        QTDE: {
          type: DataTypes.INTEGER,
        },
        USERS_ID: {
          type: DataTypes.INTEGER,
        },
        
        ACABAMENTO: {
          type: DataTypes.STRING,
        },
        ANO_EDICAO: {
          type: DataTypes.DATE,
        },
        AUTOR: {
          type: DataTypes.STRING,
        },
        EDITORA: {
          type: DataTypes.STRING,
        },
        IDIOMA: {
          type: DataTypes.STRING,
        },
        NUMERO_EDICAO: {
          type: DataTypes.INTEGER,
        },
        NUMERO_PAGINAS: {
          type: DataTypes.INTEGER,
        },
        condicao_book: {
          type: DataTypes.STRING,
        },
        tipo_anuncio: {
          type: DataTypes.STRING,
        },
        image: {
          type: DataTypes.STRING,
        },
  
      },
      {
        tableName: "tb_books",
        timestamps: false,
      }
    );

    Books.associate = function (models) {
        Books.belongsTo(models.User, {
          as: "users",
          foreignKey: "USERS_ID",
        });
      };
    
    return Books;
  };
  