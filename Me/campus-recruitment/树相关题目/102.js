var levelOrder = function (root) {
    if (!root) {
        return [];
    }

    var q = [];
    var res = [];
    q.push(root);

    while (q.length) {
        var qL = q.length;
        var temp = [];
        while (qL--) {
            var front = q.shift();
            temp.push(front.val);
            if (front.left) {
                q.push(front.left);
            }
            if (front.right) {
                q.push(front.right);
            }
        }
        res.push(temp);
    }
    return res;
}

