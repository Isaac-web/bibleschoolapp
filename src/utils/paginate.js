import _ from 'lodash';


export default (items, page, size) => {
    const startIndex = (page - 1) * size;
    return _(items).slice(startIndex).take(size).value();
}