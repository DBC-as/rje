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
    public void draw(JmGraphics g) {
        Jm.log("draw...");
    }
    public void touch(int x, int y, int eventType) {
        Jm.log("touch...");
    }
    public void key(int keyEvent) {
        Jm.log("key...");
    }
}
