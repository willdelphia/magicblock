=== Magic Block ===
Contributors: willdelphia
Tags: gutenberg, block, container block, html element, html5, div, section, flexbox, css grid, tag, nesting, child blocks, parent blocks
Requires at least: 5.0
Tested up to: 5.1
Requires PHP: 5.2.4
License: GPL2
Stable tag: trunk
License URI:  https://www.gnu.org/licenses/gpl-2.0.html

Registers a container block with the block editor. It has settings for tag (div, section, etc), ID, classname, and inline style. 

== Description ==

Magic Block registers a container block with the block editor (Wordpress 5+). This block has settings for tag (div, section, etc), ID, classname, and inline style. 

Magic Block is designed for people who want full control over post HTML structure, or wish to use the editor to create complex layouts such as Flexbox, CSS Grid, Bootstrap, etc... 

This block does not add any CSS styles that you, as a developer, do not provide. Rather, it allows you to easily contain other blocks in parent elements with an arbitrary ID or Class. You may then easily target these container elements by ID or Class in your theme's stylesheets or through CSS plugins. For smaller customizations there is an inline style field which maps to the "style" HTML attribute for the container element. 

In the editor view, each Magic Block has a thin grey outline so you can easily see which child elements belong to it. It also provides a display of element type, ID, and classes so you can keep track of how to target them with your CSS.

== Screenshots ==
1. You can nest magic blocks inside each other to build complex layouts. 