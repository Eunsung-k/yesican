import { useRouter } from "next/router";
 import { useSession, signIn, signOut } from "next-auth/react";
 import styles from "@/styles/TodoList.module.css";

 export default function Signin() {
   const router = useRouter();
   const { data: session } = useSession();

   return (
     <div className="flex justify-center h-screen">
       {session ? (
         <div className={styles.loginPage}>  
         <h1 class="text-xl text-center pt-20 pb-5 px-5 font-bold" 
         style={{marginTop: "-30px" }}>
      YES, "{session.user.name}" CAN DO!
    </h1>         
           <div
    className="box"
    style={{
      position: "absolute",
      width: 450,
      height: 550,
      border: "2px solid #000",
      borderRadius: "15px",
      boxSizing: "border-box",
      transform: "translate(30%, 5%)",
      backgroundColor: "#FFFFFF",
      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.6)",
      // padding: "10px",
    }}
  >   
           <div className="m-4">Signed in as {session.user.name}</div>
           <button
             className={`w-40
                       justify-self-center
                       p-1 mb-4
                     bg-pink-500 text-white
                       border border-pink-500 rounded
                     hover:bg-white hover:text-pink-500`}
             onClick={() => router.push("/")}
           >
             Go to Home
           </button>
           <button
             className={`w-40
                       justify-self-center
                       p-1 mb-4
                     text-pink-500
                       border border-pink-500 rounded
                     hover:bg-white hover:text-pink-500`}
             onClick={() => signOut()}
           >
             Sign out
           </button>
           </div>
         </div>
       ) : (
        <div className={styles.loginPage}>  
        <h1 class="text-6xl text-center pt-20 pb-5 px-5 font-bold" 
         style={{marginTop: "-30px" }}>
      YES, I CAN DO!
    </h1>         
           <div
    className="box"
    style={{
      position: "absolute",
      width: 450,
      height: 250,
      border: "2px solid #000",
      borderRadius: "15px",
      boxSizing: "border-box",
      transform: "translate(30%, 55%)",
      backgroundColor: "#FFFFFF",
      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.6)",
      // padding: "10px",
    }}
  >
    <h2 className="text-3xl text-center m-4 font-bold">환영합니다!</h2>
    <h3 className="text-xl  m-4"style={{ margin: "0.20rem 0", marginLeft: "4rem", marginTop: "-10px" }}>
    "Yes I Can Do!" 는 …
    </h3>
    <h3 className="text-xl  m-4"style={{ margin: "0.25rem 0", marginLeft: "4rem" }}>
    ● 나만의 투두리스트 관리
    </h3>
    <h4 className="text-xl  m-4"style={{ margin: "0.25rem 0", marginLeft: "4rem" }}>
    ● 함께 달성하는 공동의 목표 </h4>
    <h4 className="text-xl  m-4"style={{ margin: "0.25rem 0", marginLeft: "4rem" }}>
    ▶ 일정관리와 집단 동기부여를 한번에! 
    </h4>
    <div className="flex justify-center" style={{marginTop: "12px" }}>
    <button
             class={`w-48
             p-1 mb-4
             bg-pink-500 text-white
             border border-pink-500 rounded-full
             hover:bg-white hover:text-pink-500`}
             onClick={() => signIn()}
           >
             로그인하여 시작하기
           </button>
           </div>    
  </div>      
         </div>
       )}
     </div>
   );
 }