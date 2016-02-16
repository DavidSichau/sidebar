# davidsichau:sidebar

Provide a simple sidebar. 

## Installation

```
    meteor add davidsichau:sidebar
```

## Description

Add some more along the lines of *"Provide a simple sidebar."*


It provides the helpers for implementing simple sidebars

    {{#sidebarLeft width="400px"}}
        //your content
    {{/sidebarLeft}}
    {{#sidebarRight width="45%"}}
        //your content
    {{/sidebarRight}}
    
The parameter width can be used to define the width of the sidebar

To add an parameter for the distance from the top add the following parameter:

    {{#sidebarLeft top="80px"}}
        //your content
    {{/sidebarLeft}}
    
This is useful with static nav bars

##Changelog
 - 0.3.0: Added parameter for distance to top
 - 0.3.2: Increased z-index to 2000
