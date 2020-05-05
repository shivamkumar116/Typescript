let sports: string[] = ["Cricket", "Football", "baseball", "softball"];

for (let iTmp of sports) {
  if (iTmp == "Cricket") {
    console.log(iTmp + "<<My fav");
  } else {
    console.log(iTmp);
  }
}

console.log("After pushing some sports..........");
sports.push("Swimming");
sports.push("Hockey");
for (let index of sports) {
  console.log(index);
}
