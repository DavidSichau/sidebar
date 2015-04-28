Template.sidebarRight.events({
    'click .sidebar-toggle': function(e, t) {
        if($(e.target).parent().hasClass("toggled")) {
            $(t.find(".sidebar")).toggleClass("toggled").outerWidth(0);
            $(t.find(".sidebar-toggle")).css({"right":"0"});
        } else {
            $(t.find(".sidebar")).toggleClass("toggled").outerWidth(this.width);
            $(t.find(".sidebar-toggle")).css({"right":this.width});
        }
    }
});


Template.sidebarLeft.events({
    'click .sidebar-toggle': function(e, t) {
        if($(e.target).parent().hasClass("toggled")) {
            $(t.find(".sidebar")).toggleClass("toggled").outerWidth(0);
            $(t.find(".sidebar-toggle")).css({"left":'0'});
        } else {
            $(t.find(".sidebar")).toggleClass("toggled").outerWidth(this.width);
            $(t.find(".sidebar-toggle")).css({"left":this.width});
        }
    }
});