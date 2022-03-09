<?php
if (preg_match('/\.(?:js|css|jpeg|gif|png|ico|svg)$/', $_SERVER["REQUEST_URI"])) {
    return false;    // сервер возвращает файлы напрямую.
}
require_once __DIR__.'/../vendor/autoload.php';


use Symfony\Component\Config\FileLocator;
use Symfony\Component\Routing\Loader\YamlFileLoader;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\Matcher\UrlMatcher;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

$locator = new FileLocator(array(__DIR__));
$loader = new YamlFileLoader($locator);
$routes = $loader->load('../config/route.yml');

$context = new RequestContext();
$request = Request::createFromGlobals();
$context->fromRequest($request);

$matcher = new UrlMatcher($routes, $context);

try {
    $matcher = $matcher->match($request->getPathInfo());
    
    $path = explode('::',$matcher['_controller']);
    $controller = new $path[0];
    $action = $path[1];
    
    $controller->$action($matcher);
} catch (ResourceNotFoundException $e) {
    $response = new Response('Not found!', Response::HTTP_NOT_FOUND);
}