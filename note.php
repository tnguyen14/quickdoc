<?php

if ( file_exists( 'load.php' ) ) {
    require_once('load.php');
} 
set_the_title('Note');

if (file_exists( 'header.php' ) ) {
    require_once( 'header.php' );
}

?>

<body class="note">
    <div role="main" id="main">
        <h1 class="title default" contenteditable="true">Note Title</h1>
        <div class="page" contenteditable="true">
            
        </div>
    </div>
</body>