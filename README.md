# Java Mobile Development Platform abstraction

Experimental prototype for mobile develpment infrastructure for DBC

## Goal: 

Portable layer on top of Java to target different mobile devices:

- HTML5 compliant devices (recent android, iphone, palm, ...) via GWT
- Non-HTML5-browsers via applet(+application)
- Android abstracted API
- Low end phones midlet via MIDP (only microemu in beginning)
- (iOS via xmlvm (can be generated from android source, native api perhaps later))

API abstraction:

- Fullscreen canvas, with text and graphics
- Touch and keys as input methods. Capability querying.
- resize/rotate-event
- HTTP(S) networking
- Basic JSON(+jsonp)
- simple storage
- read/load resource
- (Basic (JavaScript-like) scripting)
- (Basic XML+HTML)

## Task list

- Get build-environment up and running for all platforms
- implement basic version of each of the API abstractions on all platforms.

## Building:

### Fetch dependencies

    ./fetch-dependencies.sh

Takes a while...

### Build/run HTML5-app
  
    cd gwt
    ant devmode

### Build/run application/applet

    cd java
    mvn compile exec:java

### Build/run android-application

    ./depend/android-sdk-linux_x86/tools/android &
    xterm -e ./depend/android-sdk-linux_x86/platform-tools/adb logcat &
    cd android
    mvn install android:deploy

### Build/run microemu-version

    cd midlet
    ./run.sh
