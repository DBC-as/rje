package dk.dbc.jmimpl;
import dk.dbc.jm.*;
import com.google.gwt.core.client.EntryPoint;

public class JmImpl implements EntryPoint {
  JmScreenGraphics screen;
  Jmlet jmlet;
  public void onModuleLoad() {
    screen = new JmScreenGraphics();
    screen.paint();
    jmlet = Jm.getJmlet(this);
    jmlet.init(); jmlet.start();
    jmlet.paint(screen);
  }
  public native void log(String s) /*-{
    console.log(s);
  }-*/;
}
