function isAnagram(str1, str2) {
    let ans = false;
    if(str1.length != str2.length) ans = false;
    if(str1.length == str2.length){
        for(var i = 0; i < str1.length;i++){
            for(var j=0;j<str1.length;j++){
                if(str1.charAt(i) == str2.charAt(j)) break;
            }
        }
    }
}
