const db = require('../config/connection');
const { Profile, Comic } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const comicSeeds = require('./comicSeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);

    await Comic.deleteMany({});
    await Comic.create(comicSeeds)

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
