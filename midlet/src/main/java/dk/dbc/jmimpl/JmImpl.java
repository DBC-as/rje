package dk.dbc.jmimpl;
import dk.dbc.jm.*;
import javax.microedition.lcdui.Canvas;
import javax.microedition.lcdui.Graphics;
import javax.microedition.lcdui.Display;
import javax.microedition.midlet.MIDlet;
import javax.microedition.midlet.MIDletStateChangeException;

class JmScreen extends Canvas {
    public JmScreen() {
        super();
    }
    public void paint(Graphics g) {
        g.setColor(0xff0000);
        g.fillRect(0,0,getWidth(), getHeight());
    }
}

public class JmImpl extends MIDlet {
    boolean initialised = false;
    JmScreen screen;

    public void log(String s) {
        System.out.println(s);
    }
    Jmlet jmlet;

    public void startApp() throws MIDletStateChangeException {
        if(!initialised) {
            jmlet = Jm.getJmlet(this);
            screen = new JmScreen();
            jmlet.init();
        }
        Display.getDisplay(this).setCurrent(screen);
        screen.setFullScreenMode(true);
        jmlet.start();
    }

    public void pauseApp() {
        jmlet.stop();
    }

    public void destroyApp(boolean unconditional) throws MIDletStateChangeException {
    }
}
