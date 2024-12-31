## Terminal is nothing but another interface for you to work on your computer like any OS do. 
like open file , rename a file , manipulate data of a file , 
### 1. pwd -  present working directory 
1. pwd - path to the current working directory.
### 2. cd - changes  directory
1 cd name_0f_directory - change directory , move on directory to another , within the current working 
directory.
2. cd.. - change directory , change path to the directory outside of the current working directory
closest parent of the current working directory.
3. cd - +tab let you auto complete the name of the directory. If you are accessing the directory in right order.
4. cd ../.. - take you out from the current working directory by two steps.
   
### 3. ls - list down directories
1. ls - list down of  the directory within the current working directory.

### 4. mkdir - make new directory.
1. mkdir name_0f_directory - make new directory in the current folder.

### 5. touch - create file inside the current working directory
1. test name_0f_file - create file inside the current working directory.

``` terminal 
 name_of_folder touch index.js
```
### 6. open file in the current working directory.
1. notepad nameoffile - reach to the file open in notepad
2. code nameoffile - reach to the file open in code platform

### 7. cat - print contents of the current working file
``` terminal
cat bash.md
cat WEEK2/bash.md
```
   
### 8.  vi - manipulate the current working directory.
vi nameoffile - let you enter the file 
press i - makes you insert data in file as you want it to 
press esc + :q! - let you stop the insertion process  , without saving the changes and make you step out of the 
file.
press esc + :wq! - let you stop the insertion process , save the changes and make you step out of the  file.


### 9. mv - move 
mv file1 folder - move file1 to folder
mv folder1 folder2 - move folder1 to folder2
mv file2 folder1/folder2/folder3 - move file2 to folder3 which is inside folder2 which is inside folder1.

### cp - copy

cp file folder1 - copy file from current folder to folder1.
cp -r folder1 folder2 - copy folder1 to folder2 / need flag "-r" 


### node - create a javascript environment
``` terminal
node
a=2
console.log(a);
```

ctrl +c to exit the environment.

1. node filename - run the js file
``` terminal
node text.js
```

### npm - node package manager 
``` terminal 
npm install lib1
npm i array
npm i express
``` terminal

npm install  respective libraries  as developer needed.