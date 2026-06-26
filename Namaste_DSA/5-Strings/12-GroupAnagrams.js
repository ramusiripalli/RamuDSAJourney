function bruteGroupAnagrams(strs) {
    
    // Create a Map to store grouped anagrams
    // Key   -> sorted version of word ("eat" -> "aet")
    // Value -> array of original words that match that sorted pattern
    const map = new Map();

    // Loop through each word in input array
    for (let str of strs) {
        
        // Convert string into array of characters
        // Sort characters alphabetically
        // Join back into a string
        // Example: "tea" -> ["t","e","a"] -> ["a","e","t"] -> "aet"
        let sortedStr = str.split('').sort().join('');

        // If this sorted key is not present in map,
        // create a new empty array for storing words
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }

        // Get the array corresponding to sorted key
        // Push original word into that array
        // Example:
        // map.get("aet") -> ["eat"]
        // after push -> ["eat","tea"]
        map.get(sortedStr).push(str);
    }

    // map.values() gives all grouped arrays
    // Spread operator (...) converts iterator into normal array
    // Final output:
    // [
    //   ["eat","tea","ate"],
    //   ["tan","nat"],
    //   ["bat"]
    // ]
    return [...map.values()];
}


// Input array
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// Call function and print result
console.log(bruteGroupAnagrams(strs));