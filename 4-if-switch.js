// ENTSCHEIDUNGEN 
// if elseif else 
// switch case

const gender = "divers"

if(gender === "female") {
  console.log("Hallo Mrs")
}
else if (gender === "divers") {
  console.log("Hallo divers")
}
else {
  console.log("Hallo Mr")
}


const wochentage = [ "Mo", "Di", "Mi", "Do", "Fr", "Sa", "So" ]

const heute = "Di"

// VIELE cases => nicht so gut für if-else => lieber switch case
// if(heute == "Mo") {
//   console.log("Heute ist Montag")
// }
// else if(heute == "Di") {
//   console.log("Heute ist Dienstag")
// }

switch(heute) {
  case "Mo":
  case "Di":
  case "Mi":
  case "Do":
  case "Fr":
    console.log("Fuck. Arbeiten")
    break;

  // case "Mo": console.log("Heute ist Montag. Wir gehen ins Kino"); break;
  // case "Di": console.log("Heute ist Dienstag. Wir räumen auf"); break;
  // case "Mi": console.log("Heute ist Mittwoch. Schwimmen"); break;
  // case "Do": console.log("Heute ist Donnerstag. Wandern"); break;
  // case "Fr": console.log("Heute ist Freitag. Tanzen"); break;
  // one logic for TWO cases
  case "Sa": 
  case "So": 
    console.log("Heute ist Wochenende. Chillen"); break;
}





const experience = 70

if(experience >= 50 && experience < 80) {
  console.log("Mittel erfahren")
}
else if(experience >= 80 && < 90) {
  console.log("Erfahren")
}
else if(experience >= 90) {
  console.log("Experte")
}