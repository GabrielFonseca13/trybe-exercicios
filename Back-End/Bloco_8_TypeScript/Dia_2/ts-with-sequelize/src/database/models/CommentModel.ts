// ./src/database/models/CommentModel.ts

import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

import Book from './BookModel'; // Nossa outra entidade

class Comment extends Model {
  declare id: number;
  declare text: string;
  declare author: string;
}

Comment.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: STRING(255),
    allowNull: false,
  },
  author: {
    type: STRING(100),
    allowNull: false,
  },
  bookId: {
    type: INTEGER,
    allowNull: false,
  }
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  modelName: 'comments',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

Book.hasMany(Comment, { foreignKey: 'bookId', as: 'comments' });
Comment.belongsTo(Book, { foreignKey: 'bookId', as: 'book' });

export default Comment;