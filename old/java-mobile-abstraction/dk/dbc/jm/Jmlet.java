package dk.dbc.jm;

public interface Jmlet {
    public void init();
    public void start();
    public void stop();
    public void paint(JmGraphics g);
    public void touch(int x, int y, int eventType);
    public void key(int keyEvent);
}
