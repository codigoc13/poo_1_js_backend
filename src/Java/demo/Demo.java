// No crear 
// Este es un archivo para explicar la sobrecarga de métodos.
package Java.demo;

public class Demo {

    private String nombre;

    private String apellido;

    public Demo() {
    }

    public Demo(String nombre) {
        this.nombre = nombre;
    }

    public Demo(String nombre, String apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    // Getters y Stters
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    @Override
    public String toString() {
        return nombre + " " + apellido;
    }

}
