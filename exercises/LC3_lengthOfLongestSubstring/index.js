// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"


// sliding window?
// left and right pointer
// while loop, left starts at 0 and right starts at 0 index
// check if Right does not exist in set
// if not in set, add to set, grab length and update LONGEST length
// if exists, remove the right pointer letter from set
// then move left pointer to next index.

function lengthOfLongestSubstring(s) {
    const set = new Set();
    let longest = 0;
    let left = 0;
    let right = 0;

    while(right < s.length) {
        if(!set.has(s[right])) {
            set.add(s[right])
            console.log(set)
            longest = set.size > longest ? set.size : longest
            right++
        } else {
            set.delete(s[left])
            left++
        }
    }
    return longest
}

module.exports = lengthOfLongestSubstring;
