import { useForm } from "react-hook-form";

const AddUpdateCategory = ({ setShowAddCategory }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="card">
      <div className="card-body">
        <form className="mb-4">
          <div>
            <label className="form-label">نام</label>
            <input
              className={`form-control form-control-lg ${
                errors.name && "is-invalid"
              }`}
              {...register("name", { required: true })}
            />
            {errors.name && errors.name.type === "required" && (
              <p className="text-danger small fw-bolder mt-1">نام الزامی است</p>
            )}
          </div>
          <div className="text-start mt-3">
            <button
              type="button"
              className="btn btn-lg btn-secondary ms-2"
              onClick={() => setShowAddCategory(false)}
            >
              بستن
            </button>
            <button type="submit" className="btn btn-lg btn-primary ms-2">
              ثبت تغییرات
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddUpdateCategory;
