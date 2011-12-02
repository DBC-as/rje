package javax.microedition.lcdui;
import javax.microedition.midlet.MIDlet;
import com.google.gwt.dom.client.CanvasElement;


public abstract class Canvas {
    Graphics g;
    CanvasElement canvas;
    public int getHeight() {
        return canvas.getHeight();
    }
    public int getWidth() {
        return canvas.getWidth();
    }
    public void setFullScreenMode(boolean b) {
        return;
    }
    public void setActive(CanvasElement canvas) {
        this.canvas = canvas;
        g = new Graphics(canvas);
        paint(g);
    }
    public abstract void paint(Graphics g);
}
