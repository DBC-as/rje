package dk.dbc.jm;
import dk.dbc.jmimpl.JmImpl;
public class Jm {
    static Jmlet jmlet;
    static JmImpl impl;
    public static Jmlet getJmlet(JmImpl impl) {
        Jm.impl = impl;
        if(jmlet == null) {
            jmlet = new SampleJmlet();
        }
        return jmlet;
    }
    public static void log(String s) {
        if(impl != null) {
            impl.log(s);
        } 
    } 
} 