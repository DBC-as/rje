package dk.dbc.jmimpl;
import java.awt.Graphics;
import java.awt.Color;
import dk.dbc.jm.*;

class JmScreenGraphics extends JmGraphics {
    Graphics g;
    JmImpl jmimpl;
    public JmScreenGraphics(JmImpl jmimpl) {
        this.jmimpl = jmimpl;
    }
    void setGraphics(Graphics g) {
        this.g = g;
    }
    public JmGraphics setColor(int rgb) {
        g.setColor(new Color(rgb));
        return this;
    }
    public JmGraphics fillRect(int x, int y, int width, int height) {
        g.fillRect(x,y,width,height);
        return this;
    }
    public JmGraphics drawString(String text, int x, int y) {
        g.drawString(text,x,y);
        return this;
    }
    public int textWidth(String s) {
        return g.getFontMetrics().stringWidth(s);
    }
    public int textHeight() {
        return g.getFontMetrics().getHeight();
    }
    public int getWidth() {
        return jmimpl.getWidth();
    }
    public int getHeight() {
        return jmimpl.getHeight();
    }
}
