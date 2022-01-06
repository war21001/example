exports.compute = function(left, op, right){
    
    let result=0;

    right = parseInt(right, 10);
    left = parseInt(left, 10);

    if (op == '+'){
        result = right + left;
    }
    if (op == '-'){
        result = left - right;
    }
    if (op == '*'){
        result = right * left;
    }
    if (op == '/'){
        if (right !=0){
            result =  left/right;
        }
        
    }
    return result;
};