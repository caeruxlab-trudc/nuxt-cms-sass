export const useFetchProducts = async() => {
    try {
        const config = useRuntimeConfig();
        const { data:products, status } = await useFetch(`${config.public.endpoint}/products`, {
            cache: 'no-cache',
            lazy: true,
            headers: {
                'X-MICROCMS-API-KEY': config.public.token,
            },
            transform: (_products:any) => _products.contents,
        })
        return {products,status};
    } catch (error) {
        console.log(error);
    }
};
