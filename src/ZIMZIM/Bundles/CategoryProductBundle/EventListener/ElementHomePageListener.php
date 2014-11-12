<?php

namespace ZIMZIM\Bundles\CategoryProductBundle\EventListener;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use ZIMZIM\Bundles\CategoryProductBundle\ZIMZIMCategoryProductEvents;

class ElementHomePageListener implements EventSubscriberInterface
{
    private $em;
    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }
    public static function getSubscribedEvents()
    {
        return array(
            ZIMZIMCategoryProductEvents::ELEMENT_HOMEPAGE => 'getElementHomePage',
        );
    }

    public function getElementHomePage(){

    }

}