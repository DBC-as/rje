package dk.dbc.jmimpl;
import dk.dbc.jm.*;
import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.Window;

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
  /*public JmImpl() {
  }*/
  /**
   * Not available on all platforms, part of pure-java implementation, please ignore.
   */
  JmScreen screen;
  Jmlet jmlet;

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    requestWindowFeature(Window.FEATURE_NO_TITLE);

    jmlet = Jm.getJmlet(this);
    screen = new JmScreen(this, jmlet);
    jmlet.init();

    setContentView(screen);
    screen.requestFocus();
  }

  @Override
  public void onResume() {
    super.onResume();
    jmlet.start();
  }  

  @Override
  public void onPause() {
    super.onPause();
    jmlet.stop();
  }
}

