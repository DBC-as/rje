package javax.microedition.lcdui;
import javax.microedition.midlet.MIDlet;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.Element;
import com.google.gwt.dom.client.CanvasElement;

public class Display {
    static Display disp;

    CanvasElement screen;

    private static native int windowWidth() /*-{ return window.innerWidth; }-*/;
    private static native int windowHeight() /*-{ return window.innerHeight; }-*/;

    Display() {
        CanvasElement screen = Document.get().createCanvasElement();
        this.screen = screen;
        Element body = Document.get().getBody();
        screen.setWidth(com.google.gwt.user.client.Window.getClientWidth());
        screen.setHeight(com.google.gwt.user.client.Window.getClientHeight());
        body.appendChild(screen);
        screen.getStyle().setProperty("position", "absolute");
        screen.getStyle().setProperty("top", "0px");
        screen.getStyle().setProperty("left", "0px");
    }

    public static Display getDisplay(MIDlet m) {
        if(disp == null) {
            disp = new Display();
        }
        return disp;
    }

    public void setCurrent(Canvas c) {
        c.setActive(screen);
    }

    public boolean vibrate(int ms) {
        return false; // TODO vibrate via phonegap
    }
}
