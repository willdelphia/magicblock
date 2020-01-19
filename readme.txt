=== Magic Block ===
Contributors: willdelphia
Tags:  block, container block, html element, data attributes, div, section, flexbox, css grid, tag, nesting, child blocks, parent blocks
Requires at least: 5.0
Tested up to: 5.3.2
Requires PHP: 5.2.4
License: GPL2
Stable tag: trunk
License URI:  https://www.gnu.org/licenses/gpl-2.0.html

Registers a container block. It has settings for element, ID, classname, style, and any other attribute. 

== Description ==

Magic Block registers a container block with the block editor. This block has settings for element (div, section, etc), ID, classname, inline style, and any other attribute (including data-*, and aria-*) via a custom attributes section. 

Magic Block is designed for people who want full control over post HTML structure, or wish to use the editor to create complex layouts such as Flexbox, CSS Grid, Bootstrap, etc... 

This block does not add any CSS styles that you, as a developer, do not provide. Rather, it allows you to easily contain other blocks in parent elements with an arbitrary ID or Class. You may then easily target these container elements by ID or Class in your theme's stylesheets or through CSS plugins. For smaller customizations there is an inline style field which maps to the "style" HTML attribute for the container element. 

In the editor view, each Magic Block has a thin grey outline so you can easily see which child elements belong to it. It also provides a display of element type, ID, and classes so you can keep track of how to target them with your CSS.

As of Wordpress 5.3 you might not need this plugin since the core now ships with a "Group Block" which is similar in purpose, although it has fewer options.

== Screenshots ==
1. You can nest magic blocks inside each other to build complex layouts. 
2. Custom attributes supported