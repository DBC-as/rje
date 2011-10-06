package dk.dbc.jmimpl;
import dk.dbc.jm.*;
import com.google.gwt.core.client.EntryPoint;

public class JmImpl implements EntryPoint {
  Jm jm;
  public void onModuleLoad() {
    jm = new Jm(this);
    jm.init(); jm.start();
  }
  public native void log(String s) /*-{
    console.log(s);
  }-*/;
}
