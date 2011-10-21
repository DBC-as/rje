package javax.microedition.lcdui;
import javax.microedition.midlet.MIDlet;

public abstract class Canvas {
    public int getHeight() {
        // TODO
        return 480;
    }
    public int getWidth() {
        // TODO
        return 320;
    }
    public void setFullScreenMode(boolean b) {
        return;
    }
    public abstract void paint(Graphics g);
}
