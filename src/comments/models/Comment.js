import {sequelize, Sequelize} from '../../config/db/initializer';

const Comment = sequelize.define('comments', {
    content: {
	type: Sequelize.TEXT,
	allowNull: false
    }
});

//Comment.sync({force: true}).then(() => console.log('comments'));

export default Comment;