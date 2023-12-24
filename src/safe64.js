//START SAFE64
// map base64 to a url save chars  https://stackoverflow.com/a/40415059
const bsCharMap = {
    '+': '-',
    '/': '_',
    '=': '~', // note we can safly drop this if we dont care about preseving length
}; // this-sythem-will_gen~~ ;  00~~ 000~ or 0000 dependant on byte length

// let safe64 = base64str.replace(/[+/=]/g, (match) => bsCharMap[match]);
// reverse the above with fancy js
// const sbCharMap = Object.fromEntries(Object.entries(bsCharMap)
//     .map(e => [e[1], e[0]]))

//construct the regex so the code is defined in one place
const bsRegex = new RegExp(`[${Object.keys(bsCharMap).join()}]`, "g")
const sbRegex = new RegExp(`[${Object.keys(sbCharMap).join()}]`, "g")

function _btos(b64) {
    return b64.replace(bsRegex, (match) => bsCharMap[match])
}

function _stob(s64) {
    return b64.replace(sbRegex, (match) => sbCharMap[match])
}

module.exports = {_stob, _btos};
//const {_stob, _btos} = require("./safe64")
//this does "123/+abc=" -> '123~-abc_'
//END SAFE64

//# The Balancing Act: ES6 vs. "Pure" JavaScript
//
// JavaScript, with its evolution through ES6 (ECMAScript 2015) and beyond, offers developers a spectrum of features and choices. Let's dive into the discussion of ES6 and "pure" JavaScript, weighing their advantages and considerations.
//
// ## ES6: The Modern JavaScript Marvel
//
// ES6 introduced a plethora of modern features:
// - **Readability Boost:** Syntactic sugar like arrow functions, template literals, and destructuring enhances code readability.
// - **Modularity Master:** ES6 modules (`import` and `export`) streamline code organization and import/export functionality.
// - **Functionality Upgrade:** Promises, classes, iterators, and generators simplify complex tasks and promote cleaner code structures.
//
// ## "Pure" JavaScript: The Compatibility Champion
//
// Older JavaScript versions have their perks too:
// - **Compatibility Priority:** ES5 ensures wider browser and environment support, crucial for compatibility across different platforms.
// - **Potential Performance Edge:** In some scenarios, handcrafted "pure" JavaScript may yield better performance due to more direct translation to machine code.
// - **Zero Dependencies:** Writing in pure JavaScript eliminates the need for transpilation and external dependencies, ensuring lightweight and self-contained code.
//
// ## Finding Harmony: Striking the Right Balance
//
// - **Project-Specific Needs:** Tailor your choice to the project's requirements, considering the target audience and expected environments.
// - **Development Speed:** Embrace modern JavaScript features to improve development speed, readability, and maintainability.
// - **Transpilation and Polyfills:** Use tools like Babel for transpilation and employ polyfills where needed to leverage modern syntax while maintaining broader compatibility.
//
// In conclusion, JavaScript's power lies in its adaptability. Balancing between ES6 advancements and the need for broad compatibility often involves leveraging modern features while ensuring compatibility through transpilation and polyfills. By doing so, developers can embrace the best of both worlds.

