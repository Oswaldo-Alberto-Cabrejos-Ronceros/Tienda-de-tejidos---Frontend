export interface Producto{
    id?:number,
    name:string,
    category:number,
    gender:number,
    images:string[],
    details:string[],
    price:number|null,
    stock?:number
};
//par gender 
export interface Gender{
    id?:number,
    name:string
}
//para genderStrick
export interface GenderStrick{
    id:number,
    name:string
}
//para talla
export interface Size{
    id?:number,
    name:string
};
//para sizeStrict
export interface SizeStrict{
    id:number,
    name:string
}
//para color
export interface Color{
    id?:number,
    name:string
};
//color strict
export interface ColorStrict{
    id:number,
    name:string
};
//para stock
export interface Stock{
    id?:number,
    product?:number,
    color?:number|string,
    size?:number|string,
    stock?:number
}
//para stock strict
export interface StockStrict{
    id:number,
    product:number,
    color:number|string,
    size:number|string,
    stock:number
}