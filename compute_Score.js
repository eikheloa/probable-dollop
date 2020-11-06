
<script> 
function SAT_MTH_01_Score_Array(Answer_MTH_01_Array,Student_Answer_MTH_01_Array,Correct_Answers__Array)
{ 
    for(var i=0; i<Answer_MTH_01_Array.length; i++) 
		{ 
        flag = 0; 
        for(var j=0; j<Student_Answer_MTH_01_Array.length; j++)
			{ 
            if(Answer_MTH_01_Array[i] === Student_Answer_MTH_01_Array[j]) 
				{ 
                Student_Answer_MTH_01_Array.splice(j,1); 
                j--; 
                flag = 1; 
               } 
          } 
  
        if(flag == 0)
		 { 
            Correct_Answers__Array.push(Answer_MTH_01_Array[i]); 
         } 
    } 
    Correct_Answers__Array.push(Student_Answer_MTH_01_Array); 
    return Correct_Answers__Array; 
} 
  
var Answer_MTH_01_Array = [ "D", "A", "B", "C", "D" , "A", "C", "A", "A", "B" , 
                            "C", "D", "B", "C", "D" , 4, 1, 5, 2, 97 ,
                           	"D", "C", "A", "B", "C" , "B", "A", "C", "B", "A" , 
                            "A", "D", "D", "A", "A" , "D", "D", "C", "D", "B" ,
                            "A", "C", "D", "B", "D" , "B", "C", "C", "B", "B" ,
                             1492, 10, 7, 9, 13 , 80, 44, 6 ]; 
  
var Student_Answer_MTH_01_Array = [ "D", "A", "B", "C", "D" , "A", "C", "A", "A", "B" , 
                                    "C", "D", "B", "C", "D" , 4, 1, 5, 2, 97 ,
                                	"D", "C", "A", "B", "C" , "B", "A", "C", "B", "A" , 
                                    "A", "D", "D", "A", "A" , "D", "D", "C", "D", "B" ,
                                    "A", "C", "D", "B", "D" , "B", "C", "C", "B", "B" ,
                                    1492, 10, 7, 9, 13 , 80, 44, 6 ]; 
  
var Correct_Answers__Array = []; 

var CorrectAnswers = uniqueArray.length();

var SAT_Practice_Test_Score = Round(13.8 * CorrectAnswers);
  
console.log("Your Practice SAT Score is:"); 
console.log(SAT_Practice_Test_Score); 
</script> 
