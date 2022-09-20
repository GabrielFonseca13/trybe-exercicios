// const fetch = require('node-fetch');
const getUserReposUrl = (username) => `https://api.github.com/users/${username}`;

const getGitHubUserInfos = async (username) => {
  const url = getUserReposUrl(username);

  const result = await fetch(url);
  const data = await result.json();

  const { name, company, twitter_username: twitter, bio, location } = data;
  return {
    name,
    company,
    twitter,
    bio,
    location,
  };
};

getGitHubUserInfos('Atanes-Trybe')
  .then((data) => console.log(data));

module.exports = {
  getGitHubUserInfos,
  getUserReposUrl,
};