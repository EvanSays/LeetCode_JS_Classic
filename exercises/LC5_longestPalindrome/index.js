//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("aba") --> "aba"
// longestPalindrome("a") --> "a"

// insideOut?
// needs to handle even and odd palindromes

// loop through the string
// on each letter, call a function that compares letters
// the function will take three args, leftIdx, rightIdx, and s
// it will move outword, comparing letters, when letters dont match, it will return the left right indexes
// return the string

function insideOut(left, right, s) {
    while(s[left] && s[left] === s[right]) {
        left--;
        right++;
    }
    return [left + 1, right]
}

function longestPalindrome(s) {
    let longest = [0,0]
    for(let i = 0; i < s.length; i++) {
        // abba
        const even = insideOut(i - 1, i, s)
        // aba
        const odd = insideOut(i - 1, i + 1, s)

        const isLongest = even[1] - even[0] > odd[1] - odd[0] ? even : odd;
        longest = isLongest[1] - isLongest[0] > longest[1] - longest[0] ? isLongest : longest
    }
    console.log(longest)
    return s.slice(longest[0], longest[1])
}

module.exports = longestPalindrome;
