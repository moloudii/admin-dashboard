import { httpInterceptedService } from "@core/http-service";

function Courses() {
  return <h1>courses</h1>;
}
export async function coursesLoader() {
  const response = await httpInterceptedService.get("/Course/list");
  console.log(response.data);
  return response.data;
}
export default Courses;
