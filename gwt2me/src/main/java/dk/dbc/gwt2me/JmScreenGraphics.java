package dk.dbc.gwt2me;
import dk.dbc.gwt2me.*;

class JmScreenGraphics extends JmGraphics{
    public JmScreenGraphics() { this.init(); }
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
        $wnd.Jm2d.font = "14px Droid Sans";

    }-*/;

    public native void paint() /*-{
        var Jm2d = $wnd.Jm2d;
        var JmCanvas = $wnd.JmCanvas;
        Jm2d.fillStyle = "rgb(255,0,0)";  
        Jm2d.fillRect(0, 0, JmCanvas.width, JmCanvas.height); 
    }-*/;
    public native void setColor(int rgb) /*-{
        console.log("setColor", rgb);
        function toHexColor(n, count) {
            if(count > 0) {
                return toHexColor(n>>4, count -1) + "0123456789abcdef"[n&15];
            } else {
                return "#";
            }
        }
        $wnd.Jm2d.fillStyle = toHexColor(rgb, 6);
        console.log(toHexColor(rgb, 6));
    }-*/;
    public native void fillRect(int x, int y, int width, int height) /*-{
        $wnd.Jm2d.fillRect(x,y,width,height);
    }-*/;
    public native void drawString(String text, int x, int y) /*-{
        $wnd.Jm2d.fillText(text, x, y);
    }-*/;
    public native int textWidth(String s) /*-{
        console.log(s);
        return $wnd.Jm2d.measureText(s).width;
    }-*/;
    public native int textHeight() /*-{
        return 14;
    }-*/;
    public native int getWidth() /*-{
        return $wnd.JmCanvas.width;
    }-*/;
    public native int getHeight() /*-{
        return $wnd.JmCanvas.height;
    }-*/;
}
