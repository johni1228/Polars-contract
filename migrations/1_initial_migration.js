const PlayfulPolars = artifacts.require('PlayfulPolars');
const baseURI = 'heroku url';

module.exports = function(deployer) {
  deployer.deploy(PlayfulPolars, baseURI).then(() => {
    console.log('PlayfulPolars is deployed.');
  });
};
