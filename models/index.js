const User = require('./User');
const Catch = require('./Catch');

User.hasMany(Catch, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Catch.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Catch };
