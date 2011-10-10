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
    screen = new JmScreen(this);
    setContentView(screen);
    screen.requestFocus();

    jmlet = Jm.getJmlet(this);
    jmlet.init();
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

