// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
let sum = 0;
  for ( let i = 0; i < data.length; i++){
     sum = sum + data[i].price;
  }
  let avg = sum/data.length;
  let rAvg = Math.round(avg * 100) / 100
  console.log("The average price is $" + rAvg);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let mediumCost = [];
  for ( let i = 0; i < data.length; i++){
      if(data[i].price > 14 && data[i].price < 18){
        mediumCost.push(data[i]);
      }
  }
  console.log(mediumCost);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let itemGBP = [];
  for ( let i = 0; i < data.length; i++){
      if(data[i].currency_code === "GBP"){
        itemGBP = data[i];
      }
  }
  // itemGBP.price;
  // itemGBP.title;
  console.log(itemGBP.title + " costs " + itemGBP.price + " pounds.");
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:

  let woodItems = [];
  for ( let i = 0; i < data.length; i++){
     for ( let n = 0; n < data[i].materials; n++){
         if(data[i].material[n] === "wood"){
         woodItems.push(data[i]);
         }
      }
    }
    return woodItems;
  }


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
}
