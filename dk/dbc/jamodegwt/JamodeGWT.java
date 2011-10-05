package dk.dbc.jamodegwt;
import dk.dbc.jamode.*;
import com.google.gwt.core.client.EntryPoint;

public class JamodeGWT implements EntryPoint {
  public void onModuleLoad() {
    log(JamodeFactory.hello());
  }
  public native void log(String s) /*-{
    console.log(s);
    alert(s);
  }-*/;
}
