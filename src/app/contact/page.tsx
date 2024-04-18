import ClientReview from "@/Components/ClientReview";
import Contact from "@/Components/Contact";
import Partner from "@/Components/Partner";
import CommonBanner from "../../Components/CommonBanner";

export const metadata = {
    title: 'Md H H Martin | Contact'
}

const ContactPage =()=>{
    return (
        <>
            <CommonBanner></CommonBanner>
            <Contact></Contact>
            <ClientReview></ClientReview>
            <Partner></Partner>
        </>
    )
}
export default ContactPage;