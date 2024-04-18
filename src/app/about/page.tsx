import AllInfo from "@/Components/AllInfo";
import CommonBanner from "@/Components/CommonBanner";
import Partner from "@/Components/Partner";

export const metadata = {
    title: 'Md H H Martin | About'
}

const AboutPage =()=>{
    return (
        <>
            <CommonBanner></CommonBanner>
            <AllInfo></AllInfo>
            <Partner></Partner>
        </>
    )
}
export default AboutPage;