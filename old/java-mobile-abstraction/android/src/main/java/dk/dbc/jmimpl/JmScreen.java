package dk.dbc.jmimpl;
import dk.dbc.jm.*;
import android.view.View;
import android.content.Context;
import android.graphics.Canvas;


class JmScreen extends View {
    Jmlet jmlet;
    JmScreenGraphics g;
    public JmScreen(Context context, Jmlet jmlet) {
        super(context);
        setFocusableInTouchMode(true);
        g = new JmScreenGraphics();
        this.jmlet = jmlet;
    }
    @Override
    protected void onDraw (Canvas canvas) {
        canvas.drawARGB(255,255,100,0);
        g.setGraphics(canvas);
        jmlet.paint(g);
    }
}
