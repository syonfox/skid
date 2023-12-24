//START SAFE64
// map base64 to a url save chars  https://stackoverflow.com/a/40415059
const bsCharMap = {
    '+': '-',
    '/': '_',
    '=': '', // note we can safly drop this if we dont care about preseving length
}; // this-sythem-will_gen~~ ;  00~~ 000~ or 0000 dependant on byte length

const sbCharMap = {
    "-": "="
    ,"_": "/"
}
//construct the regex so the code is defined in one place
const bsRegex = new RegExp(`[${Object.keys(bsCharMap).join()}]`, "g")
const sbRegex = new RegExp(`[${Object.keys(sbCharMap).join()}]`, "g")

function _btos(b64) {
    return  b64.replace(bsRegex, (match) => bsCharMap[match]); //replace postentialy unsafe / and + chars with - and _ frop traling padding
}
function _stob(s64) {
    let s = b64.replace(sbRegex, (match) => sbCharMap[match]); //revers the replace above
    while (s.length%4 !== 0) s += "="; // add the padding back in base 64 has blocks of 4 chars
    return s;
};
module.exports = {}