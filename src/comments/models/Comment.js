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

//Comment.sync({force: true}).then(() => console.log('comments'));

export default Comment;
