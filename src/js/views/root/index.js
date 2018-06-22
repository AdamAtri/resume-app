
module.exports = (function() {

  const RootView = Mn.View.extend({
    template: (data) => (`
      <h1 id="temp-header">Hello AwesomeSauce</h1>
      <img id="temp-img" src="${data.img}"></img>
    `),
    templateContext: () => ({
      img: require('../../../assets/cash.jpg')
    })
  });

  return RootView;
})();
