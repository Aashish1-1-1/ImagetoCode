export default function Page(){
 return(
<form action="../pages/api/form" method="post" >
      <label htmlFor="first">First Name</label>
      <input type="file" id="code" name="code" required className="text-black"/>
      <button type="submit">Submit</button>
    </form>

 )
}
