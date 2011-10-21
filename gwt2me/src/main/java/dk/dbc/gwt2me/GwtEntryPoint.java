package dk.dbc.gwt2me;
import dk.dbc.gwt2me.*;
import java.blah.Blah;
import com.google.gwt.core.client.EntryPoint;

public class GwtEntryPoint implements EntryPoint {
  JmScreenGraphics screen;
  Jmlet jmlet;
  public void onModuleLoad() {
    Blah.blah("foobar");
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
