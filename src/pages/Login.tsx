import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit, getValues, watch } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const onBlur = (fieldName: string) => {
    return () => {
      console.log(`${fieldName} blurred`);
      setTimeout(() => {
        console.log("Delayed action after blur");
        localStorage.setItem(`${fieldName}`, getValues(`${fieldName}`));
      }, 1000);
    };
  };

  const watcher = watch("visaAvailable");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" mx-auto max-w-sm flex flex-col py-4"
    >
      <input type="checkbox" {...register("visaAvailable")} />

      {watcher && (
        <input
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400
       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-pink-500 invalid:text-pink-600
       focus:invalid:border-pink-500 focus:invalid:ring-pink-500
     "
          placeholder="visa details"
          type="text"
          {...register("visaDetails")}
        />
      )}

      <input
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400
       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-pink-500 invalid:text-pink-600
       focus:invalid:border-pink-500 focus:invalid:ring-pink-500
     "
        type="text"
        placeholder="First name"
        {...register("First name", { required: true, maxLength: 80 })}
      />
      <input
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400
       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-pink-500 invalid:text-pink-600
       focus:invalid:border-pink-500 focus:invalid:ring-pink-500
     "
        type="text"
        placeholder="Last name"
        {...register("Last name", {
          required: true,
          maxLength: 100,
          onBlur: onBlur("Last name"),
        })}
      />
      <input
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400
       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-pink-500 invalid:text-pink-600
       focus:invalid:border-pink-500 focus:invalid:ring-pink-500
     "
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400
       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-pink-500 invalid:text-pink-600
       focus:invalid:border-pink-500 focus:invalid:ring-pink-500
     "
        type="tel"
        placeholder="Mobile number"
        {...register("Mobile number", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />
      <select
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400
       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-pink-500 invalid:text-pink-600
       focus:invalid:border-pink-500 focus:invalid:ring-pink-500
     "
        {...register("Title", { required: true })}
      >
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <button
        type="submit"
        className=" bg-Soft-Red py-2.5 px-8 rounded-[6px] text-[hsl(200_100%_98%)] shadow-[0px_4px_10px_0px_rgb(228,229,246)] border-2 border-transparent hover:border-Soft-Red hover:bg-[hsl(200_100%_98%)] hover:text-Soft-Red font-medium text-lg capitalize mt-2"
      >
        Submit
      </button>
    </form>
  );
}
