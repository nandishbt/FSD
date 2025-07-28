# CSS Notes

## selectors
    p[draggable = "true"]{
    color : "red" 
    }
    - we can select paragraph elements which have draggable attribute set to true. And apply styles to it.

## Order of Importance from low to high
 - html elements, class, targeting through attributes, Id.
 - external css, internal css, inline css.
 - prop, prop ! important.
 
 ## float and clear property
 - float : 'left' || 'right' -> the div will attach to left or right and other area treated as normal.
 - clear : 'left' | 'both' || 'right' -> to make divs which will not affected to float.
 - used in newspaper to make paragraph around image.