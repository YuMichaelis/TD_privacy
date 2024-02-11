<?php

require_once('../_helpers/strip.php');

// https://depthsecurity.com/blog/exploitation-xml-external-entity-xxe-injection

// Désactive le chargement des entités externes pour prévenir les vulnérabilités XXE
libxml_disable_entity_loader (true);

$xml = strlen($_GET['xml']) > 0 ? $_GET['xml'] : '<root><content>No XML found</content></root>';

$document = new DOMDocument();
// Supprimer LIBXML_NOENT pour désactiver le traitement des entités externes
// Utilisez également LIBXML_NONET pour empêcher le chargement de ressources réseau
$document->loadXML($xml, LIBXML_DTDLOAD | LIBXML_NONET);
$parsedDocument = simplexml_import_dom($document);

echo $parsedDocument->content;

