<?php
namespace App\Model;

use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Table;

#[Entity()]
#[Table(name: 'servicedesk_history')]
class ServiceDeskHistory
{
    #[Id]
    #[Column(
        type: 'integer'
    )]
    #[GeneratedValue('AUTO')]
    private int $id;

    #[Column(
        type: 'string',
        length: 8
    )]
    private string $uin;

    #[Column(
        type: 'datetime',
        columnDefinition: 'timestamp default current_timestamp'
    )]
    private \DateTimeImmutable $date;

    #[Column(
        type: 'string',
        length: 50
    )]
    private string $printer;

    #[Column(
        type: 'string',
        length: 20
    )]
    private string $color;

    #[Column(
        type: 'string',
        length: 50
    )]
    private string $user;

    #[Column(
        type: 'string',
        length: 100
    )]
    private string $id_email;

    #[Column(
        type: 'smallint',
        options: ['default' => 0]
    )]
    private int $add_db;

    public function getId(): int
    {
        return $this->id;
    }

    public function getUin(): string
    {
        return $this->uin;
    }

    public function setUin(string $uin): void
    {
        $this->uin = $uin;
    }

    public function setDate(\DateTimeImmutable $date): void
    {
        $this->date = $date;
    }

    public function getDate(): \DateTimeImmutable
    {
        return $this->date;
    }

    public function setPrinter(string $printer): void
    {
        $this->printer = $printer;
    }

    public function getPrinter(): string
    {
        return $this->printer;
    }
    
    public function setColor(string $color): void
    {
        $this->color = $color;
    }

    public function getColor(): string
    {
        return $this->color;
    }

    public function setUser(string $user): void
    {
        $this->user = $user;
    }

    public function getUser(): string
    {
        return $this->user;
    }

    public function setIdEmail(string $idEmail): void
    {
        $this->id_email = $idEmail;
    }

    public function getIdEmail(): string
    {
        return $this->id_email;
    }

    public function setAddDb(int $AddDb): void
    {
        $this->add_db = $AddDb;
    }

    public function getAddDb(): int
    {
        return $this->add_db;
    }
}