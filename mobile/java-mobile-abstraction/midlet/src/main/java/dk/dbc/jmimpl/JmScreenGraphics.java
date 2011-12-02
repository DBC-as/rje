package dk.dbc.jmimpl;
import javax.microedition.lcdui.Graphics;
import dk.dbc.jm.*;

class JmScreenGraphics extends JmGraphics {
    Graphics g;
    JmScreen jmscreen;
    public JmScreenGraphics(JmScreen jmscreen) {
        this.jmscreen= jmscreen;
    }
    void setGraphics(Graphics g) {
        this.g = g;
    }
    public void setColor(int rgb) {
        g.setColor(rgb);
    }
    public void fillRect(int x, int y, int width, int height) {
        g.fillRect(x,y,width,height);
    }
    public void drawString(String text, int x, int y) {
        g.drawString(text,x,y, g.BASELINE|g.LEFT);
    }
    public int textWidth(String s) {
        return g.getFont().stringWidth(s);
    }
    public int textHeight() {
        return g.getFont().getHeight();
    }
    public int getWidth() {
        return jmscreen.getWidth();
    }
    public int getHeight() {
        return jmscreen.getHeight();
    }
}
