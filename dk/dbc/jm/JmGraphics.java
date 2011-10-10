package dk.dbc.jm;

public abstract class JmGraphics {
    public abstract JmGraphics setColor(int rgb);
    public abstract JmGraphics fillRect(int x, int y, int width, int height);
    public abstract JmGraphics drawString(String text, int x, int y);
    public abstract int textWidth(String s);
    public abstract int textHeight();
    public abstract int getWidth();
    public abstract int getHeight();
}
