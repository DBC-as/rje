package dk.dbc.jmimpl;
import dk.dbc.jm.*;
import com.google.gwt.core.client.EntryPoint;

class JmScreen {
    public JmScreen() { this.init(); }
    private native void init() /*-{
        var JmCanvas = $doc.createElement("canvas");
        JmCanvas.style.position = "fixed";
        JmCanvas.style.top = "0px";
        JmCanvas.style.left = "0px";
        $doc.body.appendChild(JmCanvas);

        $wnd.JmCanvas = JmCanvas;
        $wnd.Jm2d = JmCanvas.getContext("2d");
        JmCanvas.width = $wnd.innerWidth;
        JmCanvas.height = $wnd.innerHeight;
    }-*/;
    public native void paint() /*-{
        var Jm2d = $wnd.Jm2d;
        var JmCanvas = $wnd.JmCanvas;
        Jm2d.fillStyle = "rgb(255,0,0)";  
        Jm2d.fillRect(0, 0, JmCanvas.width, JmCanvas.height); 
    }-*/;
}

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
