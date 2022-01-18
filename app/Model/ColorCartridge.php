<?php
namespace App\Model;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;

/**
 * @ORM\Entity
 * @ORM\Table(name="color_cartridges")
 */
class ColorCartridge
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     * @var int
     */
    private $id;

    /**
     * @ORM\Column(name="name", type="string", length=50)
     * @var string
     */
    private $name;

    public function getId()
    {
        return $this->id;
    }
    
    public function setName(string $name)
    {
        return $this->name = $name;
    }

    public function getName()
    {
        return $this->name;
    }
}