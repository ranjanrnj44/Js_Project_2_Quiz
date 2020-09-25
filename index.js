//question bank as array of object
const questionBank = [
    {
      question: "Who invented JavaScript?",
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
      
        correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
        a: "Node.js",
        b: "TypeScript",
        c: "Json",
        d: "npm",
      
        correctAnswer: "d"
    },
    {
      question: "Which tool can you use to ensure code quality?",
        a: "Angular",
        b: "ESLint",
        c: "RequireJS",
        d: "jQuery",
     
        correctAnswer: "b"
    },
    {
      question: "Which year JavaScript introduced?",
        a: 1995,
        b: 1992,
        c: 1996,
        d: 1993,
     
        correctAnswer: "a"
    },
    {
      question: "What is CSS",
        a: "Cascading Super Sheet",
        b: "Cascading Style Sheet",
        c: "Cascading sheet",
        d: "Stylesheet",
     
        correctAnswer: "b"
    }
  ];

  // get reference of all the id's
  let question = document.getElementById("question_inside_stack");

  let answer_a = document.getElementById("a_answer");
  let answer_b = document.getElementById("b_answer");
  let answer_c = document.getElementById("c_answer");
  let answer_d = document.getElementById("d_answer");

  let btn = document.querySelector("button");

  let selected_element = document.querySelectorAll('input[name="answer"]');

  let score = 0; //set initially zero the user-score

  //increment and get the data's of each question and answer
  let increment_question = 0;

  let main_quiz = document.getElementById("quiz_main");

  //initially load the question - because of not showing our dummy template
  Load_after_click();

  function Load_after_click(){
  
    Uncheck_options();

    let question_bank_data = questionBank[increment_question];
    question.innerHTML = question_bank_data.question;

    answer_a.innerHTML = question_bank_data.a;
    answer_b.innerHTML = question_bank_data.b;
    answer_c.innerHTML = question_bank_data.c;
    answer_d.innerHTML = question_bank_data.d;
  }

  //check weather options are selected or not, initially it should be not selected
  function Check_option(){
    // let selected_element = document.querySelectorAll('input[name="answer"]');
    // let selected;
    // selected_element.forEach((element) => {
    //   if(element.checked){
    //     selected = element.value;
    //   }
    // });
    // console.log(selected);
    let answer_selected = undefined;
    selected_element.forEach(element => {
      if(element.checked){
        answer_selected = element.id;
      }
    });
    //console.log(answer_selected);
    return answer_selected;
  }

  //deselect everything initially, pass it to the initiall function above
  function Uncheck_options(){
    selected_element.forEach(element => {
      element.checked = false;
    })
  } 

  //add event on click of button, once we got last question clicked we need a notification
  btn.addEventListener("click" , () => {
  
      let get_selected_answer = Check_option();
      //console.log(get_selected_answer);
      
      if(get_selected_answer){
        if(get_selected_answer === questionBank[increment_question].correctAnswer){
          score++;
          //console.log(get_selected_answer);
        }
      
      increment_question++; // increment once clicked button

      if(increment_question < questionBank.length){
        Load_after_click();
      }
      else{
        main_quiz.innerHTML = `<h2>quiz completed mate, Your score : ${score} / ${questionBank.length}</h2>
                               <button type="button" class="submit_button" onclick = location.reload()>Reload Quiz</button>`;
        // main_quiz.style.padding = "5px";     // gave this in css file
      }
    }

    });