<?php

namespace App\Config;

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

class Doctrine
{
    // database configuration parameters
    private const CONNECTION_DB = [
        'driver' => 'pdo_mysql',
        'host' => 'localhost:3306',
        'dbname' => 'sit',
        'user' => 'root',
        'password' => 'example',
        'charset' => 'utf8',
    ];

    // Create a simple "default" Doctrine ORM configuration for Annotations
    private const PATH_MODELS = __DIR__ . '/../Model/';
    private const IS_DEV_MODE = true;
    private const PROXY_DIR = null;
    private const CACHE = null;
    private const USE_SIMPLE_ANNOTATION_READER = false;

    public static function entityManager()
    {
        $config = Setup::createAnnotationMetadataConfiguration(
            [self::PATH_MODELS],
            self::IS_DEV_MODE,
            self::PROXY_DIR,
            self::CACHE,
            self::USE_SIMPLE_ANNOTATION_READER
        );
        // or if you prefer yaml or XML
        // $config = Setup::createXMLMetadataConfiguration(array(__DIR__."/config/xml"), $isDevMode);
        // $config = Setup::createYAMLMetadataConfiguration(array(__DIR__."/config/yaml"), $isDevMode);

        // obtaining the entity manager
        return EntityManager::create(self::CONNECTION_DB, $config);
    }
}