const names = require('./list.json');

module.export = {
  random: random,
  allNames: allNames
};

function random() {
  return names[Math.floor(Math.random() * names.length)];
}

function allNames() {
  return name;
}

console.log(random());
