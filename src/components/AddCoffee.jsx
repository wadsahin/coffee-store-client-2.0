
const AddCoffee = () => {
    const handleAddCoffee = e =>{
        e.preventDefault();
        // console.log("form clicked")
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(newCoffee);
    }
    return (
        <div className="card bg-base-100 w-full max-w-5xl mx-auto shrink-0 shadow-2xl">
            <h2 className="text-4xl font-bold text-orange-800">Add Coffee</h2>
            <form onSubmit={handleAddCoffee} className="card-body">
                {/* row 1 */}
                <div className="flex gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" name="quantity" placeholder="quantity" className="input input-bordered" required />
                    </div>
                </div>
                {/* row 2 */}
                <div className="flex gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <input type="text" name="supplier" placeholder="supplier name" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name="taste" placeholder="taste" className="input input-bordered" required />
                    </div>
                </div>
                {/* row 3 */}
                <div className="flex gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="category" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" placeholder="details" className="input input-bordered" required />
                    </div>
                </div>
                {/* row 3 */}
                <div className="flex gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                    </div>
                </div>

                <div className="form-control mt-6">
                    <button  className="btn bg-orange-800 text-white text-base">Add Coffee</button>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;