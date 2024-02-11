<?php

require_once('../_helpers/strip.php');

// the `name` variable isn't getting sanitized, making it vulnerable
// to a reflected Cross-Site Scripting vulnerability.
echo 'Hello, ' . htmlspecialchars($_GET['name'], ENT_QUOTES, 'UTF-8');
