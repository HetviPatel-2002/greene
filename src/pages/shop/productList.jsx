import clothing from "../../pics_dotslash/clothing.jpeg"
import toothbrush from "../../pics_dotslash/toothbrush.jpeg"
import Notepad from "../../pics_dotslash/Notepad.jpeg"
import table from "../../pics_dotslash/table.jpeg"
import leather from "../../pics_dotslash/leather belt.jpeg"
const materialsData = {
  "Paper": { "recyclable": 1, "environmental_impact": 0.2, "biodegradable": 1 },
  "Plastic": { "recyclable": 1, "environmental_impact": 0, "biodegradable": 0 },
  "Glass": { "recyclable": 1, "environmental_impact": 0.5, "biodegradable": 0 },
  "Aluminum": { "recyclable": 1, "environmental_impact": 0.5, "biodegradable": 0 },
  "Cotton": { "recyclable": 1, "environmental_impact": 0.2, "biodegradable": 1 },
  "Steel": { "recyclable": 1, "environmental_impact": 0.5, "biodegradable": 0 },
  "Wood": { "recyclable": 1, "environmental_impact": 0.2, "biodegradable": 1 },
  "Nylon": { "recyclable": 1, "environmental_impact": 0, "biodegradable": 0 },
  "Rubber": { "recyclable": 1, "environmental_impact": 0, "biodegradable": 0 },
  "Polyethylene": { "recyclable": 1, "environmental_impact": 0, "biodegradable": 0 },
  "Cardboard": { "recyclable": 1, "environmental_impact": 0.5, "biodegradable": 1 },
  "Styrofoam": { "recyclable": 0, "environmental_impact": 0, "biodegradable": 0 },
  "Polyester": { "recyclable": 1, "environmental_impact": 0, "biodegradable": 0 },
  "Silk": { "recyclable": 0, "environmental_impact": 0.2, "biodegradable": 1 },
  "Brick": { "recyclable": 0, "environmental_impact": 0.5, "biodegradable": 1 },
  "Tin": { "recyclable": 1, "environmental_impact": 0.5, "biodegradable": 0 },
  "Leather": { "recyclable": 0, "environmental_impact": 0.5, "biodegradable": 1 },
  "Concrete": { "recyclable": 0, "environmental_impact": 0, "biodegradable": 0 },
  "Ceramic": { "recyclable": 1, "environmental_impact": 0.5, "biodegradable": 0 },
  "Bamboo": { "recyclable": 1, "environmental_impact": 0.2, "biodegradable": 1 }
};

function calculateScore(materials) {
  var recyclable = materialsData[materials].recyclable;
  var environmentalImpact = materialsData[materials].environmental_impact;
  var biodegradable = materialsData[materials].biodegradable;
  var materialScore = (recyclable * 0.4) + (environmentalImpact * 0.4) + (biodegradable * 0.2);
  console.log(materialScore);

  return materialScore.toFixed(2);
}
function calculateCredits(ecoScore) {
  if (ecoScore >= 0.8) {
      return 3;
  } else if (ecoScore >= 0.6) {
      return 2;
  } else if (ecoScore >= 0.4) {
      return 1;
  } else {
      return 0;
  }
}

function calculate_combine_credit(composition)
{
   var credit=0;
   composition.forEach(function(item) {
      credit=credit+calculateCredits(calculateScore(item.material));
   });
   return credit;
}

const products_data = [
  {
    "name": "Notepad",
    "composition": [
      {"material": "Paper", "quantity": 50},
      {"material": "Plastic", "quantity": 1}
    ],
    "price": 10.0,
    "productImage":Notepad,
    "credit": calculate_combine_credit([
      {"material": "Paper", "quantity": 50},
      {"material": "Plastic", "quantity": 1}
    ])// Assuming you have a function named calculateScore
  },
  {
    "name": "Toothbrush",
    "composition": [
      {"material": "Plastic", "quantity": 1}
    ],
    "price": 2.5,  // Placeholder value, replace with the actual price
    "productImage": toothbrush,  // Placeholder value, replace with the actual image
    "credit": calculate_combine_credit([
      {"material": "Plastic", "quantity": 1}
    ]) // Placeholder value, calculate credit based on composition
  },
  {
    "name": "Clothing",
    "composition": [
      {"material": "Cotton", "quantity": 80}
    ],
    "price": 25.0,  // Placeholder value, replace with the actual price
    "productImage": clothing,  // Placeholder value, replace with the actual image
    "credit": calculate_combine_credit([
      {"material": "Cotton", "quantity": 80}
    ]) // Placeholder value, calculate credit based on composition
  },
  {
    "name": "Table",
    "composition": [
      {"material": "Wood", "quantity": 100}
    ],
    "price": 50.0,  // Placeholder value, replace with the actual price
    "productImage": table,  // Placeholder value, replace with the actual image
    "credit": calculate_combine_credit( [
      {"material": "Wood", "quantity": 100}
    ]) // Placeholder value, calculate credit based on composition
  },
  {
    "name": "Leather Belt",
    "composition": [
      {"material": "Leather", "quantity": 80}
    ],
    "price": 35.0,  // Placeholder value, replace with the actual price
    "productImage": leather,  // Placeholder value, replace with the actual image
    "credit": calculate_combine_credit( [
      {"material": "Leather", "quantity": 80}
    ]) // Placeholder value, calculate credit based on composition
  },];    


console.log(products_data);

export default  products_data