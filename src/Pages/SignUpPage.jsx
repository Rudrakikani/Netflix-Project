import { useState } from "react";

const SignUpPage = () => {
  const [email, setEmail] = useState(" ")
  const [Username, setUsername] = useState(" ")
  const [Password, setPassword] = useState(" ")

  const HandleSignUp = (e) => {
    e.preventDeafult();
    console.log(email, Username, Password)
  }
  return (
    <div className="h-screen w-full gero-bg">
      <header className="max-w-6xl mx-auto flex item-center justify-between p-4">
        <link to={"/"}>
        <img src="/netflix-logo.png" alt="logo" className="w-52" />
        </link>

      </header>
        <div className='flex justify-center items-center mt-20 mx-3'>
         <div className='w=full max-w-md p-8 sapce-y-6 bg-black/60 rounded-ig shodow-md'>
           <h1 className='text-center text-white text-2xl font-bold mb-4 '>Sign Up</h1>
          
         <from className='space-y-4' onSubmit={HandleSignUp} >
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-300 block">
              Email
            </label>
            <input type="email"
             className="w-full px-3 py-2 mt-1 border-gray-700 rounded-md bg-tramsparent text-white
             focus:outline-none focus:ring"
             placeholder="your@example.com"
             id="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="Username" className="text-sm font-medium text-gray-300 block">
              Username
            </label>
            <input type="text"
             className="w-full px-3 py-2 mt-1 border-gray-700 rounded-md bg-tramsparent text-white
             focus:outline-none focus:ring"
             placeholder="jondoo"
             id="Username"
             value={Username}
             onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-300 block">
              password
            </label>
            <input type="password"
             className="w-full px-3 py-2 mt-1 border-gray-700 rounded-md bg-tramsparent text-white
             focus:outline-none focus:ring"
             placeholder="********"
             id="password"
             value={Password}
             onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full py-2 bg-red-600 text-white font-semibold rounded-md
            hover:bg-red-700 ">
            Sign Up
          </button>
         </from>
         <div className=" text-center text=gray-400" >
           Already a member?{" "}
            <link to ={"/login"} className="text-red-500 hover:underline">
            Sign Up
           </link>
         </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage;