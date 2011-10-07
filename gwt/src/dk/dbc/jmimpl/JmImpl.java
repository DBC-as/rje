package dk.dbc.jmimpl;
import dk.dbc.jm.*;
import com.google.gwt.core.client.EntryPoint;

public class JmImpl implements EntryPoint {
  Jm jm;
  JmScreen screen;
  public void onModuleLoad() {
    jm = new Jm(this);
    screen = new JmScreen();
    screen.paint();
    jm.init(); jm.start();
  }
  public native void log(String s) /*-{
    console.log(s);
  }-*/;
}
