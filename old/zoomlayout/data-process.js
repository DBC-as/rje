    function buildTree(arr) {
        var prefix = arr[0][0];
        var result = [];
        var resultArr = [prefix];
        arr.forEach(function(elem) {
            if(elem[0] !== prefix) {
                result.push(resultArr);
                prefix = elem[0];
                resultArr = [prefix];
            }
            resultArr.push(elem.slice(1));
        });
        result.push(resultArr);
        result = result.map(function(elem) {
            if(elem.length === 2 && elem[1].length === 0) {
                elem = {title: elem[0], weight: 1};
            } else {
                var t = buildTree(elem.slice(1));
                t.unshift(elem[0]);
                elem = t;
            }
            return elem;
        });
        return result;
    }

    function objectify(arr) {
        if(Array.isArray(arr)) {
           var result = { title: arr[0]};
           arr.shift();
           result.children = arr.map(objectify);
           return result
        }
        return arr;
    }

    function addWeight(elem) {
        if(!elem.weight) {
            elem.children.map(addWeight);
            elem.weight = elem.children.reduce(function(acc, elem) { return acc + elem.weight; }, 2);
        } 
    }
    data = buildTree(data);
    data = data.map(objectify);
    data.forEach(addWeight);
    data = data[0];
