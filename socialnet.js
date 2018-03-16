var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// List everyone and for each of them, list the names of who they follow and who follows them
// Identify who follows the most people
// Identify who has the most followers

function mostFollowers(data) {
  var base = {};
  for (var i in data) {
    for (var j = 0; j < data[i].follows.length; j++) {
      if (base[data[i].follows[j]] === undefined) {
        base[data[i].follows[j]] = 1;
      } else {
        base[data[i].follows[j]] += 1;
      }
    }
  }

  console.log(base);
  var final = [];
  for (var key in base) {
    final.push(base[key]);
  }
  var most = final[0];
  var index = 0;
  for (var m = 1; m < final.length; m++) {
    if (final[m] > most) {
      most = final[m];
      index = m;
    }
  }
  console.log(final);

  var list = [];
  final.map(function (item, location) {
    if (item === most) {
      list.push(location);
    } return list;
  });
  console.log(list);
  var keys = Object.keys(base);
  console.log(keys);
  var end = [];
  list.map(function (element) {

    end.push(data[keys[element]].name);
    return end;
  });
  return end;
}
console.log(mostFollowers(data));
// Identify who has the most followers over 30
// Identify who follows the most people over 30
// List those who follow someone that doesn't follow them back
// List everyone and their reach (sum of # of followers and # of followers of followers)
