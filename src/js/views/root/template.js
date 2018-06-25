// rootview template

module.exports = () => {
  let image = require('../../../assets/dt_standing_transparency.png');
  return (`
    <div class="main-header" data-size="10">
      <div class="bg-container"></div>
      <div class="fg-container">
        <img class="container-img" src="${image}">
      </div>
      <div id="reasons-container"> </div>
      <div id="moveon-container"></div>
    </div>
    <div id="dev-info"></div>
  `);
};
