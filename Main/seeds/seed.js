const sequelize = require('../config/connection');
const { User, Catch } = require('../models');

const userData = require('./userData.json');
const catchData = require('./catchData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const catches of catchData) {
    await Catch.create({
      ...catches,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
