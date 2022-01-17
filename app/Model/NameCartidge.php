<?php
namespace App\Model;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;

/**
 * @ORM\Entity
 * @ORM\Table(name="name_cartridges")
 */
class NameCartridge
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     * @var int
     */
    private $id;

    /**
     * @ORM\Column(name="brand", type="string", lenght=50, nullable=true)
     * @var string
     */
    private $brand;

    /**
     * @ORM\Column(name="name_excel", type="string", lenght=100, nullable=true)
     * @var string
     */
    private $nameExcel;

    /**
     * @ORM\Column(name="description", type="string", lenght=255, nullable=true)
     * @var string
     */
    private $description;

    /**
     * @ORM\Column(name="producer", type="string", lenght=50, nullable=true)
     * @var string
     */
    private $producer;

    /**
     * @ORM\ManyToOne(targetEntity="ColorCartridge", inversedBy="id")
     * @JoinColumn(name="id_color", referencedColumnName="id")
     * @ORM\Column(options={"default" : 1})
     * @var ColorCartridge
     */
    private $colorCartridge = 1;

    /** 
    * @ORM\Column(name="all", type="integer", langht=11, options={"default" : 1})
    * @var int
    */
    private $all = 1;

    /** 
    * @ORM\Column(name="minimum", type="integer", langht=11, options={"default" : 0, "unsigned" : true})
    * @var int
    */
    private $minimum = 0;



    
}