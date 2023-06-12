import { useRouter } from "next/router";
 import { useSession, signIn, signOut } from "next-auth/react";
 import styles from "@/styles/TodoList.module.css";

 export default function Signin() {
   const router = useRouter();
   const { data: session } = useSession();

   return (
    <div style = {{ fontFamily: 'SUITE-Regular'}}>
     <div className="flex justify-center h-screen">
       {session ? (
         <div className={styles.loginPage}>  
         <h1 class="text-4xl text-center pt-20 pb-5 px-5 font-bold" 
         style={{marginTop: "-30px" }}>
      YES, "{session.user.name}" CAN DO!
    </h1>         
           <div
    className="box"
    style={{
      position: "absolute",
      width: 550,
      height: 550,
      border: "2px solid #000",
      borderRadius: "15px",
      boxSizing: "border-box",
      transform: "translate(15%, 5%)",
      backgroundColor: "#FFFFFF",
      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.6)",
      // padding: "10px",
    }}
  >   
           <h2 className="text-3xl text-center m-4 font-bold">Yes, I Can Do! 백서</h2>
    <h3 className="text-xl  m-4"style={{ marginLeft: "1rem", marginRight: "1rem", marginTop: "-10px" }}>
    ● "Yes I Can Do!"는 나만의 투두리스트{("(혼자 할 일)")}를 운영하는 것은 물론, 다른 사람들과 함께 공동의 투두{("(함께 할 일)")}를 공유할 수 있습니다.
    </h3>
    <h3 className="text-xl  m-4"style={{ marginLeft: "1rem", marginRight: "1rem" }}>
    ● "혼자 할 일" 목록에서 여러분은 개인 투두리스트를 만들어 나가실 수 있습니다. 그리고 오늘 하루의 달성도를 확인하며 하루의 계획을 조율할 수 있습니다.
    </h3>
    <h4 className="text-xl  m-4"style={{ marginLeft: "1rem", marginRight: "1rem" }}>
    ● "함께 할 일" 목록에서는 같은 목표를 가진 사람들과 함께 공동의 투두를 리스트업하고 서로의 목표 달성 상황을 확인함으로써 서로에게 동기부여를 할 수 있습니다.</h4>
    <h4 className="text-xl  m-4"style={{ marginLeft: "1rem", marginRight: "1rem" }}>
    ● 자세한 설명은 ❓아이콘을 참고해주세요!
    </h4> 
    <h5 className="text-xl  m-4"style={{ margin: "0.1rem 0", marginLeft: "1rem" , marginRight: "1rem"}}>
    ▶ 아래 '시작하기' 버튼을 눌러 갓생을 살러가봅시다! 
    </h5> 
    <h6 className="text-4xl text-center font-bold"style={{ margin: "0.1rem 0", marginLeft: "1rem" , marginRight: "1rem"}}>
     Yes, You Can Do!
    </h6> 
    <div className="flex justify-center" style={{marginTop: "12px" }}>
    <div className="button-container">
    <button
  className={`w-40
              justify-self-center
              p-1 
              bg-pink-500 text-white
              border border-pink-500  rounded-full
              hover:bg-white hover:text-pink-500`}
  onClick={() => router.push("/")}
>
  시작하기
</button>
<button
  className={`w-40
              justify-self-center
              p-1 
              text-pink-500
              border border-pink-500 rounded-full
              hover:bg-white hover:text-pink-500`}
  onClick={() => signOut()}
>
  로그아웃
</button>
</div>
           </div>
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
     </div>
   );
 }