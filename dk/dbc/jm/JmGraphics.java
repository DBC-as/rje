package dk.dbc.jm;

public interface JmGraphics {
    JmGraphics setColor(int rgb);
    JmGraphics fillRect(int x, int y, int width, int height);
    JmGraphics fillText(String text, int x, int y);
    int textWidth(String s);
    int textHeight();
    int getWidth();
    int getHeight();
}
