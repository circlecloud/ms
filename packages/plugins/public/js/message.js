$._messengerDefaults = {
    extraClasses: 'messenger-fixed messenger-theme-future messenger-on-top messenger-on-right'
};
var showMessenger = function(message, type) {
    return Messenger().post({
        message: message,
        type: type || 'info',
        showClo6seButton: true
    });
};
