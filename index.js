//some of all even numbers in the array

var marks = [10,19,10,3,5,10];
var sum = 0;
for(i=0; i<=marks.length; i++){
    if(marks[i]%2==0){
        sum = sum + marks[i];
    }
}
console.log(sum);