import ClientReview from "@/Components/ClientReview";
import CommonBanner from "@/Components/CommonBanner";
import MyResume from "@/Components/MyResume";
import Technology from "@/Components/Technology";

export const metadata = {
    title: 'Md H H Martin | Skills'
}

const SkillsPage =()=>{
    return (
        <>
            <CommonBanner></CommonBanner>
            <Technology></Technology>
            <MyResume></MyResume>
            <ClientReview></ClientReview>
        </>
    )
}
export default SkillsPage;