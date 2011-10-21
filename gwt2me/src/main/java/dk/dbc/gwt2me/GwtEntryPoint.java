package dk.dbc.gwt2me;
import dk.dbc.gwt2me.*;
import java.blah.Blah;
import com.google.gwt.core.client.EntryPoint;

public class GwtEntryPoint implements EntryPoint {
  JmScreenGraphics screen;
  public void onModuleLoad() {
    Blah.blah("foobar");
    screen = new JmScreenGraphics();
    screen.paint();

  }
}
