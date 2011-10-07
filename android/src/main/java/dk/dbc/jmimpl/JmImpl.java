package dk.dbc.jmimpl;
import dk.dbc.jm.*;
import android.app.Activity;
import android.os.Bundle;
import android.util.Log;

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

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.main);
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


    /**
     * Called when the activity is first created.
     * @param savedInstanceState If the activity is being re-initialized after 
     * previously being shut down then this Bundle contains the data it most 
     * recently supplied in onSaveInstanceState(Bundle). <b>Note: Otherwise it is null.</b>
     */
    public void onCreate() {
    }

}

