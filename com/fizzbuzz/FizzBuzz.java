package com.fizzbuzz;

import java.util.ArrayList;
import java.util.List;

public class FizzBuzz {

    public List<String> fizzBuzz(int n) {

        //initiating a list ans
        List<String> ans= new ArrayList<String>();

        for (int num=1;num<=n;num++){

            if (num%3==0 && num%5==0){
                ans.add("FizzBuzz");
            } else if (num%3==0){
                ans.add("Fizz");
            } else if (num%5==0){
                ans.add("Buzz");
            } else {
                ans.add(Integer.toString(num));
            }
        }

        return ans;
    }

    public static void main(String[] args) {
        // write your code here
        FizzBuzz myObj = new FizzBuzz(); // Create an object of Main
        System.out.println(myObj.fizzBuzz(100));

    }

}