package dk.dbc.jmimpl;
import dk.dbc.jm.*;
import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.Window;
import android.view.View;
import android.content.Context;
import android.graphics.Canvas;


public class JmImpl extends Activity {
  /**
   * Add a string to the system log.
   */
  public void log(String s) {
	Log.i("Jm", s);
  }
  /**
   * Not available on all platforms, part of pure-java implementation, please ignore.
   */
  public JmImpl() {
  }
  /**
   * Not available on all platforms, part of pure-java implementation, please ignore.
   */
  private Jm jm;

  class JmView extends View {
        public JmView(Context context) {
            super(context);
            setFocusableInTouchMode(true);
        }
        @Override
        protected void onDraw (Canvas canvas) {
            log(canvas.toString());
            log("" + canvas.getWidth());
            log("" + canvas.getHeight());
            canvas.drawARGB(255,255,0,0);
        }
  }
  JmView view;

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    requestWindowFeature(Window.FEATURE_NO_TITLE);
    view = new JmView(this);
    setContentView(view);
    view.requestFocus();

    jm = new Jm(this);
    jm.init();
  }

  @Override
  public void onResume() {
    super.onResume();
    jm.start();
  }  

  @Override
  public void onPause() {
    super.onPause();
    jm.stop();
  }
}

