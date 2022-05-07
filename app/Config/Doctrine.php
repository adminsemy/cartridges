<?php

namespace App\Config;

use Doctrine\ORM\Configuration;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping\Driver\AttributeDriver;
use Doctrine\ORM\ORMSetup;
use Symfony\Component\Cache\Adapter\ArrayAdapter;

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
    private const PATH_PROXIES = __DIR__ . '/../proxies/';
    private const PROXY_NAMESPACE = 'App\Proxies';
    private const AUTOGENERATE = true;
    private const IS_DEV_MODE = true;
    private const PROXY_DIR = null;
    private const CACHE = null;
    private const USE_SIMPLE_ANNOTATION_READER = false;

    public static function entityManager()
    {
        $config = ORMSetup::createAnnotationMetadataConfiguration(
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

    public static function entityManagerAdvanced()
    {
        $config = new Configuration();
        $config->setMetadataCache(new ArrayAdapter());
        $config->setMetadataDriverImpl(new AttributeDriver([self::PATH_MODELS]));
        $config->setQueryCache(new ArrayAdapter());
        $config->setProxyDir(self::PATH_PROXIES);
        $config->setProxyNamespace(self::PROXY_NAMESPACE);
        $config->setAutoGenerateProxyClasses(self::AUTOGENERATE);

        // obtaining the entity manager
        return EntityManager::create(self::CONNECTION_DB, $config);
    }
}