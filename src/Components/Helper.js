/**
 * The function returns a random RGB Value 
 * for colouring boxes
 */

let randomColor = (arr) => {
    let randomIndex = Math.floor(Math.random() * arr.length); 
    return arr[randomIndex]; 
}

const randomRGBnumberGenerator = () => {
    return Math.floor(Math.random() * 255); 
}

export { randomColor }; 