import Analysis from "@/Components/Analysis";
import ClientReview from "@/Components/ClientReview";
import Partner from "@/Components/Partner";
import RecentProjects from "@/Components/RecentProjects";
import Services from "@/Components/Services";
import Summary from "@/Components/Summary";
import TopBanner from "@/Components/TopBanner";
import WorkingProgress from "@/Components/WorkingProgress";

export const metadata = {
  title: 'Md H H Martin | Home'
}

const HomePage =()=>{
  return (
    <>
      <TopBanner></TopBanner>
      <WorkingProgress></WorkingProgress>
      <Services></Services>
      <Analysis></Analysis>
      <Summary></Summary>
      <RecentProjects></RecentProjects>
      <ClientReview></ClientReview>
      <Partner></Partner>
    </>
  )
}
export default HomePage;