(function($) {


    $.fn.freezyheader = function(options) {


        var w = $(this).width();
        var h = $(this).height() / 2;
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            height: h,
            width: w,
            overflow: "auto"
        }, options);

       

        this.parent().scroll(function() {
            var sc_left = -$(this).scrollLeft();
            var freezyHeader = $(this).find(".headerFreezy").attr("freezyheader");
            $('.freezyHeader' + freezyHeader + ' table').css('margin-left', sc_left + 'px');
        });
        return this.each(function(ind) {
            $this = $(this);
            var thisHead = $this.find('thead').html();
            var zind = 1;
            var width = $this.width();
            var left = $this.offset().left;
            var top = $this.offset().top;
            var height = $this.find("thead").height();

            $('<div>').addClass('freezyHeaderContainer' + ind).width(width).height(height).css({
                'top': top,
                'left': left
            }).insertBefore($this);
            $(this).attr('freezyheader', ind).addClass("headerFreezy");
            $(this).find("thead").hide();

            $('<div>').addClass('freezyHeader' + ind).attr('freezyheader', ind).css({
                'width': $this.width(),
                'height': $this.find("thead").height(),
                'left': +left,
                'top': +top,
                'overflow': 'hidden',
                'position': 'absolute',
                'z-index': +zind,
                'background-color': '#ffffff'
            }).html('<table class="tGrid tableDiv floatingHeader" style="width:' + $this.width() + 'px;"><thead>' + thisHead + '</thead></table>').appendTo('body');


            $('.freezyHeader' + ind).find('table th').each(function(ind) {
                var wid = $this.find("tbody tr:eq(0) td:eq(" + ind + ")").width();
                $(this).width(wid);

            });

        }).parent().css({
            height: settings.height,
            width: settings.width,
            overflow: settings.overflow
        });
    };

}(jQuery));