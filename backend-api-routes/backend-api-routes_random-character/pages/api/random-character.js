import Chance from "chance";

const chance = new Chance();

export default function handler(request, response) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
    email: chance.email(),
    phone: chance.phone(),
    avatar: chance.avatar(),
    twitter: chance.twitter(),
  };
  response.status(200).json(character);
}
