/*City Names: Write a function called city_country() that takes in the name of a city and its country.
 The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.*/
function city_country(name, country) {
    return name + ", " + country;
}
console.warn(city_country('Lahore', 'Pakistan'));
console.warn(city_country('New Yark', 'Amereca'));
console.warn(city_country('New Dehli', 'India'));
