package dk.dbc.jmimpl;
import java.applet.Applet;  
import java.awt.Graphics;
import java.awt.Color;
import java.awt.Frame;
import dk.dbc.jm.*;


/**
 * Pure-java version of platform specific parts of the Jm mobile platform abstraction.
 * This is implemented on each of the platforms, and is responsible for
 * setting up the execution environment, and various access to device specific parts.
 * It must create a new Jm(JmImpl);
 */
public class JmImpl extends Applet {
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

  public static void main(String args[]) {
    Frame f = new Frame();
    JmImpl ji = new JmImpl();
    f.add(ji); f.setSize (320,480); f.show();
    ji.init();
    ji.start();
  }

  public void paint(Graphics g) {
    g.setColor(new Color(0xff0000));
    g.fillRect(0,0,getWidth(), getHeight());
  }
} 

