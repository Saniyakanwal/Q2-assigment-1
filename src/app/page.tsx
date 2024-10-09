import Link from "next/link";



export default function(){
  return(
    <div className="flex gap-7">
      <Link href="/Home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/Contact">Contact</Link>
      <Link href="/Skill">Service</Link>    
    </div>
    
  )
}