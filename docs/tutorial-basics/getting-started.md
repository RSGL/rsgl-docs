---
sidebar_position: 1
---

# Getting Started with RSGL

:::info

When first first start a project with RSGL you'll want to include the library with
```cpp
#include <RSGL/RSGL.hpp>
```

You can then create a window and window structure to manage the window

```cpp
RSGL::window window("name",{500,500,500,500},{255,255,255});
```

This function will create a window with the title "name" at 500,500 on your screen with the width and length of 500 that has a white ({255,255,255}) background 

You'll also want your app to run on a loop, so make sure you define a var to control the loop, for example:

```cpp
bool running=true;
```

now we can get to the main function, in the main function is where we'll put the game loop

```cpp
int main(){
    while (running){

    }
}
```

inside the game loop we'll also want the 
```cpp
RSGL::window.checkEvents(); 
and 
RSGL::window.clear();
```
functions to check any events we get and to redraw the screen

in our case, it'll look like this

```cpp
while (running}{
    window.checkEvents();
    
    window.clear();
}
```

Now, you'll want to check the events that `window.checkEvents()` passes

I'll just check for the `RSGL::quit` event so we can end the program when the window's closed

You'll want to use a switch-case for this for best preformance
```cpp
    ... in app loop
        switch(window.event.type){
            case RSGL::quit: running=false;
            default: break;
        }
```

Now, you can do whatever else you might want

I'll draw some circles 

you can draw a circle with an initalizer list like this,
```cpp
        ...in app loop
        RSGL::drawCircle({200,200,25},{0,0,0}); //draws black circle with the radius of 25 at 200,200
```
or with a predefined varibles like this

```cpp 
    
    ...before game loop
    RSGL::color c = {255,0,0};
    RSGL::circle cir = {100,100,50};

    ...in game loop
    RSGL::drawCircle(cir,c);
```


Full code:
```cpp
#include <RSGL/RSGL.hpp>
bool running = true;

int main(){
    RSGL::window window("name",{500,500,500,500},{255,255,255});
    RSGL::color c = {255,0,0};
    RSGL::circle cir = {100,100,50};
    while (running){
        window.checkEvents();
        switch(window.event.type){
            case RSGL::quit: running=false;
            default: break;
        }
        RSGL::drawCircle({200,200,25},{0,0,0},false);
        RSGL::drawCircle(cir,c);
    } window.close();
} 
```