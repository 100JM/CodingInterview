class Solution {
    public boolean solution(int x) {
        
        String[] s = Integer.toString(x).split("");
        
        int y = 0;
        
        for(int i=0; i<s.length; i++){
            y = y + (Integer.parseInt(s[i]));
        }
        
        boolean answer = true;
        
        if(x%y != 0){
            answer = false;
        }
        
        return answer;
    }
}