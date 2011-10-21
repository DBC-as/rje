package dk.dbc.samplemidlet;
import javax.microedition.lcdui.Canvas;
import javax.microedition.lcdui.Graphics;
import javax.microedition.lcdui.Display;
import javax.microedition.midlet.MIDlet;

class Screen extends Canvas {
    public Screen() {
    }
    public void paint(Graphics g) {
        g.setColor(0xff0000);
        g.fillRect(0,0,getWidth(), getHeight());
    }
}

public class GwtSampleMidlet extends MIDlet {

    public void startApp() {
        Screen screen = new Screen();
        Display.getDisplay(this).setCurrent(screen);
        screen.setFullScreenMode(true);
    }

    public void pauseApp() {
    }

    public void destroyApp(boolean unconditional) {
    }
}
