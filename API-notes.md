# Next to implement

    JmImage {
        // Canvas on html
        // int[] on midp
        // Bitmap on android
        // BufferedImage on Java

        static JmImage createRGBImage(int width, int height, boolean processAlpha) 
        int[] getARGB();
        void flush();
        void flush(x0, y0, width, height);
        int getWidth();
        int getHeight();
        boolean hasAlpha();
    }
    JmCanvas {
        JmCanvas(width, height);
        JmGraphics getGraphics();
        JmImage toImage();
    }
    JmGraphics {
        drawImage(JmImage, x, y);
        drawImage(JmImage, x, y, width, height);
    }
    Jmlet {
        touch(int x, int y, int eventType);
        key(int keyEvent);
    }
    Jm {
    }
    [... http/input streams etc. notes:
    http://code.google.com/p/google-web-toolkit/source/browse/trunk/user/super/com/google/gwt/emul/Emulation.gwt.xml]


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
