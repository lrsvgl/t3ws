# Eigene Inhaltselemente in TYPO3



## TCA Erweiterung (Ext:t3ws/ext_tables.php)
```
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
	array(
		'LLL:EXT:t3ws/Resources/Private/Languages/locallang.xlf:teaser.wizard.title',
		't3ws_teaser',
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($_EXTKEY).'ext_icon.png'
	),
	'CType'
);

$GLOBALS['TCA']['tt_content']['types']['t3ws_teaser'] = array(
	'columnsOverrides' => array(
		'bodytext' => array(
			'defaultExtras' => 'richtext:rte_transform[mode=ts_css]'
		)
	),
	'showitem' => '
	CType, colPos, header, header_link, bodytext, 
	--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.media, assets,
	--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.access, starttime, endtime
	'
); 
```
## TypoScript Setup (Ext:t3ws/Configuration/TypoScript/settings.txt)
```
tt_content {
    t3ws_teaser < lib.fluidContent
    t3ws_teaser {
        templateName = Teaser.html
        templateRootPaths {
            10 =  EXT:t3ws/Resources/Private/t3ws/Templates/
        }

        dataProcessing {
            10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
            10.references.fieldName = assets
        }

        settings {
            #descriptionCrop = 120
            image {
                width = 480
                #height = 120
            }
        }
    }
}
```

## TypoScript TsConfig (Ext:t3ws/Configuration/TsConfig/Page.ts)
```
mod.wizards.newContentElement.wizardItems.common {
    elements {
        t3ws_teaser {
            icon = ../typo3conf/ext/t3ws/ext_icon.png
            title = LLL:EXT:t3ws/Resources/Private/Languages/locallang.xlf:teaser.wizard.title
            description = LLL:EXT:t3ws/Resources/Private/Languages/locallang.xlf:teaser.wizard.description
            tt_content_defValues {
                CType = t3ws_teaser
            }
        }
    }
    show := addToList(t3ws_teaser)
}
```

## Template (EXT:t3ws/Resources/Private/Templates/Teaser.html)
```html
<f:comment>
    <f:debug>{files}</f:debug>
</f:comment>
<div class="col-xs-12 col-sm-4 col-md-4 teaser">
    <f:link.page pageUid="{data.header_link}">
    <div class="inner">
        <h2>{data.header}</h2>
        <f:for each="{files}" as="image">
            <figure class="image">
                <f:image src="{image.uid}" class="img-responsive" alt="{image.originalResorce.alternative}" treatIdAsReference="1" width="{settings.image.width}" height="{settings.image.height}" />
            </figure>
        </f:for>
        <div class="teaser-text">
            {data.bodytext}
        </div>
     </div>
    </f:link.page>
</div>
```

## Language (EXT:t3ws/Resources/Private/Language/locallang.xml)
```xml
<trans-unit id="teaser.wizard.title" approved="yes">
     <source>Teaser</source>
 </trans-unit>
 <trans-unit id="teaser.wizard.description" approved="yes">
     <source>Teaser mit Bild und Text</source>
 </trans-unit>
```

## Quellen
*  https://docs.typo3.org/typo3cms/extensions/fluid_styled_content/7.6/AddingYourOwnContentElements/Index.html
*  https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet