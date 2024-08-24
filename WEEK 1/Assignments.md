## ASSIGNMENTS:
### WEEK 1.1
1. Create a counter in js count down from 30 to 0:
```javascript
function counter(value){
    let count=0;
    for(let i =30 ; i>=0 ;i--){
        count+=i;
    }
    return count;
}
console.log(counter(30))
```
2. Calculate the time it takes between a `setTimeOut()` call and the inner function actually running:
```javascript
let time1 = new Date();
console.log(time1.toLocaleTimeString())
function timePrint (){
    let time2 = new Date();
    console.log(time2.toLocaleTimeString())

    // Time difference in milliseconds
    let timeDifference = time2 - time1; 
    console.log(`Time difference: ${timeDifference} milliseconds`);
}
setTimeout(timePrint , 5000)
```
3. Create a terminal clock:
```javascript
setInterval(() => {
    let time = new Date();
    process.stdout.write(`\r${time.toLocaleTimeString()}`);
}, 1000);
```

4. Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
```javascript
 // What's Anagram? - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
function isAnagram(str1, str2) {
    
}

```


### WEEK 1.2

