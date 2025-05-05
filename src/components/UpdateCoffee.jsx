import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const navigate = useNavigate();

    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };
        // console.log(updatedCoffee);
        // Send coffee data to the server & save into db
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    navigate("/");
                    Swal.fire({
                        title: "Coffee updated successfully",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }
    return (
        <div className="card bg-base-100 w-full max-w-5xl mx-auto shrink-0 shadow-2xl">
            <h2 className="text-4xl font-bold text-orange-800">Update your coffee here.</h2>
            <form onSubmit={handleUpdateCoffee} className="card-body">
                {/* row 1 */}
                <div className="flex gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <input type="text" defaultValue={name} name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" defaultValue={quantity} name="quantity" placeholder="quantity" className="input input-bordered" required />
                    </div>
                </div>
                {/* row 2 */}
                <div className="flex gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <input type="text" defaultValue={supplier} name="supplier" placeholder="supplier name" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" defaultValue={taste} name="taste" placeholder="taste" className="input input-bordered" required />
                    </div>
                </div>
                {/* row 3 */}
                <div className="flex gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" defaultValue={category} name="category" placeholder="category" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" defaultValue={details} name="details" placeholder="details" className="input input-bordered" required />
                    </div>
                </div>
                {/* row 3 */}
                <div className="flex gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" defaultValue={photo} name="photo" placeholder="photo url" className="input input-bordered" required />
                    </div>
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-orange-800 text-white text-base">Update Coffee</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;