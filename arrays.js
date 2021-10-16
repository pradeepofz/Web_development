const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  mon: {
    open: 12,
    close: 22,
  },
  tue: {
    open: 11,
    close: 23,
  },
  wed: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

//getting property names as array

const properties = Object.keys(openingHours);
// console.log(Object.keys(openingHours));
console.log(properties);
let openStr = `we are open only on ${properties.length} days:`;
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

//getting property values as array
const values = Object.values(openingHours);
console.log(values);
