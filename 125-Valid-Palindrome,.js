/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    const raw = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const middle = Math.floor(raw.length / 2);
    var first = ''
    var second = ''
    if (raw.length % 2 == 0) {
        first = raw.substr(0, middle)
        second = raw.substr(middle).split('').reverse().join('')
    } else {
        first = raw.substr(0, middle)
        second = raw.substr(middle+1).split('').reverse().join('')
    }
    if (first == second) return true;
    return false                   
    
};