import logo from "@assets/images/logo.svg";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  Link,
  redirect,
  useNavigation,
  useRouteError,
  useSubmit,
} from "react-router-dom";
import { httpService } from "@core/http-service";
function Login() {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const submitForm = useSubmit();
  const onSubmit = (data) => {
    submitForm(data, { method: "post" });
  };
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  const routeErrors = useRouteError();
  return (
    <>
      <div className="text-center mt-4">
        <img src={logo} style={{ height: "100px" }} />
        <h1 className="h2">{t("login.title")}</h1>
        <p className="lead">{t("login.introMessage")}</p>
        <p className="lead">
          {t("login.areNotRegistered")}
          <Link to="/register" className="me-2">
            {t("login.register")}
          </Link>
        </p>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="m-sm-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">{t("login.mobile")}</label>
                <input
                  {...register("mobile", {
                    required: true,
                    minLength: 11,
                    maxLength: 11,
                  })}
                  className={`form-control form-control-lg ${
                    errors.mobile && "is-invalid"
                  }`}
                />
                {errors.mobile && errors.mobile.type === "required" && (
                  <p className="text-danger small fw-bold mt-1">
                    {t("login.validation.mobileRequired")}
                  </p>
                )}
                {errors.mobile &&
                  (errors.mobile.type === "minLength" ||
                    errors.mobile.type === "maxLength") && (
                    <p className="text-danger small fw-bold mt-1">
                      {t("login.validation.mobileLength")}
                    </p>
                  )}
              </div>
              <div className="mb-3">
                <label className="form-label">{t("login.password")}</label>
                <input
                  {...register("password", {
                    required: true,
                  })}
                  className={`form-control form-control-lg ${
                    errors.password && "is-invalid"
                  }`}
                  type="password"
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="text-danger small fw-bold mt-1">
                    {t("login.validation.passwordRequired")}
                  </p>
                )}
              </div>
              <div className="text-center mt-3">
                <button
                  type="submit"
                  className="btn btn-lg btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t("login.signingin") : t("login.signin")}
                </button>
              </div>
              {routeErrors && (
                <div className="alert alert-danger text-danger p-2 mt-3">
                  {routeErrors.response?.data.map((error, index) => (
                    <p className="mb-0" key={index}>
                      {t(`login.validation.${error.code}`)}
                    </p>
                  ))}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
export async function loginAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await httpService.post("/Users/login", data);
  if (response.status === 200) {
    localStorage.setItem("token", response.data.token);
    return redirect("/");
  }
}
