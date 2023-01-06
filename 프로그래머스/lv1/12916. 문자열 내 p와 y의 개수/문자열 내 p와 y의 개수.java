class Solution {
    boolean solution(String s) {
        boolean answer = true;
        
        String [] strAry = s.toLowerCase().split("");
        
        int pCnt = 0;
        int yCnt = 0;
        
        for(int i=0; i<s.length(); i++) {
            
            if(strAry[i].equals("p")) {
                pCnt++;
            }else if(strAry[i].equals("y")){
                yCnt++;
            }
        }
        
        if((pCnt == yCnt) || (pCnt == 0 && yCnt == 0)){
            answer = true;
        }else {
            answer = false;
        }
        
        return answer;
    }
}