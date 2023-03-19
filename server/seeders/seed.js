const db = require('../config/connection');
const { Profile, Comic } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const comicSeeds = require('./comicSeeds.json');
const { Offer } = require('../models');
const offerSeeds = require('./offerSeeds.json');


db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);

    await Comic.deleteMany({});
    await Comic.create(comicSeeds);

    await Offer.deleteMany({});
    await Offer.create(offerSeeds);

    const hulk = await Comic.findOne({ title: 'Hulk' });
    console.log("hulk", hulk);

    const spiderMan =await Comic.findOne({ title:"Spider-Man" })
    console.log("spiderMan", spiderMan);

    const xMen = await Comic.findOne({ title:"X-men" })

    //added one comic to the profile
    await Profile.findOneAndUpdate(
      { name: 'Alan Kay' },
      { $push: { savedComics: xMen._id } }
    );

    //added two comics to the profile
    await Profile.findOneAndUpdate(
      { name: "Amiko" },
      { $push: { savedComics: {$each :[hulk._id, spiderMan._id]} }}
    );

    //add offer to the profile
    await Profile.findOneAndUpdate(
      { name: "Brian Kernighan" },
      { $push: { savedOffers: Offer._id } }
    );

    console.log("all done!")
    process.exit(0);
  } catch (err) {
    throw err;
  }

  
});