/* ForIn loops anotomy is jist like for of loop   // this loops gives keys not the values that's a simple difference between forof and forin */

// now for objects

const countryCode = {
  IN: "India",
  US: "United State Of America",
  BH: "Bharat",
  FR: "France",
};

for (const key in countryCode) {
  console.log(`${key} :- ${countryCode[key]}`);
}


/* maps are not iteratable by this loop */