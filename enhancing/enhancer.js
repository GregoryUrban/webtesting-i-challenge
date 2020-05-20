module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
if (item.enhancement < 20)  {  const newItem = {
    name: item.name,
    durability: item.durability,
    enhancement: item.enhancement + 1
  }
  return newItem;
  } else {
    return ({ 
      name: item.name,
      durability: item.durability,
      enhancement: item.enhancement 
    });
  }
}

function fail(item) {
// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
  if (item.enhancement < 15)  {  const newItem = {
    name: item.name,
    durability: item.durability - 5,
    enhancement: item.enhancement
  }
  return newItem;
    } 
    // - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
    else if (item.enhancement > 16)  {  const newItem = {
      name: item.name,
      durability: item.durability,
      enhancement: item.enhancement - 1
    }
    return newItem;
    }

// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
    else if (item.enhancement > 14)  {  const newItem = {
      name: item.name,
      durability: item.durability - 10,
      enhancement: item.enhancement
    }
    return newItem;
    }

    return item;
}

function repair(item) {
  const newItem = {
    name: item.name,
    durability: 100,
    enhancement: item.enhancement
  }
  return newItem;
}

// if the enhancement level is 0, the the name is not modified.
// if the enhancement level is greater than 0, change the name to include the enhancement level
function get(item) {
  if (item.enhancement === 0)  {  const newItem = {
    name: item.name,
    durability: item.durability,
    enhancement: 0
  }
  return newItem;
  } else {
    return ({ 
      name: `[+${item.enhancement}] ${item.name}`,
      durability: item.durability,
      enhancement: item.enhancement 
    });
  }
}
