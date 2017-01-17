// Contains global Javascript functions.


/* When a theme-change item is selected, update theme */
/*jQuery(function ($) {
    $('body').on('click', '.change-style-menu-item', function () {
        var theme_name = $(this).attr('rel');
        var themeObject = undefined;

        for (var i = 0; i < themes.length; i++) {
            themeObject = themes[i];

            if (theme_name == themeObject.name) {
                break;
            }
        }

        if (themeObject) {
            set_theme(themeObject);
            $(this).selected = true;
        }
    });
});*/

function supports_html5_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}