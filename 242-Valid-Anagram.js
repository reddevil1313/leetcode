/*
Learning:
Sorting first is often faster when comparing two arrays.
*/

// Best Solution
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    return s.split('').sort().join('') == t.split('').sort().join('')
}

// Solution 1
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length != t.length) return false
    
    var s_arr = s.split('')
    var t_arr = t.split('')
    
    for (let i = 0; i < s_arrlength; i++) {
        var index = t_arr.indexOf(s[i])
        if (index == -1 ) return false;
        t_arr.splice(index, 1);
    }
    
    if (t_arr.length == 0) return true;
    
    return false;
};

// Solution 2
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length != t.length) return false
    
    for (let i = 0; i < s.length; i++) {
        t = t.replace(s[i],'')
    }
    
    if (t.length == 0) return true;
    
    return false;
};

// Solution 3
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    let map = {};
    
    if (s.length !== t.length) {
        return false;
    }
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }
    
    for (let i = 0;  i < t.length; i++) {
        if (map[t[i]]) {
            map[t[i]]--;
        } else {
            return false;
        }
    }
    
    return true;
};