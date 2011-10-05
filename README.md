# Java Mobile Development 

Experimental prototype for mobile develpment infrastructure for DBC

## Goal: 

Portable layer on top of Java to target different mobile devices:

- HTML5 compliant devices (recent android, iphone, palm, ...) via GWT
- Non-HTML5-browsers via applet(+application)
- Android abstracted API
- Low end phones applets via MIDP
- iOS via xmlvm (relatively slow)

API abstraction:

- Fullscreen canvas, with text and graphics
- Touch and keys as input methods. Capability querying.
- resize/rotate-event
- HTTP networking
- Basic JSON 
- (Basic JavaScript-like scripting)
- (Basic XML+HTML)

## Task list

- Get build-environment up and running for all platforms
- implement basic version of each of the API abstractions on all platforms.

## Building:

Fetch dependencies:

    ./resolve-dependencies.sh

Build/run HTML5-app:
  
    cd gwt
    ant devmode

Build/run applet-application

    cd applet
    mvn compile exec:java
