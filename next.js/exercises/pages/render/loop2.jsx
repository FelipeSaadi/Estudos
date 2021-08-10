import listProducts from "../../.next/data/listProducts"

export default function loop2() {
    const border = {
        border: "1px solid #000"
    }
    const renderLine = function () {
        return listProducts.map(product => {
            return (
                <tr key={product.id} >
                    <td style={border} >{product.id}</td>
                    <td style={border} >{product.name}</td>
                    <td style={border} >{product.price}</td>
                </tr >
            )
        })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr >
                        <th style={border}>Code</th>
                        <th style={border}>Name</th>
                        <th style={border}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {renderLine()}
                </tbody>
            </table>
        </div>
    )
}