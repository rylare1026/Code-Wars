function findNeedle(haystack) {
  
  
  
  
    return `found the needle at position ${haystack.findIndex(thing => 'needle'=== thing)}`;
  }
  
  // P - takes in an arry, of unlimited length
  // R - find 'needle', and return "found the needle at position __"
  // E - findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
  //     should return "found the needle at position 5" (in COBOL "found the needle at position 6")
  // P - sort through array looking for Needle ( Filter()? then return the index value with 
  //      proper verbage  )
  

//   Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

