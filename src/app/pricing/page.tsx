import ClientReview from "@/Components/ClientReview";
import CommonBanner from "@/Components/CommonBanner";
import PricingList from "@/Components/PricingList";


export const metadata = {
    title: 'Md H H Martin | Pricing'
}

const PricingPage =()=>{
    return (
        <>
            <CommonBanner></CommonBanner>
            <PricingList></PricingList>
            <ClientReview></ClientReview>
        </>
    )
}
export default PricingPage;