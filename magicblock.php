<?php
/*
Plugin Name:  Magic Block
Description: Registers a container block. It has settings for element, ID, classname, style, and any other attribute. 
Version:      1.2.2
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
        plugins_url( 'js/magicblock.build.js', __FILE__ ),
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
