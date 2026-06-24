package firstproject;

import java.util.Scanner;

public class A {

	public static void main(String[] args) {
		System.out.println("Hello, How are you");
		
		// 1. Create the scanner
		Scanner input = new Scanner(System.in);
		
		// 2. Use the scanner to read a line of text
		String response = input.nextLine();
		System.out.println("You said: " + response);
		
		// 3. Close the scanner to prevent memory leaks
		input.close();
	}
}
