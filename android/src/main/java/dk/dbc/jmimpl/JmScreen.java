package dk.dbc.jmimpl;
import dk.dbc.jm.*;
import android.view.View;
import android.content.Context;
import android.graphics.Canvas;


class JmScreen extends View {
    public JmScreen(Context context) {
        super(context);
        setFocusableInTouchMode(true);
    }
    @Override
    protected void onDraw (Canvas canvas) {
        canvas.drawARGB(255,255,0,0);
    }
}
