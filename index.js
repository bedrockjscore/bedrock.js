const LOG = true;

const log = LOG ? console.log : () => {};

class Block {
  constructor() {
    log("Block created");
  }
}

class Item {

}

class Entity {

}

function pack(object, path) {
  log(`Pretending to export to path ${path}`);
}

module.exports = {
  Item: Item,
  Block: Block,
  Entity: Entity,
  pack: pack
}
