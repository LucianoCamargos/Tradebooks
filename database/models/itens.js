module.exports = (sequelize, DataTypes) => {
    const Itens = sequelize.define(
      "Itens",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        QTDE: {
          type: DataTypes.INTEGER,
        },
        ID_PEDIDOS: {
          type: DataTypes.INTEGER,
        },
        BOOKS_ID: {
          type: DataTypes.INTEGER,
        },
    
  
  
      },
      {
        tableName: "tb_itens",
        timestamps: false,
      }
    );
    Itens.associate = function (models) {
        Itens.belongsTo(models.Pedidos, {
          as: "tb_pedidos",
          foreignKey: "ID_PEDIDOS",

        })
 
        Itens.belongsTo(models.Books, {
          as: "tb_books",
          foreignKey: "BOOKS_ID",
        })
      };
  
    return Itens;
  
  };
  