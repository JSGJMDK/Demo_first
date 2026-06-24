package firstproject;
import java.util.*;

public class SalaryBonus {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter The Salary");
        int salary = input.nextInt();
        if (salary > 10000)
        {
        	System.out.println(salary + 2000);
        }
        else
        {
        	System.out.println(salary + 1000);
        }
    }
}
