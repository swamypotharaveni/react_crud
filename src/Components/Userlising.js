import { connect } from "react-redux";
import { FetchUserList, Removeuser } from "../Redux/Action";
import { useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { BrowserRouter, HashRouter, Link, Route, Routes } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './User.css'
import { toast } from "react-toastify";
const UserListing = (props) => {
    useEffect(() => {
        props.loaduser();
    }, [])
    const hadledelete = (code) => {
        if (window.confirm('Do you want to remove ')) {
            props.removeuser(code);
            props.loaduser();
            toast.success("user removed sucessfully !")
        }
    }

    return (props.user.loading ? <div><h2>Loading...</h2></div> :
        props.user.errmessage ? <div><h2>{props.user.errmessage}</h2></div> :
            <div>
                <div className="card">
                    <div className="card-header" >
                        <Link to={'/user/add'} className="btn btn-success">Add User [+]</Link>

                    </div>
                    {props.user.userlist && props.user.userlist.length > 0 ? (
                        <div className="card-body">
                            <Table striped bordered hover>
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <td>Code</td>
                                        <td>Name</td>
                                        <td>Email</td>
                                        <td>Phone</td>
                                        <td>Role</td>
                                        <td>Action</td>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.user.userlist && props.user.userlist.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td className={`role_${item.role}`}>{item.role}</td>
                                                <td>
                                                    <Button style={{ marginRight: "10px" }} variant="danger" onClick={() => console.log("danger")}>
                                                        edit
                                                    </Button>
                                                    <Button variant="info" onClick={() => hadledelete(item.id)}>
                                                        delete
                                                    </Button>
                                                </td>

                                            </tr>
                                        )
                                    }


                                </tbody>

                            </Table>
                        </div>
                    ) : (
                        <div>
                            <h2>No data available</h2>
                        </div>
                    )}
                </div>
            </div>);
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loaduser: () => dispatch(FetchUserList()),
        removeuser: (code) => dispatch(Removeuser(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListing);