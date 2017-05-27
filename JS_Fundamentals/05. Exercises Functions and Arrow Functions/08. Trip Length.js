function trip([x1, y1, x2, y2, x3, y3]) {
    [x1, y1, x2, y2, x3, y3] = [x1, y1, x2, y2, x3, y3].map(Number);

    function findDistance(x1, y1, x2, y2) {
        let d = Math.sqrt(((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2)));
        return d;
    }

    let d12 = findDistance(x1, y1, x2, y2),
        d23 = findDistance(x2, y2, x3, y3),
        d31 = findDistance(x1, y1, x3, y3);


    let result = {
        first: 1,
        second: 2,
        third: 3,
        combinedD: 0
    };

    if ((d12 <= d31) && (d31 >= d23)) {
        let a = d12 + d23;
        console.log('1->2->3: ' + a);
    }
    else if ((d12 <= d23) && (d31 < d23)) {
        let b = d31 + d12;
        console.log('2->1->3: ' + b);
    }
    else {
        let c = d23 + d31;
        console.log('1->3->2: ' + c);
    }



    //console.log(`${result.first}->${result.second}->${result.third}: ${result.combinedD}`);
}