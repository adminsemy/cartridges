<?php
namespace App\Model;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="servicedesk_history")
 */
class ServiceDeskHistory
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     * @var int
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=8)
     * @var string
     */
    private $uin;

    /**
     * @ORM\Column(type="datetime", columnDefinition="timestamp default current_timestamp")
     * @var DateTime
     */
    private $date;

    /**
     * @ORM\Column(type="string", length=50)
     * @var string
     */
    private $printer;

    /**
     * @ORM\Column(type="string", length=20)
     * @var string
     */
    private $color;

    /**
     * @ORM\Column(type="string", length=50)
     * @var string
     */
    private $user;

    /**
     * @ORM\Column(type="string", length=100)
     * @var string
     */
    private $id_email;

    /**
     * @ORM\Column(type="smallint", options={"default" : 0})
     * @var int
     */
    private $add_db;

    public function getId()
    {
        return $this->id;
    }

    public function getUin()
    {
        return $this->uin;
    }

    public function setUin(string $uin)
    {
        $this->uin = $uin;
    }

    public function setDate(\DateTime $date)
    {
        $this->date = $date;
    }

    public function getDate()
    {
        return $this->date;
    }

    public function setPrinter(string $printer)
    {
        $this->printer = $printer;
    }

    public function getPrinter()
    {
        return $this->printer;
    }
    
    public function setColor(string $color)
    {
        $this->color = $color;
    }

    public function getColor()
    {
        return $this->color;
    }

    public function setUser(string $user)
    {
        $this->user = $user;
    }

    public function getUser()
    {
        return $this->user;
    }

    public function setIdEmail(string $idEmail)
    {
        $this->id_email = $idEmail;
    }

    public function getIdEmail()
    {
        return $this->id_email;
    }

    public function setAddDb(int $AddDb)
    {
        $this->add_db = $AddDb;
    }

    public function getAddDb()
    {
        return $this->add_db;
    }
}