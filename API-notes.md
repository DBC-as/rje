# Next to implement

    JmGraphics {
        setColor(int rgb);
        fillRect(int x, int y, int width, int height);
        fillText(String text, int x, int y);
        int textWidth(String s);
        int textHeight();
    }

    Jmlet {
        init();
        start();
        stop();
        draw(JmGraphics g);
        touch(int x, int y, int eventType);
        key(int keyEvent);
    }

    JmImpl {
        static setJmlet(Jmlet);
        static log(String);
    }

# Notes

    public interface JmCanvas implements JmGraphics {
        JmGraphics getGraphics();
        JmImageData toImageData();
    }

    public interface JmImageData {
        boolean hasTransparency();
        void setTransparency(boolean);
        int getHeight();
        int getWidth();
        int getARGB(int pos);
        int getA(int pos);
        int getR(int pos);
        int getG(int pos);
        int getB(int pos);
        int setARGB(int pos, int color);
        int setA(int pos, int color);
        int setR(int pos, int color);
        int setG(int pos, int color);
        int setB(int pos, int color);
        JmCanvas toCanvas();
    }
