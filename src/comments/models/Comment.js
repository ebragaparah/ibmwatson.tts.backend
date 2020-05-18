import {sequelize, Sequelize} from '../../config/db/connection';

const Comment = sequelize.define('comments', {
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Content field cannot be empty'
            }
        }
    }
});

export default Comment;
