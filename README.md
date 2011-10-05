# Java Mobile Development 

Experimental prototype for mobile develpment infrastructure for DBC

## Goal: 

Portable layer on top of Java to target different mobile devices:

- HTML5 compliant devices (recent android, iphone, palm, ...) via GWT
- Android abstracted API
- iOS via xmlvm (relatively slow)
- Low end phones + browser applets via MIDP & microemu


## Building:

Fetch dependencies:

    ./resolve-depencenies.sh

Build HTML5-app:
  
    cd jamodegwt
    ant devmode
