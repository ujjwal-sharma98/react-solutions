import useFetch from '../hooks/useFetch'

const ApiCall = () => {

    const [data, error, loading] = useFetch('https://dummyjson.com/products')

    return <div>
        Products
        {loading ? <div>Loading... </div> :
            data?.products?.map((product => (
                <li key={product.id}>{product.title}</li>
            )))
        }
        <div>{error?.message}</div>
    </div>
}

export default ApiCall