<?php

define( 'ABSPATH', dirname(__FILE__) . '/' );

if( "::1" == $_SERVER["REMOTE_ADDR"] ){
    $local = true;
}else{
    $local = false;
}

if ( $local ) {
    define ( 'SITE_URL', 'http://localhost/quickdoc' );
} else {
    define ('SITE_URL', 'http://tridnguyen.com/quickdoc' );
}

if ( file_exists( 'includes.php' ) ) {
    require_once( 'includes.php' );
}

?>
