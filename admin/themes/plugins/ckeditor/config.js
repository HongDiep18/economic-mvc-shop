/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function (config) {
    // Define changes to default configuration here. For example:
    config.language = 'vi';
    config.enterMode = CKEDITOR.ENTER_BR;
    // config.uiColor = '#AADC6E';
    config.filebrowserBrowseUrl = '/economic-mvc-shop/admin/themes/plugins/ckfinder/ckfinder.html';
    config.filebrowserImageBrowseUrl = '/economic-mvc-shop/admin/themes/plugins/ckfinder/ckfinder.html?type=Images';
    config.filebrowserFlashBrowseUrl = '/economic-mvc-shop/admin/themes/plugins/ckfinder/ckfinder.html?type=Flash';
    config.filebrowserUploadUrl = '/economic-mvc-shop/admin/themes/plugins/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files';
    config.filebrowserImageUploadUrl = '/economic-mvc-shop/admin/themes/plugins/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images';
    config.filebrowserFlashUploadUrl = '/economic-mvc-shop/admin/themes/plugins/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash';

};

