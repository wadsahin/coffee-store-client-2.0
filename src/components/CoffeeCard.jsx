import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleDeleteCoffee = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(_id);
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });

                            const remainingCoffees = coffees.filter(coffee => coffee._id !== _id);
                            setCoffees(remainingCoffees);
                        }
                    })
            }
        });
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex justify-between w-full items-center">
                <div className="text-left ml-2">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Supplier: {supplier}</p>
                    <p>Taste: {taste}</p>
                    <p>Details: {details}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-3">
                        <button className="btn btn-sm btn-primary">View</button>
                        <Link to={`update-coffee/${_id}`} className="btn btn-sm btn-warning">Edit</Link>
                        <button onClick={() => handleDeleteCoffee(_id)} className="btn btn-sm btn-error">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;