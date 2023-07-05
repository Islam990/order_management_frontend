import { useParams } from 'react-router-dom';
import '../App.css';


const Dashboard = () => {

    const params = useParams();

    const orders = [
        {
            id: 1, date: new Date(), products:
                [
                    { id: 1, productName: 'Rice', Price: 5, quantity: 1 },
                    { id: 2, productName: 'Banana', Price: 10, quantity: 2 },
                    { id: 3, productName: 'Shoes', Price: 5, quantity: 1 }
                ]
        },

        {
            id: 2, date: new Date(), products:
                [
                    { id: 4, productName: 'Rice', Price: 7.5, quantity: 1 },
                    { id: 5, productName: 'Tomoto', Price: 10, quantity: 2 },
                ]
        }

    ];

    return (
        <div className='dashboard'>
            <h2>Order Management Dashboard</h2>
            <p>Welcome {params.userName}</p>
            <br />  <hr /><br />
            {orders.map(
                order => (
                    <div className="container" key={order.id}>
                        <h2>Order Id {order.id}, {order.date.toString()}</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.products.map(product => (
                                    <tr key={`${order.id}-${product.id}`}>
                                        <td>{product.productName}</td>
                                        <td>{product.Price}</td>
                                        <td>{product.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <br></br><br></br>
                    </div>
                )
            )}
        </div>
    );
}

export default Dashboard;