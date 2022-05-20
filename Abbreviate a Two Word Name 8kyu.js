
function abbrevName(name){
    const newArray = name.split(" ")
    return (newArray[0][0] + "." + newArray[1][0]).toUpperCase()
 }
 
 
 
 // P - take in a string of two names with a space
 // R - return First intial Capital - period - Last Inital Capital
 // E - Sam Harris => S.H
 // P - Take in string of two names, seperate first name and last name, Take the first letter of 
 //     the first name and make it Capital, take the First Letter of the Last name and make it capital
 //     add a period in the middle 