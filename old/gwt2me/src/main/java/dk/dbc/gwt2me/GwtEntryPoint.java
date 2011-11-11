package dk.dbc.gwt2me;
import dk.dbc.samplemidlet.GwtSampleMidlet;
import com.google.gwt.core.client.EntryPoint;

public class GwtEntryPoint implements EntryPoint {
  public void onModuleLoad() {
    GwtSampleMidlet midlet = new GwtSampleMidlet();
    midlet.startApp();
  }
}
