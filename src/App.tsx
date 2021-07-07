import { useState } from "react";

function useForm(initial: {}) {
  const [data, setData] = useState<any>(initial);
  return [
    data,
    {
      register(name: string, value: string) {
        return {
          name,
          checked: data[name] === value,
          value,
          onChange: (e: any) => setData({ ...data, [name]: e.target.value }),
        };
      },
    },
  ];
}

function App() {
  const [{ theme, mode }, { register }] = useForm({
    theme: "th-red",
    mode: "light",
  });
  return (
    <div className={`${theme} ${mode}`}>
      <div className="m-4">
        <h2 className="my-2">Choose a theme:</h2>
        <label className="block mb-1">
          <input {...register("theme", "th-red")} type="radio" />{" "}
          <span className="w-16 text-center inline-block px-1 border border-color-gray-200 bg-red-500 text-gray-100">
            Red
          </span>
        </label>
        <label className="block mb-1">
          <input {...register("theme", "th-blue")} type="radio" />{" "}
          <span className="w-16 text-center inline-block px-1 border border-color-gray-200 bg-blue-500 text-gray-100">
            Blue
          </span>
        </label>
        <label className="block mb-1">
          <input {...register("theme", "th-yellow")} type="radio" />{" "}
          <span className="w-16 text-center inline-block px-1 border border-color-gray-200 bg-yellow-500 text-gray-100">
            Yellow
          </span>
        </label>

        <h2 className="my-2">Choose a mode:</h2>
        <label className="block mb-1">
          <input {...register("mode", "light")} type="radio" />{" "}
          <span className="w-16 text-center inline-block px-1 border border-color-gray-200">
            Light
          </span>
        </label>
        <label className="block mb-1">
          <input {...register("mode", "dark")} type="radio" />{" "}
          <span className="w-16 text-center inline-block px-1 border border-color-gray-200 bg-gray-500 text-gray-100">
            Dark
          </span>
        </label>
      </div>
      <div className="theme-wrapper bg-secondary-100 dark:bg-gray-500">
        <div className="m-4">
          <h1 className="mb-2 font-bold text-primary-500 dark:text-primary-100">
            This is a sample page
          </h1>
          <p className="font-thin text-primary-500 dark:text-primary-100">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
