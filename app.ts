/*
let f_namn = await read("Förnamn? ")
let e_namn = await read("Efternamn? ")

write(
    "Dina initialer är:"+
    f_namn.substring(0,3)+
    e_namn.substring(0,3)
);
*/
/*
let telefonnummer = await read("Telefonnummer med bindestreck: ");
write("Telefonnummer utan bindestreck: " + telefonnummer.replace ("-", " "));
*/
/*
let telefonnummer = await read("Telefonnummer med bindestreck: ");
write("Riktnummer: " + telefonnummer.slice(0,telefonnummer.indexOf("-") ))
write("Abonnentnummer: " + telefonnummer.slice(telefonnummer.indexOf("-") + 1, telefonnummer.length));
*/
/*
let minuter = +await read("Minuter: ")
write("Hela timmar: " + (minuter-(minuter % 60)) / 60)
write ("Restminuter: " + Math.floor(minuter % 60))
*/
/*
let r = +await read("Radien: ")
write("Area: " + (Math.PI*r*r))
write("Omkrets: " + (Math.PI*r*2))
*/
/*
let a= +await read("A: ")
let b= +await read("B: ")
let c= +await read("C: ")
write("Längsta diagonalen: " + Math.sqrt(a**2+b**2+c**2))
*/

export { }
