/*Album: Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title, and it should return a Object 
containing these two pieces of information. Use the function to make three dictionaries representing
 different albums. Print each return value to show that Objects are storing the album information correctly.
  Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
  If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
  Make at least one new function call that includes the number of tracks on an album.*/

  
function make_album(artist:string, title:string,tracks?:number) {
    const album = {
        artist,
        title,
    };

    if (tracks) {
        album.tracks = tracks;
    }
    return album;
};

const album1 = make_album("Akhri Marka", "Khawarzam");
const album2 = make_album("Asim Anyat", "Saya",83);
const album3 = make_album("sham e gham", "Rehai",73);

console.warn(album1);
console.warn(album2);
console.warn(album3);