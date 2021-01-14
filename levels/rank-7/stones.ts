// There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B.

// Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colours.

// Examples:

// "RGBRGBRGGB"   => 1
// "RGGRGBBRGRR"  => 3
// "RRRRGGGGBBBB" => 9


function stones(stones) {
    // count duplicated stone without first stone; RGBBRGB = 1
    let arr = stones.split("");
    let temp = arr[arr.length - 1]
    let index = arr.length - 1;
    let count = 0;
    while (index > 0) {
      if ( temp === arr[index -1] ) {
          count ++
      } else {
               temp = arr[index -1];   
      }
           index--
    }
    return count
}