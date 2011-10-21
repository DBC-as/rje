package javax.microedition.lcdui;
import javax.microedition.midlet.MIDlet;

public class Display {
    static Display disp;
    Display() {
    }
    public static Display getDisplay(MIDlet m) {
        if(disp == null) {
            disp = new Display();
        }
        return disp;
    }
    public static void setCurrent(Canvas c) {
        // TODO
    }
}
