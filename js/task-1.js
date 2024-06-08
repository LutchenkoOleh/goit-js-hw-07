const categories = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories : ${categories.length}`);

categories.forEach((category) => {
  const title = category.querySelector("h2");
  console.log(`Category: ${title.textContent}`);
  const items = category.querySelectorAll("ul li").length;
  console.log(`Elements: ${items}`);
});

