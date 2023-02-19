var name1 = "ata ul mohsin";
console.warn(name1.toLowerCase());
console.warn(name1.toUpperCase());
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
console.warn(toTitleCase(name1));
