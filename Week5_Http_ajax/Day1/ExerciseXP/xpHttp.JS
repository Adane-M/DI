// Exercise 1 : HTML Form
// Instructions
// Hint : Read about sending form data using the HTTP protocol

// Create a form like the one above. The form should contain three inputs:
// a small text input asking for a name,
// a larger textarea input to write a message,
// a submit input (“Send”)

// When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)
// Where will the sent data appear?

//ANS   it will be at the URL adress as query and also at the NETWORK section in the devtool, used to retrive data.

// Exercise 2 : HTML Form #2
// Instructions
// Use the same form structure as Exercise 1.
// When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
// Where will the sent data appear? Hint : Look at the Network Tab

//ANS on NETWORK section in the DevTool., send the data to the server
//& create/Update a resource ....but in my case it gave me  an error 405


//Exercise 3 : JSON Mario

let marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  };
// debugger
  let JsonGame = JSON.stringify(marioGame);
  console.log('JsonGame:',JsonGame);
  
//   Convert this JS object into a JSON object. What happens to the nested objects ?
//ANS it turns into a string.
// debugger
//   Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
const JsonObj = JSON.parse(JsonGame);
console.log('JsonObj:',JsonObj);
//   Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.

























// class EX
let jsonString = `
{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    10,
                    11,
                    12,
                    13
                ],
                "answer": 12
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    1,
                    2,
                    3,
                    4
                ],
                "answer": 4
            }
        }
    }
}`

const ans = JSON.parse(jsonString);

let ans1 = ans['quiz']['sport']['q1']['options'][3];
let ans2 = ans['quiz']['maths']['q1']['options'][2];
let ans3 = ans['quiz']['maths']['q2']['options'][3];
console.log(ans1);
console.log(ans2);
console.log(ans3);