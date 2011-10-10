package dk.dbc.jm;
import dk.dbc.jmimpl.JmImpl;
public class SampleJmlet implements Jmlet {
    public SampleJmlet() {
        Jm.log("creating jmlet");
    }
    public void init() {
        Jm.log("init...");
    }
    public void start() {
        Jm.log("start...");
    }
    public void stop() {
        Jm.log("stop...");
    }
    public void paint(JmGraphics g) {
        Jm.log("paint...");
        g.setColor(0x00ff00)
         .fillRect(0,0,g.getWidth(),g.getHeight())
         .setColor(0x000000)
         .drawString("Hello world", 100, 100);
    }
    public void touch(int x, int y, int eventType) {
        Jm.log("touch...");
    }
    public void key(int keyEvent) {
        Jm.log("key...");
    }
}
