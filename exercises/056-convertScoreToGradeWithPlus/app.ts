function convertScoreToGradeWithPlusAndMinus(score: number): string {
  if(score<0 || score>100) return "INVALID SCORE"; if(score<60) return "F"; const grade=score>=90?"A":score>=80?"B":score>=70?"C":"D"; if(score===100) return "A+"; const digit=score%10; return grade+(digit<=2?"-":digit>=8?"+":"");
}

export {};
