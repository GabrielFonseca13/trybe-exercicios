function profitAfter1000 (cost, salePrice){
    if (cost < 0 || salePrice < 0){
        return 'Invalid Numbers'
    }

    let tax = cost * 0.2;
    let totalCost = cost + tax;
    let profit = salePrice - totalCost;

    console.log('Lucro após vender 1000 produtos é: '+ profit * 1000);
}

console.log(profitAfter1000(10,20));