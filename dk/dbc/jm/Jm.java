package dk.dbc.jm;
import dk.dbc.jmimpl.JmImpl;
public class Jm {
    JmImpl impl;
    public Jm(JmImpl impl) {
        this.impl = impl;
    }
    public void init() {
        impl.log("init...");
    }
    public void start() {
        impl.log("start...");
    }
    public void stop() {
        impl.log("stop...");
    }
}
