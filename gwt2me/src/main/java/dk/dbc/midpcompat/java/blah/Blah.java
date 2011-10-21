package java.blah;
public class Blah {
    public static native void blah(String s) /*-{
        console.log("blah", s);
    }-*/;
}
