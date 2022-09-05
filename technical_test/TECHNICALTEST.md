# technical test

Technical test answers

## Exercise 1

#### HTTP verbs

**GET** This verb is used when we want to consult a resource, it allows us to obtain information from an API or directly from the backend. Its main feature is that it does not cause side effects on the server. They must not produce new records, nor modify existing ones.

**POST** It is only used to create new resources; it is responsible for saving information in a Rest or backend API. The POST action is usually directed at a resource that represents a collection to indicate that the new resource should be added to that collection.

**PUT** It is used when you want to completely replace an existing resource with a new one.

**PATCH** It is used when you want to update some elements of a resource without completely replacing it.

**DELETE** It is used to delete records, such as individual records or an entire collection of resources.

The correct way to use HTTP verbs in a Rest API is to create methods that will be queried by the HTTP verb pointing to the URL that executes the method, this allows the request to be processed correctly within the Rest API.

## Exercise 2

The program receives an array of integers, a number of rows, and a number of columns, then initializes a variable of type int to iterate through the array positions, and initializes a two-dimensional integer array with the number of rows and columns passed to the array. function. Next, a nested loop is created that will iterate through the rows and columns passed by parameter and build the two-dimensional array, adding to the two-dimensional array the values of the array passed by parameter.

The function receives a one-dimensional array, a number of rows and a number of columns and returns a two-dimensional array with the received array data and the number of rows and columns passed by parameter

## Exercise 3

**A.** Create an entity relationship diagram to describe the query. e the query. It should include entities, its relati It should include entities, its relationships, onships, primary keys, and data ty  primary keys, and data types.

**B.** What is the result if we change all relations to LEFT JOIN instead of INNER JOIN?

Changing the inner join to the left join would fetch the data that matches the query with its field and would also fetch all the data from the T_TSERVICE_REQUEST table that doesn't match the query, but it'll get it as NULL fields.

**C.** In your own words, what is the operation performed by the function F_FUNC?

F_FUNC is a function that calculates the difference in business days between two days passed to the function, it subtracts the days of the weekend. In addition, it evaluates if the start or end day corresponds to a day of the weekend to subtract them from the final result

#### please go to the directory exercise_3 where you will find the complete answer to the exercise

## Exercise 4

```javascript
const magicSquare = (n) => {

  let square = Array(n).fill().map(() => Array(n).fill(0));
  let row = 0;
  let col = Math.floor(n / 2);
  let num = 1;

  while (num <= n * n) {
    square[row][col] = num;
    num++;
    let nextRow = row - 1;
    let nextCol = col + 1;
    if (nextRow < 0) {
      nextRow = n - 1;
    }
    if (nextCol > n - 1) {
      nextCol = 0;
    }
    if (square[nextRow][nextCol] !== 0) {
      col++;
    } else {
      row = nextRow;
      col = nextCol;
    } 
    
  }
  return square;
}

console.log(magicSquare(5));
```

#### please go to the directory exercise_4 where you will find the complete answer to the exercise

## Exercise 5

#### please go to the directory exercise_5 where you will find the complete answer to the exercise
