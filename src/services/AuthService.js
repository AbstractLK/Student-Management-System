import router from "@/router";

async function login(payload) {
  if(payload.email==='kaveesha' && payload.pass==='123'){
    await router.push('register');
    //console.log(payload);
    //alert('ok');
  }else{
    //alert('try again');
  }

}
export default login;
