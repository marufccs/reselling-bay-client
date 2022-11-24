import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Header from '../Shared/Header/Header';
import { AuthContext } from '../UserContext/UserContext';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
            <Header/>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            isSeller && <>
                                <li><Link to="/dashboard/selectcategory">Add a Product</Link></li>
                                <li><Link to="/dashboard/myproducts">My Products</Link></li>
                            </>
                        }
                        {
                            isBuyer && <>
                            <li><Link to="/dashboard/myorders">My Orders</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                            <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                            <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;