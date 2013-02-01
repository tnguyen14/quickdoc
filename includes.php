<?php

if ( file_exists( 'class-page.php' ) ) {
    require_once('class-page.php');
} else {
    exit('Uh oh! Something is not right! class-page.php could not be found.');
}

$page = new Page();

function set_the_title($page_title) {
    global $page;
    $page->set_title($page_title);
}

function get_the_title() {
    global $page;
    return $page->title;
}