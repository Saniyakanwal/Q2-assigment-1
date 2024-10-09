
import Link from "next/link"
import cssStyle from "./skill.module.css"
const SkillPage = () => {
  return (
    <div>
      <h1 className={cssStyle.h1}>Service page</h1>
      <p className={cssStyle.p}>Here is services page</p>
      <h2 className={cssStyle.h2}>Web development</h2>
      <Link href="/Skill/service"className={cssStyle.Link}>Coding</Link>
    </div>
  )
}

export default SkillPage
