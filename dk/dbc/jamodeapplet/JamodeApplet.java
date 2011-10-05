import java.applet.Applet;  
import java.awt.Graphics;
import java.awt.Frame;

public class JamodeApplet extends Applet {
  public JamodeApplet() {
  }
  public void init() {
  }
  public static void main(String args[]) {
    Frame f = new Frame();
    JamodeApplet ja = new JamodeApplet();
    f.add(ja); f.setSize (300,120); f.show();
    ja.init();
  }
  public void paint(Graphics g) {
    g.drawString("Hello world!", 50, 25);
    System.out.println(g.getClipBounds());
  }
} 

