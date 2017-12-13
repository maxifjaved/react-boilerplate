import _ from 'lodash'

function toggler(collection, item) {
    const idx = _.indexOf(collection, item);
    if (idx !== -1) {
        collection.splice(idx, 1);
    } else {
        collection.push(item);
    }
};

export function toggle(array, value) {
    let arrayElement = array
    let toggleValue = _.partial(toggler, arrayElement)
    toggleValue(value)
    return arrayElement
}