jQuery(document).ready(function($) {
    var funcs = {};
    jQuery(document).ready(function($) {
        $.ajaxSetup({
            dataType: "json"
        });

        funcs['getAuthor'] = function(data) {
            console.log(this);
            return $(this).attr('data-title');
        };

        $.ajax("https://api.github.com/repos/yupe/yupe/contributors", {
            success: function(data) {
                $.tmpl($('#contributorsTpl'), data, funcs).appendTo('.thumbnails'); //.appendTo('.thumbnails');
                $('.thumbnails').removeClass('loading');
                $('.thumbnails').prepend('<li class="span12"><h1>Top</h1></li>');
                $('.thumbnails li:eq(8)').after('<li class="span12"><h1>Others</h1></li>');
                //$('.thumbnails li').prepend('<li class="span12"><b>Top</b></li>');
                $('.popover-help').popover({ position: 'left', trigger : 'hover', delay : 500, html: true });
            }
        });
    });
});