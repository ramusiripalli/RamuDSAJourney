function mostFrequentElement(nums) {

    // Create a HashMap to store frequency
    let freqMap = new Map();

    // Count frequency of each element
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Variables to track answer
    let maxFreq = 0;
    let ans = Infinity;

    // Traverse the HashMap
    for (let [num, freq] of freqMap) {

        // If a higher frequency is found
        if (freq > maxFreq) {
            maxFreq = freq;
            ans = num;
        }

        // If frequency is same, choose smaller number
        else if (freq === maxFreq) {
            ans = Math.min(ans, num);
        }
    }

    return ans;
}

// Test Case
let nums = [4, 4, 5, 5, 6];

console.log(mostFrequentElement(nums));