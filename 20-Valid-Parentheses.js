/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if (s.length % 2 == 1) return false;
    
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        switch(s[i]){
            case '{':
                stack.push('{')
                break;
            case '[':
                stack.push('[')
                break;
            case '(':
                stack.push('(')
                break;
             case '}':
                var val = stack.pop()
                if (val != '{') return false;
                break;
            case ']':
                var val = stack.pop()
                if (val != '[') return false;
                break;
            case ')':
                var val = stack.pop()
                if (val != '(') return false;
                break;
            default:
                return false;
        }        
    }
    return stack.length == 0;
};