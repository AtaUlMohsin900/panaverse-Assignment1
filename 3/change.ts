export{}
const lowerCase = "ata ul mohsin";
const upperCase = "Ata Ul Mohsin";
const titleCase = "Ata uL MoHSIN";
const empty  = "";


 lowerCase.split(" ")

const capitalizeWord = (str: string) => {

    const  firstChar = str
                          .charAt(0)
                          .toLocaleUpperCase()
    const rest0fStr = str
                          .substring(1)
                          .toLocaleLowerCase()

return `${firstChar}${rest0fStr}`;                          

}

const capitalizeEachWord = (str: string)=> (
    str
     .split(" ")
     .map((word: string)=> capitalizeWord(word))
     .join(" ")
)

console.warn(titleCase)