package dk.dbc.jmimpl;
import dk.dbc.jm.*;

/**
 * Pure-java version of platform specific parts of the Jm mobile platform abstraction.
 * This is implemented on each of the platforms, and is responsible for
 * setting up the execution environment, and various access to device specific parts.
 * It must create a new Jm(JmImpl);
 */
public class JmImpl {
  /**
   * Add a string to the system log.
   */
  public void log(String s) {
    System.out.println(s);
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
  public void init() {
    jm = new Jm(this);
    jm.init();
  }
  public void start() {
    jm.start();
  }
  public void stop() {
    jm.stop();
  }
} 

