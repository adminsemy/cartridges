<?php

namespace App\Service\Response\JSON;

use Symfony\Component\HttpFoundation\JsonResponse;

class ResponseJson extends JsonResponse
{
    protected $data = [
        'action' => '',
        'message' => '',
        'errorCode' => 0
    ];

    public function __construct(mixed $data = null, int $status = 200, array $headers = [], bool $json = false)
    {
        parent::__construct($data, $status, $headers, $json);
        $this->setData($this->data);
    }

    public function addParametres(string $action, string $message, int $errorCode = 0)
    {
        $content = [
            'action' => $action,
            'message' => $message,
            'errorCode' => $errorCode
        ];
        $this->setData($content);
    }
}