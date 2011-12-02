package dk.dbc.jmimpl;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import dk.dbc.jm.*;

class JmScreenGraphics extends JmGraphics {
    Canvas g;
    Paint p;
    public JmScreenGraphics() {
        p = new Paint();
        p.setAntiAlias(true);
    }
    void setGraphics(Canvas g) {
        this.g = g;
    }
    public void setColor(int rgb) {
        p.setColor(0xff000000 | rgb);
    }
    public void fillRect(int x, int y, int width, int height) {
        g.drawRect(x,y,x+width,y+height,p);
    }
    public void drawString(String text, int x, int y) {
        g.drawText(text,x,y,p);
    }
    public int textWidth(String s) {
        return (int) p.measureText(s);
    }
    public int textHeight() {
        return (int) p.getTextSize();
    }
    public int getWidth() {
        return g.getWidth();
    }
    public int getHeight() {
        return g.getHeight();
    }
}
