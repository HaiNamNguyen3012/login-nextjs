"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Spin } from "react-loading";
import { loginSchema } from "../utils/validation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useRouter } from "next/router";
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  // const router = useRouter();
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // setIsLoading(true);
    // try {
    //   const response = await axios.post("/api/login", {
    //     email,
    //     password,
    //   });
    //   if (response.data.success) {
    //     navigate("/success");
    //   } else {
    //     console.log("Đăng nhập thất bại");
    //   }
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   setIsLoading(false);
    // }
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-light-900">
          Sign in
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => {
            return (
              <Form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-light-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />

                    <ErrorMessage name="email" component="div" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-light-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <div>
                      <Field
                        id="password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        autoComplete="current-password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {/* <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="ml-2"
                        id="hideAndshow"
                      >
                        {showPassword ? "Ẩn" : "Hiện"}
                      </button> */}
                    </div>
                    <ErrorMessage name="password" component="div" />
                  </div>
                </div>

                <div className="mt-2">
                  <input type="checkbox" id="rememberMe" className="mr-2" />
                  <label className="text-gray-500" htmlFor="rememberMe">
                    Remember me
                  </label>
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500 ml-4"
                  >
                    forget password?
                  </a>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    disabled={isSubmitting}
                  >
                    {isLoading ? <Spin size={20} color="#fff" /> : "Sign in"}
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
