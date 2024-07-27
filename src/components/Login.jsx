import { Header } from './Header';

export const Login = () => {
  return (
    <div>
      <Header />
      <div className='absolute'>
      <img
        className=" mx-auto"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_small.jpg"
        alt="netflix-Poster"
      />
      </div>
      
      <form className="flex flex-col justify-start absolute w-3/12 h-3/4 p-12  bg-black bg-opacity-75 my-36 mx-auto right-0 left-0 gap-4">
        <h1 className='font-bold text-3xl text-white my-4'>Sign In</h1>
        <div className='p-0.5 bg-gray-400 bg-opacity-25 rounded-lg'>
            <input type="text" placeholder='Email id' className='w-full h-12 p-2 bg-gray-200 bg-opacity-25 rounded-md'/>
        </div>
        <div className='p-0.5 bg-gray-400 bg-opacity-25 rounded-lg'>
            <input type="password" placeholder='password' className='w-full h-12 p-2 bg-gray-200 bg-opacity-25  rounded-md'/>
        </div>
        <button className='bg-red-700 w-full text-white h-11 p-2 rounded-md'>Sign In</button>
        <h1 className='text-white font-medium'>New User? Sign Up</h1>
      </form>
    </div>
  );
};
