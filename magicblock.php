<?php
/*
Plugin Name:  Magic Block
Description:  Registers a container block with the Gutenberg (WP5.0) editor. This block has settings for element type (div, section, etc), id, classname, and style (inline css). It is designed for people who want full control over post HTML, or wish to use the editor to create complex layouts (Flexbox, CSS Grid, Bootstrap, etc) 
Version:      1.0
Author:       Will Delphia
License:      GPL2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  magic-block

GitHub Plugin URI: willdelphia/magicblock
GitHub Plugin URI: https://github.com/willdelphia/magicblock
*/

function magicblock_register_scripts() {

    wp_register_script(
        'magicblock-main-script',
        plugins_url( 'js/magicblock.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor')
    );

    wp_register_style(
        'magicblock-css',
        plugins_url( 'css/magicblock.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'css/magicblock.css' )
    );

    register_block_type( 'magicblock/magicblock', array(
        'editor_script' => 'magicblock-main-script',
        'editor_style'  => 'magicblock-css'
        )
    );
}
add_action( 'init', 'magicblock_register_scripts' );

echo "this has been a test. please disregrd";