package dk.dbc.jmimpl;
import dk.dbc.jm.*;
import com.google.gwt.core.client.EntryPoint;

public class JmImpl implements EntryPoint {
  public void onModuleLoad() {
    log(Hello.hello());
  }
  public native void log(String s) /*-{
    console.log(s);
    alert(s);
  }-*/;
}
