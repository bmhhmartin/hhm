import AllPortfolio from "@/Components/AllPortfolio";
import ClientReview from "@/Components/ClientReview";
import CommonBanner from "@/Components/CommonBanner";


export const metadata = {
    title: 'Md H H Martin | Portfolio'
}

const PortfolioPage =()=>{
    return (
        <>
            <CommonBanner></CommonBanner>
            <AllPortfolio></AllPortfolio>
            <ClientReview></ClientReview>
        </>
    )
}
export default PortfolioPage;