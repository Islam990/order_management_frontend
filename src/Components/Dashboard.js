import { useParams } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import { useState } from 'react';


const Dashboard = () => {

    const params = useParams();

    const [orders, setOrders] = useState([]);

    useState(() => {
        getOrders()
    }, [orders])

    async function getOrders() {
        await axios.get(`http://localhost:8080/getOrders`).
            then((response) => {
                setOrders(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div className='dashboard'>
            <h2>Order Management Dashboard</h2>
            <p>Welcome {params.userName}</p>
            <br />  <hr /><br />
            {orders.map(
                order => (
                    <div className="container" key={order.id}>
                        <h3>Order Id <u>{order.id}</u> , Time|  {order.date}</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.productList.map(product => (
                                    <tr key={`${order.id}-${product.id}`}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
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