//jquery + ajax
/**
 
1) create this : 

+--------------------
| input type text (no id , no class , no nothing)
|   +--------------------
|   |  button (class | id = btn1)
|   |
|   |
|   |
|   |


when clicking on btn1 (jquery on), it should go to jsonplaceholder's site with value of : https://jsonplaceholder.typicode.com/posts/1 via $.ajax/fetch
after receiving the json response , put the value of "title" property in the input. ( reminder : input has no id nor class)
after putting the value , wait 2 seconds , fade out all the elements 
btn1 should be working only once. meaning : if you click again , nothing should happen.

bonus : add another button ( which has id|class) , which when clicked , btn1 can be clicked again.



//promises  : 

create 3 text inputs
each text input should be randomly get value between 1-10 ( when page loads)
you should create 1 promise for each input , that "sleeps/delay " according to the number , and after sleeping , resolving the number
once all promises are resolved , you should `alert(sumOfAllValuesFromPromises)`





 * **/
