<?php

class Page {
    var $title;
    
    function init() {
        $this->title = 'Tri Nguyen';
    }
    
    function set_title($new_title) {
        $this->title = $new_title;
    }
}

?>