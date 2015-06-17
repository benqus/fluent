
export function extend(object, ...objects) {
    objects.forEach(obj => {
        let keys = Object.keys(obj);
        keys.forEach(key => {
            object[key] = obj[key];
        });
    });
}

function _extendComponent(object) {
    let Super = this;
}

export function extendComponent(...objects) {
    objects.forEach(_extendComponent, this);
}