import _ from "lodash";


export default (items, path, order) => {
    if(!path)
        return items;
    else 
        return _.orderBy(items, path, order);
}