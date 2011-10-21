package dk.dbc.gwt2me;
public class Jm {
    static Jmlet jmlet;
    static GwtEntryPoint impl;
    public static Jmlet getJmlet(GwtEntryPoint impl) {
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
