function game() {

    let score = 0;
    let missing_word_1 = "wool";
    let question_1 = (prompt("baba black sheep have you any _______ ?"));
    if (question_1 == missing_word_1) {
    window.alert("you are right");
    score = score+2;
    }
    else{
    window.alert("you are wrong");
    score= score-1;
    }
    
    let missing_word_2 = "little";
    let question_2 = (prompt("twinkle twinkel _______ star ?"));
    if(question_2 == missing_word_2) {
    window.alert("you are right");
    score= score+2;
    }
    else{
    window.alert("you are wrong");
    score= score-1;
    }
    
    
    let missing_word_3 = "papa";
    let question_3 = (prompt("Jhony Jhony yes _______ ?"));
    if (missing_word_3 == question_3) {
    window.alert("you are right");
    score= score+2;
    }
    else{
    window.alert("you are wrong");
    score= score-1;
    }
     
    let missing_word_4 = "4";
    let question_4 = (prompt("what is 2+2"));
    if (missing_word_4 == question_4) {
    window.alert("you are right");
    score= score+2;
    }
    else{
    window.alert("you are right");;
    score= score-1;
    }
    
    let missing_word_5 = "100";
    let question_5 = (prompt("what is 10*10"));
    if (missing_word_5 == question_5) {
    window.alert("you are right");
    score= score+2;
    }
    else{
    window.alert("you are right");;
    score= score-1;
    }
    
    let missing_word_6 = "16";
    let question_6 = (prompt("what is the square of 4"));
    if (missing_word_6 == question_6) {
    window.alert("you are right");
    score= score+2;
    }else{
    window.alert("you are right");
    score= score-1;
    }
    
    let missing_word_7 = "narendra modi" || "narendra damodar das modi" || "mr narendra modi";
    let question_7 = (prompt("who is th pm of india"));
    if (missing_word_7 == question_7) {
    window.alert("you are right");
    score= score+2;
    }
    else{
    window.alert("you are right");;
    score= score-1;
    }
    
    if (score<=0){
     window.alert("offs, you lose!");
    }else if (score>=10){
    window.alert("hurrah, you won the game!");
    }
    
    window.alert("your score is " + score);
    
    }