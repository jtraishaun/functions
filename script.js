var miles=Number(prompt("Enter the number of miles per year:"));

var cost=Number(prompt("Enter the cost of gallon"))

function yearlyCost(miles, cost, rating){

    return (miles*cost)/rating;

}