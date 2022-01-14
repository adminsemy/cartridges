<?php
// cli-config.php

use App\Config\Doctrine;

require_once "vendor/autoload.php";

return \Doctrine\ORM\Tools\Console\ConsoleRunner::createHelperSet(Doctrine::entityManager());