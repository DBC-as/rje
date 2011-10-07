package dk.dbc.jmimpl;
import dk.dbc.jm.*;

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
