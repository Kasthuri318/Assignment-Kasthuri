public class PangramCheck {

    public static boolean isPangram(String input) {
        String lowerCaseInput = input.toLowerCase();
        boolean[] alphabetPresent = new boolean[26];
        for (int i = 0; i < lowerCaseInput.length(); i++) {
            char c = lowerCaseInput.charAt(i);
            if ('a' <= c && c <= 'z') {
                int index = c - 'a';
                alphabetPresent[index] = true;
            }
        }
        for (boolean letterPresent : alphabetPresent) {
            if (!letterPresent) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        String input = "Sundar Pichai had warned about bad optics of apple search partnership";
        boolean isPangram = isPangram(input);
        System.out.println("Is the input a pangram? " + isPangram);
    }
}
