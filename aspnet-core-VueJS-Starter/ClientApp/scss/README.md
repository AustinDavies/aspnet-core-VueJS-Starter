###
### SCSS Folder Structure Guidelines and Usage: ###
-
## base/ directory
-
The base/ folder holds what we might call the boilerplate stuff for your project. In there, you might 
find the reset (or Normalize.css, or whatever), probably some stuff dealing with typography, 
and, depending on the project, maybe some other files; mostly these are the bare-minimum 
files required to start giving shape to the site.
-

## components/ directory
-
For smaller components, there is the components/ folder (frequently called modules/). While layout/ is kind of macro 
(defining the global wireframe), components/ is more micro. It can contain all kinds of specific modules like a 
slider, a loader, a widget, or anything along those lines. There are usually a lot of files in components/ 
since your site is should be mostly composed of tiny modules.
-

## helpers/ directory
-
The helpers/ folder (sometimes called utils/) gathers all Sass tools and helpers we’ll use across the project. 
Got a function? A mixin? Put it in here. This folder also contains a _variables.scss file (sometimes _config.scss) 
which holds all global variables for the project (for typography, color schemes, and so on).
-

## layouts/ directory
-
The layout/ directory (sometimes called partials/) usually contains a number of files, each of them
setting some styles for the main sections of the layout (header, footer, and so on); Mostly the 
major repeating sections on a site.
-

## pages/ directory
-
If you have page-specific styles, I think it’s cool to put them in a pages/ folder and in a file named after 
the page. For example, it’s not uncommon to have very specific styles for the home page, so you’d have a 
_home.scss file in pages/ dealing with this.
-

## vendor/ directory
-
The vendor directory is for third-party CSS. This is handy when using pre-packaged components developed by other 
people (or for your own components that are maintained in another project). jQuery UI and a color picker are 
examples of CSS that you might want to place in the vendor directory. As a general rule try to make it a point not 
to modify files in the vendor directory. If you need to make modifications add those after the vendored files 
are included in my primary stylesheet. This should make it easy for anyone to update third-party stylesheets 
to more current versions in the future.
-