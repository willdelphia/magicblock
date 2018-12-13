=== Magic Block ===
Contributors: willdelphia
Tags: gutenberg, block, container, container block, html element, html5, div, section, flexbox, css grid, tag, nesting, child blocks, parent blocks
Requires at least: 5.0
Tested up to: 5.0
Requires PHP: 5.2.4
License: GPL2
Stable tag: trunk
License URI:  https://www.gnu.org/licenses/gpl-2.0.html

Registers a container block with the Gutenberg (WP5+) editor. This block has settings for element type (div, section, etc), id, classname, and style (inline css). 

== Description ==

Registers a container block with the Gutenberg (WP5+) editor. This block has settings for element type (div, section, article, main, aside, etc), id, classname, and inline style. It is designed for people who want full control over post HTML structure, or wish to use the editor to create complex layouts (Flexbox, CSS Grid, Bootstrap, etc). 

This block does not add any CSS styles that you, as a developer, do not provide. Rather, it allows you to easily contain other blocks in parent elements with arbitrary ID or Class. You may then easily target these container elements by ID or Class in your theme's stylesheets or through CSS plugins. For smaller customizations there is an inline style field which maps to the "style" HTML attribute for the container element. 

== Screenshots ==
1. You can nest magic blocks inside each other to build complex layouts. 