/**
 * The function returns a random RGB value i.e. 
 * an integer ranging between 1 - 255
 */
const randomRgbNumberGenerator = () => {
    return Math.floor(Math.random() * 255); 
}

/**
 * The module exports the function
 */
export { randomRgbNumberGenerator }; 