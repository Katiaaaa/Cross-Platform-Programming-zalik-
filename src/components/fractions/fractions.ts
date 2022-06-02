interface InputData {
    x1_numerator: number;
    x1_denominator: number;
    x2_numerator: number;
    x2_denominator: number;
}

const fractions = {
    sum(data: InputData) {
        let res = [0, 0];
        res[1] = data.x1_denominator*data.x2_denominator;
        res[0] = data.x1_numerator*data.x2_denominator+data.x2_numerator*data.x1_denominator;
        return `${res[0]}/${res[1]}`;
        
    },
    division(data: InputData){
        let res = [0, 0];
        res[1] = data.x1_denominator*data.x2_numerator;
        res[0] = data.x1_numerator*data.x2_denominator;
        return `${res[0]}/${res[1]}`;
    },
    product(data: InputData){
        let res = [0, 0];
        res[1] = data.x1_denominator*data.x2_denominator;
        res[0] = data.x1_numerator*data.x2_numerator;
        return `${res[0]}/${res[1]}`;
    },
    difference(data: InputData){
        let res = [0, 0];
        res[1] = data.x1_denominator*data.x2_denominator;
        res[0] = data.x1_numerator*data.x2_denominator-data.x2_numerator*data.x1_denominator;
        return `${res[0]}/${res[1]}`;
    }
    
}

export {type InputData, fractions};