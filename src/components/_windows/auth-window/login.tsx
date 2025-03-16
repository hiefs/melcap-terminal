import { Window } from "@/components/standard-window";

export const LoginWindow = () => {
  return (
    <Window
      width={400}
      height={200}
      title="Authorization"
      start={{ x: 300, y: 200 }}
    >
      <form>
        <div className="mb-4">
          <label className="mr-2" htmlFor="email">
            Email:
          </label>
          <input
            className="input border"
            id="email"
            name="email"
            type="email"
            required
          />
        </div>
        <div>
          <label className="mr-2" htmlFor="password">
            Password:
          </label>
          <input
            className="input border"
            id="password"
            name="password"
            type="password"
            required
          />
        </div>
        <div className="flex justify-center mt-14 gap-6">
          <button
            className="button border pl-4 pr-4"
            //   formAction={}
          >
            Log in
          </button>
          <button
            className="button border pl-4 pr-4"
            //   formAction={}
          >
            Sign up
          </button>
        </div>
      </form>
    </Window>
  );
};
