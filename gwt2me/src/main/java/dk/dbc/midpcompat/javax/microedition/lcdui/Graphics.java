package javax.microedition.lcdui;
import javax.microedition.midlet.MIDlet;
import com.google.gwt.dom.client.CanvasElement;
import com.google.gwt.canvas.dom.client.Context2d;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArrayString;


public class Graphics {

    public static final int HCENTER = 1;
    public static final int VCENTER = 2;
    public static final int LEFT = 4;
    public static final int RIGHT = 8;
    public static final int TOP = 16;
    public static final int BOTTOM = 32;
    public static final int BASELINE = 64;
    int textpos = -1;

    Context2d ctx;
    JsArrayString strgen;
    private static final String hexSymbs[] = {"0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"};
    public Graphics(CanvasElement canvas) {
        ctx = canvas.getContext2d();
        strgen = (JsArrayString)JavaScriptObject.createArray();
        strgen.set(0, "#");
    }
    public void setColor(int color) {
        String csscolor = "";
        for(int i=6;i>0;--i) {
            strgen.set(i, hexSymbs[color&15]);
            color >>= 4;
        }
        ctx.setFillStyle(strgen.join(""));
    }
    public void fillRect(int x, int y, int w, int h) {
        ctx.fillRect(x,y,w,h);
    }
    public void drawString(String str, int x, int y, int anchor) {
        if(textpos != anchor) {
            int vpos = anchor & (BASELINE | BOTTOM | TOP | HCENTER);
            switch(vpos) {
                case BASELINE:
                    ctx.setTextBaseline(com.google.gwt.canvas.dom.client.Context2d.TextBaseline.ALPHABETIC);
                    break;
                case BOTTOM:
                    ctx.setTextBaseline(com.google.gwt.canvas.dom.client.Context2d.TextBaseline.BOTTOM);
                    break;
                case TOP:
                    ctx.setTextBaseline(com.google.gwt.canvas.dom.client.Context2d.TextBaseline.TOP);
                    break;
                case VCENTER:
                    ctx.setTextBaseline(com.google.gwt.canvas.dom.client.Context2d.TextBaseline.MIDDLE);
                    break;
                default:
                    throw new Error("wrong vpos: " + vpos);
            }
            int hpos = anchor & (LEFT | RIGHT | VCENTER);
            switch(hpos) {
                case LEFT:
                    ctx.setTextAlign(com.google.gwt.canvas.dom.client.Context2d.TextAlign.LEFT);
                    break;
                case RIGHT:
                    ctx.setTextAlign(com.google.gwt.canvas.dom.client.Context2d.TextAlign.RIGHT);
                    break;
                case HCENTER:
                    ctx.setTextAlign(com.google.gwt.canvas.dom.client.Context2d.TextAlign.CENTER);
                    break;
                default:
                    throw new Error("wrong hpos: " + hpos);
            }
            textpos = anchor;
        }
        ctx.fillText(str, x, y);
    }

}
