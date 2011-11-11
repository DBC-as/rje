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
  Jmlet jmlet;
  JmScreenGraphics g;

  public void log(String s) {
    System.out.println(s);
  }
  public JmImpl() {
    g = new JmScreenGraphics(this);
  }

  public void init() {
    jmlet = Jm.getJmlet(this);
    jmlet.init();
  }
  public void start() {
    jmlet.start();
  }
  public void stop() {
    jmlet.stop();
  }

  public static void main(String args[]) {
    Frame f = new Frame();
    JmImpl ji = new JmImpl();
    ji.init();
    f.add(ji); f.setSize (320,480); f.setVisible(true);
    ji.start();
  }

  public void paint(Graphics g) {
    this.g.setGraphics(g);
    jmlet.paint(this.g);
  }
} 

