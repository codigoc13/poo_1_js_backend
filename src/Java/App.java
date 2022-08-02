// No crear 
// Este es un archivo para explicar la sobrecarga de métodos.
package Java;

import Java.demo.Demo;

public class App {
    public static void main(String[] args) {

        Demo demo1 = new Demo();
        System.out.println(demo1);

        Demo demo2 = new Demo("Alejandro");
        System.out.println(demo2);

        Demo demo3 = new Demo("Alejandro", "Ocampo");
        System.out.println(demo3);

    }
}
