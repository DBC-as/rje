package dk.dbc.jmimpl;
import dk.dbc.jm.*;
import javax.microedition.midlet.MIDlet;
import javax.microedition.midlet.MIDletStateChangeException;

public class JmImpl extends MIDlet {
    private Jm jm;
    boolean initialised = false;

    public void log(String s) {
        System.out.println(s);
    }

    public void startApp() throws MIDletStateChangeException {
        if(!initialised) {
            jm = new Jm(this);
            jm.init();
        }
        jm.start();
    }

    public void pauseApp() {
        jm.stop();
    }

    public void destroyApp(boolean unconditional) throws MIDletStateChangeException {
    }
}
