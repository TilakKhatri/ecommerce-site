function Login() {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="min-w-[480px] p-12 rounded-[32px] shadow-2xl bg-white">
        <div className="text-center">
          <h2 className="title-screen text-neutral-600">Sign in to IMS</h2>
          <p className="mt-3 body-large text-neutral-400">
            Enter the details below and login
          </p>
        </div>

        <form className="mt-6">
          <fieldset>
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              className="input"
              id="email"
              placeholder="Enter your email"
            />
            {/* {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                {errors.email.message}
              </p>
            )} */}
          </fieldset>

          <fieldset className="mt-4">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              className="input"
              id="password"
              placeholder="Enter your password"
            />
            {/* {errors.password && (
              <p className="mt-2 text-sm text-red-500">
                {errors.password.message}
              </p>
            )} */}
          </fieldset>

          <div className="mt-4">
            <div className="flex gap-2">
              <input type="checkbox" className="cursor-pointer" />
              <label>Remember me</label>
            </div>
          </div>

          <button
            // disabled={isPending}
            type="submit"
            className="primary-btn body-medium mt-8"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
