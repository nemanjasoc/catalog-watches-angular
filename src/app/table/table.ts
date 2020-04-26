export interface SelectBrand {
    value: number,
    option: string
}

export interface SelectColor {
    value: number,
    option: string
}

export interface SelectMaterial {
    value: number,
    option: string
}

export interface SelectFeature {
    value: number,
    option: string
}

export interface SelectPrice {
    value: number,
    option: string
}

export interface SelectGender {
    value: number,
    option: string
}

export interface TableRow {
    id: number,
    img_table_watch: string,
    brand_name: string,
    brand_collection: string,
    item_no: string,
    listing_price: number,
    wholesale_price: number,
    quantity: number,
    low_on_stock: boolean,
    out_of_stock: boolean,
    isBrown: boolean,
    showMore: boolean,
    added: boolean,
    isDecreaseQuantityDisabled: boolean,
    isAddButtonDisabled: boolean
}
