export const useFetchProducts = async() => {
    try {
        const {data: products,status} = await useCmsData('/products', {
            cache: false,
            transform: (_products:any) => _products.contents,
        });
        return {products,status};
    } catch (error) {
        console.log(error);
    }
};
