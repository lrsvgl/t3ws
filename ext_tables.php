<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 't3ws template');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3ws/Configuration/TsConfig/Page.ts">');


//\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
//	array(
//		'LLL:EXT:t3ws/Resources/Private/Languages/locallang.xlf:teaser.wizard.title',
//		't3ws_teaser',
//		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($_EXTKEY).'ext_icon.png'
//	),
//	'CType'
//);
//
//$GLOBALS['TCA']['tt_content']['types']['t3ws_teaser'] = array(
//	'columnsOverrides' => array(
//		'bodytext' => array(
//			'defaultExtras' => 'richtext:rte_transform[mode=ts_css]'
//		)
//	),
//	'showitem' => '
//	CType, colPos, header, header_link, bodytext,
//	--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.media, assets,
//	--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.access, starttime, endtime
//	'
//);