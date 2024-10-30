// connect js to html
// create freelancers inital array
const freelancers = [
  {name: "Alice", price: 30, occupation:"writer"},
  {name: "bob", price: 50, occupation: "teacher"},
]
// create an unordered list element
const ul = document.createElement("ul");
// create list item for each freelancers
const freelancersList = freelancers.map((freelancer) => {
  return `<li>${freelancers}</li>`

})
console.log(freelancers);
// replace children list items to the ul
ul.replaceChildren();
// put the ul into the section


