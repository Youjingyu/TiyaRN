/* global global */
module.exports = {
    saveNote: (note) => {
        global.storage.save({
            key: 'note',
            data: note
        });
    },
    getNote: (cb) => {
        global.storage.load({key: 'note'}).then(note => {
            cb && cb(note);
        }).catch(() => {
            cb && cb([]);
        });
    }
};
