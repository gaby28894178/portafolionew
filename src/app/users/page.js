import Link from "next/link"

const page = () => {
  return (
    <div>
        <h2>Users</h2>
        <div>
         <Link href='/login'>login</Link>
        </div>
        <div>
         <Link href='/registrese'>Registrarse</Link>

        </div>
        
        
    </div>
  )
}

export default page