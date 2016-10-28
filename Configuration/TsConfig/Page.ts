options.pageTree.showPageIdWithTitle = 1
options.pageTree.showNavTitle = 1
options.clearCache.pages = 1

[adminUser = 1]
options.clearCache.system = 1
[end]


mod.wizards.newContentElement.wizardItems.common {
    elements {
        t3ws_teaser {
            icon = ../typo3conf/ext/t3ws/ext_icon.png
            title = Mein TEaser
            description = LLL:EXT:t3ws/Resources/Private/Languages/locallang.xlf:teaser.wizard.description
            tt_content_defValues {
                CType = t3ws_teaser
            }
        }
    }
    show := addToList(t3ws_teaser)
}



# Nachtrag: Backendlayout (ab TYPO3 7.6)
mod {
    web_layout {
        BackendLayouts {
            1 {
                title = Standard
                config {
                    backend_layout {
                        colCount = 1
                        rowCount = 3
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = Kopfbild
                                        colPos = 0
                                    }
                                }
                            }
                            2 {
                                columns {
                                    1 {
                                        name = Inhalt
                                        colPos = 1
                                    }
                                }
                            }
                            3 {
                                columns {
                                    1 {
                                        name = Eigene Inhaltselemente
                                        colPos = 2
                                    }
                                }
                            }
                        }
                    }
                }
                icon = EXT:t3ws/Resources/ext_icon.png
            }
        }
    }
}