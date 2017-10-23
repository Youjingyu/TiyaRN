/* global global */
module.exports = {
    Note: {
        getNote: (cb) => {
            global.storage.load({key: 'note'}).then(note => {
                cb && cb(note);
            }).catch(() => {
                cb && cb([]);
            });
        },
        saveNote: function(note){
            this.getNote((notes) => {
                notes.unshift(note);
                global.storage.save({
                    key: 'note',
                    data: notes
                });
            });
        }
    }
};
