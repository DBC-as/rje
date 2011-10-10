package dk.dbc.jmimpl;
import dk.dbc.jm.*;
import com.google.gwt.core.client.EntryPoint;

public class JmImpl implements EntryPoint {
  JmScreen screen;
  Jmlet jmlet;
  public void onModuleLoad() {
    screen = new JmScreen();
    screen.paint();
    jmlet = Jm.getJmlet(this);
    jmlet.init(); jmlet.start();
  }
  public native void log(String s) /*-{
    console.log(s);
  }-*/;
}
