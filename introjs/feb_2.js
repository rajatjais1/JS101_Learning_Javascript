let small=["a","b","c","d"]
let big=["A","B","C","D"]
let char="c"
for (let i =0;i<small.length;i++){
  if(small[i]==char){
    char=big[i]
  }
  
}
console.log(char)