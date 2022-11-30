// Duplicating
const duplicateArray = [1, 2, 1, 3, 4, 5, 5, 2]; // index [0 !== 1, 1 !== 2, 2 !== 1, 3, 4, 5]; arr = values. index = 0,1, etc.. , (ele)= each ele value
const duplicates = duplicateArray.filter
((ele, index, arr) => arr.indexOf(ele) !== index)

console.log(duplicates);

const findDuplicates = (arr) => {
    let sorted_arr = arr.slice().sort();
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] !== sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    return results;
  }
  
  let duplicatedArray = [9, 9, 111, 2, 3, 4, 4, 5, 7];
  console.log(` ${findDuplicates(duplicatedArray)}`);


  // Switch case

// Set the student's grade
var grade = prompt("What grade did you get for the assessment?");

function studentGrade() {
    switch (grade) {
        // If score is 90 or greater
        case grade >= 90:
            givenGrade = "your grade is A+";
            break;
        // If score is 80 or greater
        case grade >= 80:
            givenGrade = "your grade is A";

            break;
        // If score is 70 or greater
        case grade >= 70:
            givenGrade = "your grade is B";

            break;
        // If score is 60 or greater
        case grade >= 60:
            givenGrade = "your grade is C";

            break;
        // Anything 59 or below is failing
        default:
            givenGrade = "you are failed";

    }
}
const Grade = studentGrade();
console.log(Grade)
